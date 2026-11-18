import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Container, Arrow } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { QuoteForm } from "@/components/QuoteForm";
import { Faq } from "@/components/Faq";
import { countries, products, site } from "@/data/site";

export function generateStaticParams() { return countries.map((c) => ({ country: c.slug })); }

export async function generateMetadata({ params }: PageProps<"/hotel-linen-supplier/[country]">): Promise<Metadata> {
  const { country } = await params; const c = countries.find((x) => x.slug === country); if (!c) return {};
  return { title: `Hotel Linen Supplier in ${c.adjective === "UAE" ? "the UAE" : c.name} — Bed Linen & Towels`, description: `Pakistani hotel linen manufacturer supplying ${c.cities.slice(0, 3).join(", ")}. T-200 to T-300 bed linen, 500–700 GSM terry, bathrobes. ${c.transit}, ${c.incoterm}.`, keywords: c.keywords, alternates: { canonical: `/hotel-linen-supplier/${c.slug}` } };
}

export default function CountryPage(props: PageProps<"/hotel-linen-supplier/[country]">) {
  return <Suspense fallback={null}><CountryPageInner params={props.params} /></Suspense>;
}

async function CountryPageInner({ params }: { params: PageProps<"/hotel-linen-supplier/[country]">["params"] }) {
  const { country } = await params; const c = countries.find((x) => x.slug === country); if (!c) notFound();
  const hotel = products[0], towels = products[2];
  const faqs = [
    { q: `How long does shipping to ${c.name} take?`, a: `${c.transit} to ${c.port}, plus customs clearance. Urgent replenishment can go by air in 4–6 days.` },
    { q: `Do you quote ${c.incoterm.split(" or ")[1] ?? "CIF"}?`, a: `Yes. We quote ${c.incoterm}. DDP to your warehouse is available on request through our forwarding partners.` },
    { q: "What is the minimum order for a hotel programme?", a: "300 pieces per style for terry and 500 per style for bed linen. Opening orders for a 150-room property typically run 3,000 to 5,000 pieces across sizes." },
  ];
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", serviceType: "Hotel linen supply", provider: { "@type": "Organization", name: site.name, url: site.url }, areaServed: { "@type": "Country", name: c.name }, description: c.intro };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="pt-10 lg:pt-16">
        <nav className="mono text-muted flex gap-2 mb-8" aria-label="Breadcrumb"><Link href="/" className="hover:text-navy">Home</Link><span>/</span><Link href="/hotel-linen-supplier" className="hover:text-navy">Hotel linen</Link><span>/</span><span className="text-navy">{c.name}</span></nav>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] items-end">
          <div>
            <span className="eyebrow">Hotel linen supplier · {c.name}</span>
            <h1 className="display text-4xl sm:text-5xl lg:text-[4rem] mt-5">Hotel linen for {c.cities[0]} and the rest of {c.adjective === "UAE" ? "the Emirates" : c.name}, <em>made in Pakistan.</em></h1>
            <p className="lede mt-6">{c.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#quote" className="btn btn-primary">Request a quote <Arrow /></a><Link href="/products/hotel-linen" className="btn btn-outline">Hotel linen range</Link></div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-rule border border-rule">
            {[["Port of entry", c.port], ["Transit", c.transit], ["Terms", c.incoterm], ["Cities served", c.cities.join(", ")]].map(([l, v]) => <div key={l} className="bg-ivory p-5"><p className="mono text-muted">{l}</p><p className="font-medium text-navy mt-2 text-[15px]">{v}</p></div>)}
          </div>
        </div>
      </Container>

      <Container className="grid gap-12 lg:grid-cols-2 py-16 lg:py-24 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="swatch aspect-[3/4] corner"><Image src="/fabrics/percale.webp" alt="Percale sheeting" fill sizes="25vw" className="object-cover" /></div>
          <div className="swatch aspect-[3/4] mt-8"><Image src="/fabrics/terry.webp" alt="Terry towelling" fill sizes="25vw" className="object-cover" /></div>
        </div>
        <div>
          <span className="eyebrow">Why {c.adjective} buyers work with us</span>
          <ul className="mt-6 space-y-4">{c.points.map((p) => <li key={p} className="flex gap-4 border-t border-rule pt-4 text-[1.02rem]"><span className="mono text-blue mt-1">—</span>{p}</li>)}</ul>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[hotel, towels].map((p) => <Link key={p.slug} href={`/products/${p.slug}`} className="group frame p-5 hover:border-navy transition-colors"><p className="mono text-muted">{p.eyebrow}</p><p className="display text-xl mt-2 group-hover:text-blue">{p.name}</p><p className="text-xs text-muted mt-2">{p.moq} · {p.leadTime}</p></Link>)}
          </div>
        </div>
      </Container>

      <section className="weave border-y border-rule py-16 lg:py-24">
        <Container>
          <h2 className="display text-3xl lg:text-5xl mb-10">What a {c.adjective} hotel programme includes</h2>
          <div className="grid gap-px bg-rule border border-rule md:grid-cols-2 lg:grid-cols-4">
            {hotel.items.slice(0, 8).map((it) => <div key={it.name} className="bg-ivory p-6"><h3 className="display text-xl">{it.name}</h3><p className="text-sm text-muted mt-2">{it.spec}</p><p className="mono text-muted mt-4">MOQ {it.moq}</p></div>)}
          </div>
        </Container>
      </section>

      <Container className="grid gap-14 lg:grid-cols-[1fr_1.3fr] py-16 lg:py-24">
        <Faq items={faqs} title={`Supplying ${c.name}: questions`} />
        <div id="quote" className="frame p-6 lg:p-10"><p className="eyebrow mb-2">Quotation</p><h2 className="display text-3xl mb-8">Request a hotel linen quote for {c.name}</h2><QuoteForm defaultProduct="Hotel Linen" /></div>
      </Container>

      <Container className="pb-4"><p className="mono text-muted mb-4">Other markets</p><div className="flex flex-wrap gap-2">{countries.filter((x) => x.slug !== c.slug).map((x) => <Link key={x.slug} href={`/hotel-linen-supplier/${x.slug}`} className="border border-rule px-4 py-2 text-sm hover:border-navy">{x.name}</Link>)}</div></Container>
      <CtaBand />
    </>
  );
}
