import type { Metadata } from "next";
import { Container, SectionHead } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { countries, steps } from "@/data/site";

export const metadata: Metadata = { title: "Export & Logistics — FOB Karachi, CIF, DDP, Lead Times", description: "How we ship: FOB Karachi, CIF and DDP terms, weekly sailings to the Gulf, Europe and North America, transit times, documents, payment terms and packing standards.", alternates: { canonical: "/export-logistics" } };

const lanes = [
  ["Jebel Ali, UAE", "7–10 days"], ["Shuwaikh, Kuwait", "8–12 days"], ["Jeddah / Dammam, KSA", "10–14 days"], ["Hamad Port, Qatar", "9–12 days"],
  ["Felixstowe, UK", "22–28 days"], ["Rotterdam, NL", "22–26 days"], ["Hamburg, DE", "24–28 days"], ["Valencia / Barcelona, ES", "20–24 days"],
  ["New York / Savannah, US East", "28–35 days"], ["Los Angeles, US West", "30–38 days"], ["Toronto / Montreal, CA", "30–36 days"],
];
const docs = ["Commercial invoice & packing list", "Bill of lading (sea) or AWB (air)", "Certificate of origin (Chamber / GSP Form A / REX)", "Inspection report with photographs", "Mill compliance certificates", "Fumigation / phytosanitary where required", "Shipping marks and carton labels per your spec"];
const faqs = [
  { q: "What incoterms do you work with?", a: "FOB Karachi is standard. We also quote CFR/CIF to your port and DDP to your warehouse through our forwarding partners, so you can compare landed cost." },
  { q: "What are your payment terms?", a: "30 percent deposit with the purchase order, 70 percent against copy of the bill of lading. Letters of credit at sight for orders above USD 50,000. Open-account terms for established customers." },
  { q: "Can you consolidate different products in one container?", a: "Yes. Bed linen from Faisalabad and towels from Karachi are consolidated at our Karachi warehouse into one FCL or LCL shipment." },
  { q: "How are goods packed?", a: "Individually poly-bagged or boxed to your retail spec, in 5-ply export cartons with shipping marks, barcodes and carton labels. Pallets and slip sheets available for DDP." },
  { q: "Do you handle US and EU compliance labelling?", a: "Yes. FTC fibre content and care labels for the US, EU textile labelling regulation 1007/2011 and UK equivalents are applied at the factory." },
];

export default function Logistics() {
  return (
    <>
      <Container className="pt-12 lg:pt-20 pb-16">
        <SectionHead eyebrow="Export & logistics" title={<>Karachi to your port, <em>on schedule.</em></>} lede="Weekly sailings from Karachi reach the Gulf in under two weeks, Europe in under four and the US East Coast in about five. We book, document and track every shipment." />
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div><p className="eyebrow mb-6">Typical sea transit from Karachi</p><table className="spec"><tbody>{lanes.map(([p, t]) => <tr key={p}><th>{p}</th><td>{t}</td></tr>)}</tbody></table><p className="text-xs text-muted mt-4">Indicative port-to-port times on direct or single-transhipment services. Air freight to any of these markets: 3–6 days.</p></div>
          <div><p className="eyebrow mb-6">Documents issued with every shipment</p><ul className="space-y-3 text-sm">{docs.map((d) => <li key={d} className="flex gap-3 border-t border-rule pt-3"><span className="mono text-blue">—</span>{d}</li>)}</ul></div>
        </div>
      </Container>
      <section className="weave border-y border-rule py-16 lg:py-24">
        <Container>
          <h2 className="display text-3xl lg:text-5xl mb-10">The order timeline</h2>
          <ol className="grid gap-px bg-rule md:grid-cols-4 border border-rule">{steps.map((s) => <li key={s.n} className="bg-ivory p-7"><span className="display text-4xl text-linen">{s.n}</span><h3 className="display text-2xl mt-4">{s.title}</h3><p className="text-sm text-muted mt-2 leading-relaxed">{s.text}</p></li>)}</ol>
        </Container>
      </section>
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] py-16 lg:py-24">
        <div><span className="eyebrow">Hotel linen by market</span><ul className="mt-6 space-y-3">{countries.map((c) => <li key={c.slug}><a href={`/hotel-linen-supplier/${c.slug}`} className="link-ul text-navy text-lg display">{c.name}</a><span className="mono text-muted ml-3">{c.port}</span></li>)}</ul></div>
        <Faq items={faqs} title="Shipping and payment questions" />
      </Container>
      <CtaBand light={false} />
    </>
  );
}
