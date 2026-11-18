export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1400px] px-6 lg:px-10 ${className}`}>{children}</div>;
}

export function SectionHead({ eyebrow, title, lede, number, light = false }: { eyebrow: string; title: React.ReactNode; lede?: string; number?: string; light?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-16 mb-12 lg:mb-16">
      <div className="flex items-start gap-6">
        {number && <span className={`display text-5xl lg:text-6xl leading-none ${light ? "text-white/25" : "text-linen"}`}>{number}</span>}
        <span className={`eyebrow mt-3 ${light ? "!text-[#6b8cff]" : ""}`}>{eyebrow}</span>
      </div>
      <div>
        <h2 className={`display text-4xl lg:text-[3.4rem] ${light ? "!text-white" : ""}`}>{title}</h2>
        {lede && <p className={`lede mt-6 ${light ? "!text-[#b9b6ab]" : ""}`}>{lede}</p>}
      </div>
    </div>
  );
}

export function Arrow() {
  return <svg className="arrow" width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden><path d="M0 6h16M11 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" /></svg>;
}
