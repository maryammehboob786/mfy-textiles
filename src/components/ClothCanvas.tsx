"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export type ClothSlide = { key: string; name: string; sub: string; mass: number; wind: number; stiff: number; rough: number; mark: "navy" | "white" };

type Props = { slides: ClothSlide[]; active: number; onAutoAdvance?: () => void; paused?: boolean };

const W = 28, H = 18, SEG_X = 44, SEG_Y = 28, DAMP = 0.03, DT = 1 / 60, TS = DT * DT;

class Particle {
  pos: THREE.Vector3; prev: THREE.Vector3; orig: THREE.Vector3; a = new THREE.Vector3(); im: number; tmp = new THREE.Vector3();
  constructor(x: number, y: number, z: number, m: number) { this.pos = new THREE.Vector3(x, y, z); this.prev = this.pos.clone(); this.orig = this.pos.clone(); this.im = 1 / m; }
  addForce(f: THREE.Vector3) { this.a.add(this.tmp.copy(f).multiplyScalar(this.im)); }
  integrate() { const n = this.tmp.subVectors(this.pos, this.prev).multiplyScalar(1 - DAMP).add(this.pos).add(this.a.multiplyScalar(TS)); this.prev.copy(this.pos); this.pos.copy(n); this.a.set(0, 0, 0); }
}

async function loadImage(src: string) { return new Promise<HTMLImageElement>((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src; }); }

