import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/site";
import { Arrow } from "./Section";

export function ProductCard({ p, index, large = false }: { p: Product; index: number; large?: boolean }) {
  return (
    <Link href={`/products/${p.slug}`} className="group block frame hover:border-navy transition-colors">
      <div className={`swatch ${large ? "aspect-[4/3]" : "aspect-[5/4]"}`}>
        <Image src={`/fabrics/${p.fabric}.webp`} alt={`${p.name} fabric`} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
        <span className="absolute left-4 top-4 mono bg-paper/90 px-2 py-1 text-navy">No. {String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="p-6 lg:p-7">
        <p className="eyebrow plain text-[.66rem]">{p.eyebrow}</p>
        <h3 className="display text-2xl lg:text-[1.75rem] mt-2 group-hover:text-blue transition-colors">{p.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{p.short}</p>
        <div className="mt-5 flex items-center justify-between text-xs mono text-muted">
          <span>MOQ {p.moq.replace("From ", "")}</span>
          <span className="inline-flex items-center gap-2 text-navy"><span className="hidden sm:inline">View range</span><Arrow /></span>
        </div>
      </div>
    </Link>
  );
}
