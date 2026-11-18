import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container, SectionHead, Arrow } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { countries, products } from "@/data/site";

export const metadata: Metadata = { title: "Hotel Linen Supplier — Bed Linen, Towels & Bathrobes for Hotels", description: "Hotel linen manufacturer in Pakistan supplying hotel groups, laundries and distributors in the UAE, Kuwait, Saudi Arabia, Qatar, the UK and the USA. T-200 to T-300 bed linen, 500–700 GSM terry, par-stock replenishment.", alternates: { canonical: "/hotel-linen-supplier" } };

export default function Hospitality() {
  const p = products[0];
  return (
    <>
      <Container className="pt-12 lg:pt-20 pb-16">
        <SectionHead eyebrow="Hospitality" title={<>A hotel linen supplier that ships to <em>your port.</em></>} lede="We manufacture complete linen programmes for hotels, resorts, hospitals and serviced apartments, and we ship them on weekly sailings from Karachi to the Gulf, Europe and North America." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {countries.map((c) => (
            <Link key={c.slug} href={`/hotel-linen-supplier/${c.slug}`} className="group frame p-6 hover:border-navy transition-colors flex flex-col justify-between min-h-[220px]">
              <div><p className="mono text-muted">{c.port}</p><h2 className="display text-2xl mt-3 group-hover:text-blue transition-colors">{c.name}</h2></div>
              <p className="text-xs text-muted mt-6 flex items-center justify-between">{c.transit}<Arrow /></p>
            </Link>
          ))}
        </div>
      </Container>
      <section className="weave border-y border-rule py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="swatch aspect-[4/3] corner"><Image src="/fabrics/percale.webp" alt="Percale hotel bed linen" fill sizes="50vw" className="object-cover" /></div>
          <div>
            <span className="eyebrow">The programme</span>
            <h2 className="display text-3xl lg:text-5xl mt-4">{p.headline}</h2>
            <p className="lede mt-6">{p.body[0]}</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">{p.items.slice(0, 8).map((i) => <li key={i.name} className="border-t border-rule pt-3">{i.name}</li>)}</ul>
            <Link href="/products/hotel-linen" className="btn btn-primary mt-10">Full hotel linen range <Arrow /></Link>
          </div>
        </Container>
      </section>
      <Container className="py-16 lg:py-24 max-w-[900px]"><Faq items={p.faqs} /></Container>
      <CtaBand />
    </>
  );
}
