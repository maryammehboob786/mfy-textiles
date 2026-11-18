import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Container, Arrow } from "@/components/Section";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { products, site } from "@/data/site";

export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params; const p = products.find((x) => x.slug === slug); if (!p) return {};
  return { title: `${p.name} Manufacturer & Exporter, Pakistan`, description: `${p.short} ${p.moq}. Lead time ${p.leadTime}. Produced in ${p.hub}, FOB Karachi.`, keywords: p.keywords, alternates: { canonical: `/products/${p.slug}` }, openGraph: { title: `${p.name} — MFY Textiles`, description: p.short, images: [`/fabrics/${p.fabric}.webp`] } };
}

export default function ProductPage(props: PageProps<"/products/[slug]">) {
  return <Suspense fallback={null}><ProductPageInner params={props.params} /></Suspense>;
}

async function ProductPageInner({ params }: { params: PageProps<"/products/[slug]">["params"] }) {
  const { slug } = await params; const p = products.find((x) => x.slug === slug); if (!p) notFound();
  const i = products.indexOf(p); const next = products[(i + 1) % products.length];
  const jsonLd = { "@context": "https://schema.org", "@type": "Product", name: p.name, description: p.intro, brand: { "@type": "Brand", name: site.name }, manufacturer: { "@type": "Organization", name: site.name }, image: `${site.url}/fabrics/${p.fabric}.webp`, category: p.eyebrow, offers: { "@type": "AggregateOffer", priceCurrency: "USD", availability: "https://schema.org/InStock", eligibleQuantity: { "@type": "QuantitativeValue", minValue: parseInt(p.moq.replace(/\D/g, "")) || 200, unitText: "pieces" }, areaServed: p.markets } };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="pt-10 lg:pt-16">
        <nav className="mono text-muted flex gap-2 mb-8" aria-label="Breadcrumb"><Link href="/" className="hover:text-navy">Home</Link><span>/</span><Link href="/products" className="hover:text-navy">Products</Link><span>/</span><span className="text-navy">{p.name}</span></nav>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] items-end">
          <div>
            <span className="eyebrow">{p.eyebrow} · No. {String(i + 1).padStart(2, "0")}</span>
            <h1 className="display text-4xl sm:text-5xl lg:text-[4rem] mt-5">{p.headline}</h1>
            <p className="lede mt-6">{p.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#quote" className="btn btn-primary">Request a quote <Arrow /></a><a href="#range" className="btn btn-outline">See the range</a></div>
          </div>
          <div className="grid grid-cols-3 gap-px bg-rule border border-rule">
            {[["MOQ", p.moq.replace("From ", "")], ["Lead time", p.leadTime], ["Produced in", p.hub]].map(([l, v]) => <div key={l} className="bg-ivory p-5"><p className="mono text-muted">{l}</p><p className="display text-xl mt-2">{v}</p></div>)}
          </div>
        </div>
        <div className="swatch aspect-[21/8] mt-12 corner"><Image src={`/fabrics/${p.fabric}.webp`} alt={`${p.name} fabric close-up`} fill priority sizes="100vw" className="object-cover" /></div>
      </Container>

      <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] py-16 lg:py-24">
        <div className="space-y-5 text-[1.02rem] leading-relaxed text-ink/85">{p.body.map((t) => <p key={t}>{t}</p>)}
          <div className="pt-4"><p className="mono text-muted mb-3">Markets served</p><div className="flex flex-wrap gap-2">{p.markets.map((m) => <span key={m} className="border border-rule px-3 py-1.5 text-sm">{m}</span>)}</div></div>
        </div>
        <div><p className="eyebrow mb-6">Specification</p><table className="spec"><tbody>{p.specs.map((s) => <tr key={s.label}><th>{s.label}</th><td>{s.value}</td></tr>)}</tbody></table></div>
      </Container>

      <section id="range" className="weave border-y border-rule py-16 lg:py-24">
        <Container>
          <div className="flex items-end justify-between mb-10"><h2 className="display text-3xl lg:text-5xl">The {p.name.toLowerCase()} range</h2><span className="mono text-muted hidden sm:inline">{p.items.length} constructions</span></div>
          <div className="grid gap-px bg-rule border border-rule md:grid-cols-2 lg:grid-cols-3">
            {p.items.map((it, k) => (
              <Reveal key={it.name} delay={(k % 3) as 0 | 1 | 2} className="bg-ivory p-6 lg:p-7">
                <span className="mono text-muted">{String(k + 1).padStart(2, "0")}</span>
                <h3 className="display text-xl mt-3">{it.name}</h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">{it.spec}</p>
                <dl className="mt-4 grid grid-cols-2 gap-2 text-xs"><div><dt className="mono text-muted">Sizes</dt><dd className="mt-1">{it.sizes ?? "Custom"}</dd></div><div><dt className="mono text-muted">MOQ</dt><dd className="mt-1">{it.moq}</dd></div></dl>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Container className="grid gap-14 lg:grid-cols-[1fr_1.3fr] py-16 lg:py-24">
        <Faq items={p.faqs} />
        <div id="quote" className="frame p-6 lg:p-10"><p className="eyebrow mb-2">Quotation</p><h2 className="display text-3xl mb-8">Request a {p.name.toLowerCase()} quote</h2><QuoteForm defaultProduct={p.name} /></div>
      </Container>

      <Container className="pb-4"><Link href={`/products/${next.slug}`} className="group flex items-center justify-between border-y border-rule py-8"><span><span className="mono text-muted">Next range</span><span className="display text-3xl block mt-1 group-hover:text-blue transition-colors">{next.name}</span></span><Arrow /></Link></Container>
      <CtaBand light={false} />
    </>
  );
}
