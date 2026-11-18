import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, SectionHead, Arrow } from "@/components/Section";
import { Seal } from "@/components/Seal";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "About MFY Textiles — Export Textile Manufacturer, Pakistan", description: "MFY Textiles is the textile export division of the MFY group, manufacturing hotel linen, bedding, towels and garments in Pakistan for buyers in North America, Europe and the Gulf.", alternates: { canonical: "/about" } };

export default function About() {
  return (
    <>
      <Container className="pt-12 lg:pt-20 pb-16 grid gap-12 lg:grid-cols-[1.2fr_.8fr] items-start">
        <div>
          <SectionHead eyebrow="About" title={<>Built on Pakistan's textile base. <em>Run for export buyers.</em></>} />
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink/85 max-w-[62ch]">
            <p>Pakistan exports close to eighteen billion dollars of textiles a year and is the third-largest supplier of home textiles to the United States. Most of that capacity sits in mills that have never sold directly to a hotel group in Doha or a bedding brand in Chicago.</p>
            <p>MFY Textiles exists to close that gap. We place each programme in the cluster that leads in it, supervise it with our own quality team, and handle development, inspection, documentation and shipping so that buyers deal with one company and one standard.</p>
            <p>We are a division of the MFY group, which also operates MFY Innovatech, a software and automation company. That heritage shows in how we run orders: tech packs, photo reports and shipment tracking are shared through a single order file, not a chain of emails.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[["Headquarters", `${site.address.city}, Pakistan`], ["Production", site.hubs.join(" · ")], ["Markets", "North America, Europe, GCC"]].map(([l, v]) => <div key={l} className="border-t border-rule pt-4"><p className="mono text-muted">{l}</p><p className="font-medium text-navy mt-2">{v}</p></div>)}
          </div>
          <div className="mt-10 flex flex-wrap gap-3"><Link href="/manufacturing" className="btn btn-primary">How we manufacture <Arrow /></Link><a href={site.linkedin} target="_blank" rel="noopener" className="btn btn-outline">LinkedIn</a></div>
        </div>
        <div className="relative">
          <div className="swatch aspect-[4/5] corner"><Image src="/fabrics/linen.webp" alt="Natural linen weave" fill sizes="40vw" className="object-cover" /></div>
          <div className="absolute -bottom-10 -left-8 bg-ivory p-2 hidden sm:block"><Seal size={150} /></div>
        </div>
      </Container>
      <section className="weave border-y border-rule py-16 lg:py-24 mt-10">
        <Container className="grid gap-8 md:grid-cols-3">
          {[["What we promise", "The construction we sample is the construction we ship. Shade, weight and hand feel are matched to the approved sample on every repeat."], ["What we refuse", "We do not quote below a specification to win an order, and we do not sub-contract to unaudited units."], ["What you get", "One contact, one order file, certificates in the mill's name, and a reply within two working days."]].map(([t, d]) => <div key={t} className="frame p-8"><h2 className="display text-2xl">{t}</h2><p className="text-sm text-muted leading-relaxed mt-4">{d}</p></div>)}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
