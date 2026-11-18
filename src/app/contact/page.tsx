import type { Metadata } from "next";
import Link from "next/link";
import { Container, Arrow } from "@/components/Section";
import { Seal } from "@/components/Seal";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact", description: "Contact MFY Textiles: email, WhatsApp and office in Lahore, Pakistan. Production in Faisalabad, Karachi, Sialkot and Multan.", alternates: { canonical: "/contact" } };

export default function Contact() {
  return (
    <Container className="pt-12 lg:pt-20 pb-24 grid gap-12 lg:grid-cols-2 items-start">
      <div>
        <span className="eyebrow">Contact</span>
        <h1 className="display text-4xl lg:text-6xl mt-5">We answer within two working days, usually sooner.</h1>
        <div className="mt-10 grid sm:grid-cols-2 gap-8 text-[1.02rem]">
          <div><p className="mono text-muted">Email</p><a className="link-ul text-navy mt-2 inline-block" href={`mailto:${site.email}`}>{site.email}</a></div>
          <div><p className="mono text-muted">WhatsApp / phone</p><a className="link-ul text-navy mt-2 inline-block" href={`https://wa.me/${site.whatsapp}`}>{site.phone}</a></div>
          <div><p className="mono text-muted">Office</p><p className="mt-2">{site.address.city}, {site.address.region}, {site.address.country}</p></div>
          <div><p className="mono text-muted">Production</p><p className="mt-2">{site.hubs.join(" · ")}</p></div>
          <div><p className="mono text-muted">Hours</p><p className="mt-2">Mon–Sat, 09:00–18:00 PKT (UTC+5)</p></div>
          <div><p className="mono text-muted">LinkedIn</p><a className="link-ul text-navy mt-2 inline-block" href={site.linkedin} target="_blank" rel="noopener">MFY Textiles</a></div>
        </div>
        <Link href="/request-a-quote" className="btn btn-primary mt-12">Request a quote <Arrow /></Link>
      </div>
      <div className="frame corner p-10 flex flex-col items-center text-center gap-6"><Seal size={160} /><p className="text-muted text-sm max-w-[34ch]">Visiting Pakistan? We arrange mill visits in Faisalabad and Karachi with two weeks' notice.</p></div>
    </Container>
  );
}
