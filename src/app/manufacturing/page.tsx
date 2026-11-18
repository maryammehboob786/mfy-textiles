import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionHead } from "@/components/Section";
import { Certifications } from "@/components/Certifications";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { certifications, site } from "@/data/site";

export const metadata: Metadata = { title: "Manufacturing & Quality — Mills in Faisalabad, Karachi, Sialkot", description: "How MFY Textiles manufactures: vertically integrated partner mills, OEKO-TEX, GOTS, BSCI and ISO 9001 certification, inline and AQL 2.5 final inspection, lab testing on every lot.", alternates: { canonical: "/manufacturing" } };

const hubs = [
  { city: "Faisalabad", role: "Bed linen & woven home textiles", text: "Pakistan's textile capital. Spinning, weaving, processing and stitching under one roof. Our bedding, percale and sateen programmes run here.", img: "sateen" },
  { city: "Karachi", role: "Terry towels & port of export", text: "The terry cluster and the country's deep-water ports. Towels, bathrobes and bath mats are woven here and loaded at KICT, PICT or Port Qasim.", img: "terry" },
  { city: "Sialkot", role: "Garments, workwear & sportswear", text: "A century-old export city for cut-and-sew. Scrubs, workwear, uniforms and knitwear are produced in Sialkot's certified units.", img: "workwear" },
  { city: "Multan", role: "Terry & small-batch towels", text: "Specialist terry weavers for jacquard, gym and promotional towels at lower minimums.", img: "waffle" },
];

const tests = ["Dimensional stability (shrinkage) after 3 and 5 washes", "Colourfastness to washing, rubbing, light and perspiration", "GSM and thread-count verification", "Absorbency and drying time for terry", "Pilling and abrasion for garments", "Seam strength and tear strength", "pH and formaldehyde per OEKO-TEX limits", "Flammability (CPSIA / BS 5867) where required"];

export default function Manufacturing() {
  return (
    <>
      <Container className="pt-12 lg:pt-20 pb-16">
        <SectionHead eyebrow="Manufacturing" title={<>Four cities. Vertical mills. <em>One quality file.</em></>} lede="We are an export manufacturing partner: production runs in partner mills we audit and supervise, with MFY Textiles as your single contact for development, inspection and shipping." />
        <div className="grid gap-5 md:grid-cols-2">
          {hubs.map((h, i) => (
            <Reveal key={h.city} delay={(i % 2) as 0 | 1} className="frame overflow-hidden grid sm:grid-cols-[1fr_1.4fr]">
              <div className="swatch aspect-square sm:aspect-auto"><Image src={`/fabrics/${h.img}.webp`} alt={h.role} fill sizes="30vw" className="object-cover" /></div>
              <div className="p-7"><p className="mono text-muted">{h.role}</p><h2 className="display text-3xl mt-2">{h.city}</h2><p className="text-sm text-muted leading-relaxed mt-4">{h.text}</p></div>
            </Reveal>
          ))}
        </div>
      </Container>
      <Certifications />
      <Container className="grid gap-12 lg:grid-cols-2 py-16 lg:py-24">
        <div>
          <span className="eyebrow">Certifications</span>
          <h2 className="display text-3xl lg:text-5xl mt-4">Certificates travel with the quotation.</h2>
          <p className="lede mt-6">Buyers should never have to ask. Every quotation includes the certificates of the mill that will produce the order, in the mill's name, with validity dates.</p>
          <table className="spec mt-8"><tbody>{certifications.map((c) => <tr key={c.code}><th>{c.code}</th><td>{c.name} — {c.note}</td></tr>)}</tbody></table>
        </div>
        <div>
          <span className="eyebrow">Inspection & testing</span>
          <h2 className="display text-3xl lg:text-5xl mt-4">Inline at 30 percent. Final at AQL 2.5.</h2>
          <p className="lede mt-6">Our QC team inspects on the line, not just in the warehouse. You receive photo reports at each stage, and third-party inspection by SGS, Intertek or BV can be arranged on request.</p>
          <ul className="mt-8 grid gap-3 text-sm">{tests.map((t) => <li key={t} className="flex gap-3 border-t border-rule pt-3"><span className="mono text-blue">✓</span>{t}</li>)}</ul>
        </div>
      </Container>
      <section className="weave-navy text-white py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-3">
          {[["Traceability", "Cotton origin, dye lot and stitching unit recorded against every carton, ready for EU Digital Product Passport requirements."], ["Compliance", "Social audits (BSCI, Sedex) and chemical management (OEKO-TEX, ZDHC-aligned) across partner mills."], ["Sustainability", "BCI and GOTS cotton programmes, recycled polyester on request, and water-saving processing in our Faisalabad partner mills."]].map(([t, d]) => (
            <div key={t} className="border-t border-white/20 pt-6"><h3 className="display !text-white text-2xl">{t}</h3><p className="text-sm text-[#b9b6ab] mt-3 leading-relaxed">{d}</p></div>
          ))}
        </Container>
      </section>
      <CtaBand title={`Ask for the mill certificates with your first quotation. Write to ${site.email}.`} />
    </>
  );
}
