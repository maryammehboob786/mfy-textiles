"use client";
import { useEffect, useRef } from "react";

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: { children: React.ReactNode; className?: string; delay?: 0 | 1 | 2 | 3; as?: "div" | "section" | "li" | "article" }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    io.observe(el); return () => io.disconnect();
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const T = Tag as any;
  return <T ref={ref} data-delay={delay || undefined} className={`reveal ${className}`}>{children}</T>;
}
