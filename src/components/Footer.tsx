import Link from "next/link";
import Image from "next/image";
import { products, countries, site, nav } from "@/data/site";
import { Seal } from "./Seal";

export function Footer() {
  return (
    <footer className="weave-navy text-[#d9d6cc] mt-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Image src="/brand/logo-white.png" alt="MFY Textiles" width={160} height={87} className="h-14 w-auto" />
          <p className="mt-6 max-w-[38ch] text-sm leading-relaxed text-[#b9b6ab]">{site.tagline}</p>
          <div className="mt-8 flex items-center gap-5">
            <Seal size={84} light />
            <p className="text-xs leading-relaxed text-[#b9b6ab] max-w-[26ch]">OEKO-TEX® certified partner mills. AQL 2.5 final inspection on every shipment.</p>
          </div>
        </div>
        <div>
          <h3 className="mono uppercase text-[#8f8c82] mb-5">Products</h3>
          <ul className="space-y-2.5 text-sm">{products.map((p) => <li key={p.slug}><Link className="hover:text-white" href={`/products/${p.slug}`}>{p.name}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className="mono uppercase text-[#8f8c82] mb-5">Hotel linen by market</h3>
          <ul className="space-y-2.5 text-sm">{countries.map((c) => <li key={c.slug}><Link className="hover:text-white" href={`/hotel-linen-supplier/${c.slug}`}>{c.name}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className="mono uppercase text-[#8f8c82] mb-5">Company</h3>
          <ul className="space-y-2.5 text-sm">
            {nav.slice(2).map((n) => <li key={n.href}><Link className="hover:text-white" href={n.href}>{n.label}</Link></li>)}
            <li><Link className="hover:text-white" href="/request-a-quote">Request a quote</Link></li>
            <li><Link className="hover:text-white" href="/contact">Contact</Link></li>
          </ul>
          <h3 className="mono uppercase text-[#8f8c82] mt-8 mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a className="hover:text-white" href={`https://wa.me/${site.whatsapp}`}>{site.phone}</a></li>
            <li>{site.address.city}, {site.address.country}</li>
            <li><a className="hover:text-white" href={site.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-5 flex flex-col sm:flex-row gap-3 justify-between text-[11px] tracking-[.18em] uppercase font-mono text-[#8f8c82]">
          <span>© 2026 {site.legalName}</span>
          <span>FOB Karachi · CIF · DDP · Incoterms 2020</span>
        </div>
      </div>
    </footer>
  );
}