async function makeTexture(s: ClothSlide): Promise<THREE.Texture> {
  const [fab, mark] = await Promise.all([loadImage(`/fabrics/${s.key}.webp`), loadImage(`/brand/mark-${s.mark}.png`)]);
  const size = 1024, c = document.createElement("canvas"); c.width = size; c.height = size;
  const g = c.getContext("2d")!; g.drawImage(fab, 0, 0, size, size);
  const mw = size * 0.6, mh = mw * (mark.height / mark.width); g.globalAlpha = 0.94; g.drawImage(mark, (size - mw) / 2, (size - mh) / 2 - 36, mw, mh); g.globalAlpha = 1;
  g.fillStyle = s.mark === "white" ? "#fff" : "#061030"; g.font = "500 30px IBM Plex Mono, ui-monospace, monospace"; g.textAlign = "center";
  // letter-spaced wordmark
  const word = "TEXTILES", sp = 16; let total = 0; for (const ch of word) total += g.measureText(ch).width + sp; let x = size / 2 - total / 2 + sp / 2;
  for (const ch of word) { g.fillText(ch, x + g.measureText(ch).width / 2, (size + mh) / 2 + 26); x += g.measureText(ch).width + sp; }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

export default function ClothCanvas({ slides, active, onAutoAdvance, paused }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const api = useRef<{ go: (i: number) => void; setPaused: (p: boolean) => void } | null>(null);
  const advRef = useRef(onAutoAdvance); advRef.current = onAutoAdvance;

  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    let disposed = false, raf = 0, pausedFlag = !!paused;
    const mobile = matchMedia("(max-width: 768px)").matches;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: !mobile, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.25 : 2)); renderer.shadowMap.enabled = !mobile; renderer.shadowMap.type = THREE.PCFShadowMap;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 1, 1000); camera.position.set(0, 0, 72);
    scene.add(new THREE.HemisphereLight(0xffffff, 0xd8cfbe, 1.1));
    const key = new THREE.DirectionalLight(0xffffff, 1.5); key.position.set(20, 30, 40); key.castShadow = !mobile; key.shadow.mapSize.set(1024, 1024);
    Object.assign(key.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30 }); scene.add(key);
    const rim = new THREE.DirectionalLight(0xbfd0ff, 0.6); rim.position.set(-25, 10, -20); scene.add(rim);

    const particles: Particle[] = []; const cons: [Particle, Particle, number][] = [];
    const idx = (u: number, v: number) => u + v * (SEG_X + 1);
    for (let v = 0; v <= SEG_Y; v++) for (let u = 0; u <= SEG_X; u++) particles.push(new Particle((u / SEG_X - 0.5) * W, (0.5 - v / SEG_Y) * H + H * 0.1, 0, 0.1));
    for (let v = 0; v <= SEG_Y; v++) for (let u = 0; u <= SEG_X; u++) { if (u < SEG_X) cons.push([particles[idx(u, v)], particles[idx(u + 1, v)], W / SEG_X]); if (v < SEG_Y) cons.push([particles[idx(u, v)], particles[idx(u, v + 1)], H / SEG_Y]); }
    const pins = Array.from({ length: SEG_X + 1 }, (_, u) => idx(u, 0));
    const diff = new THREE.Vector3();
    const satisfy = (p1: Particle, p2: Particle, d: number, k: number) => { diff.subVectors(p2.pos, p1.pos); const cur = diff.length(); if (!cur) return; const corr = diff.multiplyScalar((1 - d / cur) * 0.5 * k); p1.pos.add(corr); p2.pos.sub(corr); };

    const geo = new THREE.PlaneGeometry(W, H, SEG_X, SEG_Y);
    const matA = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, roughness: 1, metalness: 0 });
    const matB = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, roughness: 1, metalness: 0, transparent: true, opacity: 0, depthWrite: false });
    const cloth = new THREE.Mesh(geo, matA); cloth.castShadow = true; scene.add(cloth);
    const clothB = new THREE.Mesh(geo, matB); clothB.renderOrder = 1; scene.add(clothB);
    const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, W + 6, 24), new THREE.MeshStandardMaterial({ color: 0x061030, roughness: 0.4, metalness: 0.6 })); rail.rotation.z = Math.PI / 2; rail.position.y = H * 0.6 + 0.25; scene.add(rail);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.ShadowMaterial({ opacity: 0.16 })); floor.rotation.x = -Math.PI / 2; floor.position.y = -H * 0.48; floor.receiveShadow = true; scene.add(floor);

    const textures: (THREE.Texture | null)[] = slides.map(() => null);
    let cur = 0; let fade: { to: number; t: number } | null = null; let autoT = 0; const AUTO = 7;
    const ensure = async (i: number) => { if (!textures[i]) textures[i] = await makeTexture(slides[i]); return textures[i]!; };
    ensure(0).then((t) => { if (disposed) return; matA.map = t; matA.roughness = slides[0].rough; matA.needsUpdate = true; slides.forEach((_, i) => i && ensure(i)); });

    const go = async (i: number) => {
      if (i === cur) return;
      if (fade) { matA.map = textures[fade.to]; matA.roughness = slides[fade.to].rough; matA.needsUpdate = true; matB.opacity = 0; cur = fade.to; fade = null; if (i === cur) return; }
      const t = await ensure(i); if (disposed) return;
      matB.map = t; matB.roughness = slides[i].rough; matB.needsUpdate = true; fade = { to: i, t: 0 }; autoT = 0;
    };
    api.current = { go, setPaused: (p) => { pausedFlag = p; } };

    const pointer = new THREE.Vector2(); let gust = 0;
    const onMove = (e: PointerEvent) => { const r = canvas.getBoundingClientRect(); pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, -(((e.clientY - r.top) / r.height) * 2 - 1)); gust = 1; };
    canvas.addEventListener("pointermove", onMove);

    const windForce = new THREE.Vector3(), tmpN = new THREE.Vector3(); const pos = geo.attributes.position; const normals = geo.attributes.normal; const index = geo.index!;
    const resize = () => { const r = canvas.parentElement!.getBoundingClientRect(); renderer.setSize(r.width, r.height, false); camera.aspect = r.width / r.height; camera.updateProjectionMatrix(); };
    const ro = new ResizeObserver(resize); ro.observe(canvas.parentElement!); resize();
    const t0 = performance.now(); let last = 0;

    const frame = () => {
      raf = requestAnimationFrame(frame);
      const t = (performance.now() - t0) / 1000; const dt = Math.min(t - last, 0.1); last = t;
      if (pausedFlag) return;
      const f = slides[fade ? fade.to : cur];
      gust *= 0.985;
      const strength = (2.4 + Math.sin(t * 0.7) * 1.6 + Math.sin(t * 2.3) * 0.9) * f.wind + gust * 10 * f.wind;
      windForce.set(Math.sin(t * 0.5) * 0.6 + pointer.x * 1.4, Math.cos(t * 0.9) * 0.2 + pointer.y * 0.4, 1).normalize().multiplyScalar(strength);
      for (let i = 0; i < index.count; i += 3) for (let k = 0; k < 3; k++) { const vi = index.getX(i + k); tmpN.fromBufferAttribute(normals, vi); particles[vi].addForce(tmpN.multiplyScalar(tmpN.dot(windForce))); }
      const g = new THREE.Vector3(0, -22 * f.mass, 0);
      for (const p of particles) { p.addForce(g); p.integrate(); }
      for (let it = 0; it < 8; it++) for (const c of cons) satisfy(c[0], c[1], c[2], Math.min(1, f.stiff));
      for (const pi of pins) { const p = particles[pi]; p.pos.copy(p.orig); p.prev.copy(p.orig); }
      for (let i = 0; i < particles.length; i++) pos.setXYZ(i, particles[i].pos.x, particles[i].pos.y, particles[i].pos.z);
      pos.needsUpdate = true; geo.computeVertexNormals();
      if (fade) { fade.t += dt / 1.1; const k = Math.min(1, fade.t); matB.opacity = k * k * (3 - 2 * k); if (k >= 1) { matA.map = textures[fade.to]; matA.roughness = slides[fade.to].rough; matA.needsUpdate = true; matB.opacity = 0; cur = fade.to; fade = null; } }
      autoT += dt; if (autoT > AUTO) { autoT = 0; advRef.current?.(); }
      camera.position.x += (pointer.x * 3 - camera.position.x) * 0.03; camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    frame();
    return () => { disposed = true; cancelAnimationFrame(raf); ro.disconnect(); canvas.removeEventListener("pointermove", onMove); geo.dispose(); matA.dispose(); matB.dispose(); textures.forEach((t) => t?.dispose()); renderer.dispose(); api.current = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { api.current?.go(active); }, [active]);
  useEffect(() => { api.current?.setPaused(!!paused); }, [paused]);

  return <canvas ref={ref} className="block h-full w-full" aria-hidden />;
}
