"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ClothSlide } from "./ClothCanvas";
import { Container } from "./Section";

const ClothCanvas = dynamic(() => import("./ClothCanvas"), { ssr: false, loading: () => <div className="h-full w-full" /> });

const slides: (ClothSlide & { href: string })[] = [
  { key: "percale", name: "Percale hotel linen", sub: "T-200 · 100% cotton", mass: 1, wind: 1, stiff: 1, rough: 0.95, mark: "navy", href: "/products/hotel-linen" },
  { key: "terry", name: "Ring-spun terry", sub: "600 GSM · zero-twist", mass: 1.25, wind: 0.6, stiff: 0.8, rough: 1, mark: "navy", href: "/products/towels" },
  { key: "sateen", name: "Sateen bedding", sub: "T-400 · long staple", mass: 0.9, wind: 1.1, stiff: 0.9, rough: 0.4, mark: "navy", href: "/products/bed-linen" },
  { key: "scrubs", name: "Stretch scrub fabric", sub: "Poly-rayon-spandex · 170 GSM", mass: 1.1, wind: 0.8, stiff: 1, rough: 0.9, mark: "white", href: "/products/medical-scrubs" },
  { key: "workwear", name: "Workwear twill", sub: "Poly-cotton · 245 GSM", mass: 1.4, wind: 0.5, stiff: 1.3, rough: 0.9, mark: "white", href: "/products/workwear" },
  { key: "lawn", name: "Printed lawn", sub: "70 GSM · reactive print", mass: 0.7, wind: 1.5, stiff: 0.7, rough: 0.85, mark: "navy", href: "/products/lawn-suits" },
];

export function ClothSection() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    setReduced(matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "200px 0px" }); io.observe(el); return () => io.disconnect();
  }, []);
  const s = slides[active];
  return (
    <section ref={ref} id="fabrics" className="relative overflow-hidden bg-[linear-gradient(180deg,#efe9dd,#f6f2ea_45%,#ebe4d6)] border-y border-rule">
      <div className="relative h-[82vh] min-h-[560px] max-h-[900px]">
        {visible && !reduced ? <ClothCanvas slides={slides} active={active} paused={!visible} onAutoAdvance={() => setActive((a) => (a + 1) % slides.length)} /> : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={`/fabrics/${s.key}.webp`} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
        )}
        <Container className="pointer-events-none absolute inset-0 flex flex-col justify-between py-10 lg:py-14">
          <div className="max-w-[26ch]">
            <span className="eyebrow">Our fabrics</span>
            <h2 className="display text-3xl lg:text-5xl mt-4 transition-opacity" key={s.key}>{s.name}</h2>
            <p className="mono text-muted mt-3">{s.sub}</p>
          </div>
          <div className="pointer-events-auto">
            <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
              {slides.map((sl, i) => (
                <button key={sl.key} onClick={() => setActive(i)} aria-pressed={i === active} className={`shrink-0 flex items-center gap-3 border px-3.5 py-2.5 text-left transition backdrop-blur-sm ${i === active ? "border-blue bg-paper" : "border-rule/80 bg-paper/60 hover:bg-paper"}`}>
                  <span className="h-8 w-8 bg-cover bg-center border border-navy/10" style={{ backgroundImage: `url(/fabrics/${sl.key}-sm.jpg)` }} />
                  <span><span className="block text-[13px] font-medium text-navy">{sl.name}</span><span className="block text-[11px] text-muted">{sl.sub}</span></span>
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs mono text-muted">
              <span className="hidden sm:inline">Move your cursor: the wind follows it</span>
              <Link href={s.href} className="link-ul text-navy">See the {s.name.toLowerCase()} range</Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
