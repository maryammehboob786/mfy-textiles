import Link from "next/link";
import Image from "next/image";
import { Container, SectionHead, Arrow } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { Certifications } from "@/components/Certifications";
import { ClothSection } from "@/components/ClothSection";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Seal } from "@/components/Seal";
import { products, countries, steps, stats, faqsGeneral, site } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] items-center pt-10 pb-20 lg:pt-20 lg:pb-28">
          <div>
            <Reveal><span className="eyebrow">Export manufacturing · Pakistan</span></Reveal>
            <Reveal delay={1}><h1 className="display text-[2.7rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem] mt-6">Hotel linen, bedding and towels, <em>woven in Pakistan</em>, delivered to your door.</h1></Reveal>
            <Reveal delay={2}><p className="lede mt-7">Private-label and hospitality textile programmes from certified mills in Faisalabad, Karachi and Sialkot. From 300 pieces per style, FOB Karachi, in 30 to 45 days.</p></Reveal>
            <Reveal delay={3} className="mt-9 flex flex-wrap gap-3">
              <Link href="/request-a-quote" className="btn btn-primary">Request a quote <Arrow /></Link>
              <Link href="/products" className="btn btn-outline">View the ranges</Link>
            </Reveal>
            <Reveal delay={3} className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[["T-200–600", "Thread count"], ["350–1,100", "GSM terry"], ["AQL 2.5", "Inspection"]].map(([v, l]) => (
                <div key={l} className="border-l border-rule pl-4"><p className="display text-2xl">{v}</p><p className="mono text-muted mt-1">{l}</p></div>
              ))}
            </Reveal>
          </div>
          <Reveal delay={1} className="relative">
            <div className="grid grid-cols-6 grid-rows-6 gap-3 aspect-[5/5.4]">
              <div className="swatch col-span-4 row-span-4 corner"><Image src="/fabrics/percale.webp" alt="Percale hotel bed linen" fill priority sizes="(min-width:1024px) 30vw, 70vw" className="object-cover" /></div>
              <div className="swatch col-span-2 row-span-3"><Image src="/fabrics/terry.webp" alt="Ring-spun terry towel" fill sizes="15vw" className="object-cover" /></div>
              <div className="swatch col-span-2 row-span-3"><Image src="/fabrics/denim.webp" alt="Export denim" fill sizes="15vw" className="object-cover" /></div>
              <div className="swatch col-span-2 row-span-2"><Image src="/fabrics/lawn.webp" alt="Printed lawn" fill sizes="15vw" className="object-cover" /></div>
              <div className="swatch col-span-2 row-span-2"><Image src="/fabrics/waffle.webp" alt="Waffle weave" fill sizes="15vw" className="object-cover" /></div>
            </div>
            <div className="absolute -bottom-8 -left-6 hidden lg:block bg-ivory p-2"><Seal size={128} /></div>
            <div className="absolute top-5 right-5 bg-paper/90 border border-rule px-3 py-2 mono text-navy">FOB Karachi · Incoterms 2020</div>
          </Reveal>
        </Container>
        <Certifications />
      </section>

      {/* Products */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHead number="01" eyebrow="Product ranges" title={<>Six ranges. One supplier. <em>One standard.</em></>} lede="Every range is produced in the Pakistani cluster that specialises in it: bedding in Faisalabad, terry in Karachi and Multan, garments in Sialkot and Lahore." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => <Reveal key={p.slug} delay={(i % 3) as 0 | 1 | 2}><ProductCard p={p} index={i} /></Reveal>)}
          </div>
        </Container>
      </section>

      {/* Cloth */}
      <ClothSection />

      {/* Numbers + hospitality */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHead number="02" eyebrow="Hospitality programmes" title={<>Linen for hotels that is specified by the <em>laundry</em>, not the showroom.</>} lede="Par-stock replenishment, 200-wash constructions and consolidated shipments to the Gulf, the United Kingdom and the United States." />
          <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
            <Reveal className="frame-navy p-8 lg:p-12 relative overflow-hidden">
              <Image src="/fabrics/sateen.webp" alt="" fill className="object-cover opacity-[.08]" sizes="60vw" />
              <div className="relative">
                <span className="eyebrow !text-[#6b8cff]">Hotel linen supplier</span>
                <h3 className="display !text-white text-3xl lg:text-4xl mt-4 max-w-[22ch]">Bed, bath and table linen programmes for hotel groups and laundries.</h3>
                <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-[#d9d6cc]">
                  {["T-200 percale to T-300 sateen", "500–700 GSM ring-spun terry", "Bathrobes, slippers, bath mats", "Arabic & English care labels", "Three-par ordering sheets", "Quarterly replenishment"].map((x) => <li key={x} className="flex gap-3"><span className="mt-2 h-1 w-1 rounded-full bg-[#6b8cff]" />{x}</li>)}
                </ul>
                <div className="mt-10 flex flex-wrap gap-2">
                  {countries.map((c) => <Link key={c.slug} href={`/hotel-linen-supplier/${c.slug}`} className="border border-white/25 px-3.5 py-2 text-[13px] hover:bg-white hover:text-navy transition">{c.name}</Link>)}
                </div>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={(i % 2) as 0 | 1} className="frame p-6 lg:p-7 flex flex-col justify-between min-h-[180px]">
                  <p className="display text-4xl lg:text-5xl">{s.value}</p>
                  <div><p className="font-medium text-navy mt-4">{s.label}</p><p className="text-xs text-muted mt-1">{s.note}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="weave py-20 lg:py-28 border-y border-rule">
        <Container>
          <SectionHead number="03" eyebrow="How an order runs" title={<>From tech pack to vessel in <em>four steps.</em></>} />
          <ol className="grid gap-px bg-rule md:grid-cols-2 lg:grid-cols-4 border border-rule">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i as 0 | 1 | 2 | 3} className="bg-ivory p-8 lg:p-9">
                <span className="display text-5xl text-linen">{s.n}</span>
                <h3 className="display text-2xl mt-6">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted mt-3">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Quality */}
      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <SectionHead number="04" eyebrow="Manufacturing & quality" title={<>Vertical mills, <em>documented</em> at every stage.</>} />
            <p className="lede">Spinning, weaving, processing and stitching under one roof in Faisalabad and Karachi means consistent shade across repeat orders, greige held for re-dyeing, and full traceability from bale to carton.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6 text-sm">
              {[["Inline inspection", "At 30 percent of production, with a photo report."], ["Final inspection", "AQL 2.5 by our QC team, or third-party on request."], ["Lab testing", "Shrinkage, colourfastness, absorbency, pilling, GSM."], ["Certificates", "OEKO-TEX, GOTS, BSCI and ISO 9001 supplied with every quotation."]].map(([t, d]) => (
                <div key={t} className="border-t border-rule pt-4"><p className="font-medium text-navy">{t}</p><p className="text-muted mt-1">{d}</p></div>
              ))}
            </div>
            <Link href="/manufacturing" className="btn btn-outline mt-10">Inside the mills <Arrow /></Link>
          </div>
          <Reveal className="grid grid-cols-2 gap-4">
            <div className="swatch aspect-[3/4] corner"><Image src="/fabrics/linen.webp" alt="Greige linen fabric" fill sizes="25vw" className="object-cover" /></div>
            <div className="swatch aspect-[3/4] mt-10"><Image src="/fabrics/waffle.webp" alt="Waffle weave" fill sizes="25vw" className="object-cover" /></div>
            <div className="col-span-2 frame p-6 flex items-center gap-6">
              <Seal size={72} />
              <p className="text-sm text-muted">Every shipment leaves with a packing list, inspection report, certificate of origin and the mill's compliance certificates.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-20 border-t border-rule">
        <Container className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div><span className="eyebrow">Before you enquire</span><p className="text-muted mt-6 text-sm leading-relaxed max-w-[34ch]">Anything else, write to <a className="link-ul text-navy" href={`mailto:${site.email}`}>{site.email}</a> or message us on WhatsApp.</p></div>
          <Faq items={faqsGeneral} />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
