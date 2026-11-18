import { certifications } from "@/data/site";

export function Certifications({ compact = false }: { compact?: boolean }) {
  const list = [...certifications, ...certifications];
  return (
    <div className={`marquee border-y border-rule ${compact ? "py-4" : "py-6"}`} aria-label="Certifications held by partner mills">
      <div>
        {list.map((c, i) => (
          <div key={i} className="flex items-center gap-4 px-8 lg:px-12 whitespace-nowrap">
            <span className="display text-2xl text-navy">{c.code}</span>
            <span className="mono text-muted hidden sm:inline">{c.note}</span>
            <span className="ml-6 h-1 w-1 rounded-full bg-thread" />
          </div>
        ))}
      </div>
    </div>
  );
}
