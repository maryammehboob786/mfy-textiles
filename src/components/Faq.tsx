export function Faq({ items, title = "Questions buyers ask" }: { items: { q: string; a: string }[]; title?: string }) {
  const jsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) };
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h2 className="display text-3xl lg:text-4xl mb-8">{title}</h2>
      <div className="hairline">
        {items.map((i) => (
          <details key={i.q} className="group border-b border-rule">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-[1.05rem] font-medium text-navy">
              {i.q}
              <span className="relative h-5 w-5 shrink-0"><span className="absolute left-0 top-1/2 h-px w-full bg-navy" /><span className="absolute left-1/2 top-0 h-full w-px bg-navy transition-transform group-open:rotate-90" /></span>
            </summary>
            <p className="pb-6 pr-10 text-[.97rem] leading-relaxed text-muted max-w-[70ch]">{i.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
