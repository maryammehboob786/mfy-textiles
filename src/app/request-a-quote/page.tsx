import type { Metadata } from "next";
import { Container } from "@/components/Section";
import { QuoteForm } from "@/components/QuoteForm";
import { site, steps } from "@/data/site";

export const metadata: Metadata = { title: "Request a Quote — Hotel Linen, Bedding, Towels, Uniforms", description: "Send your specification for hotel linen, bedding, towels, scrubs, workwear or lawn. Quotation, mill certificates and a sampling plan within two working days.", alternates: { canonical: "/request-a-quote" } };

export default function Quote() {
  return (
    <Container className="pt-12 lg:pt-20 pb-20 grid gap-14 lg:grid-cols-[1fr_1.5fr]">
      <div>
        <span className="eyebrow">Request a quote</span>
        <h1 className="display text-4xl lg:text-6xl mt-5">Tell us what you need to buy.</h1>
        <p className="lede mt-6">A specification, a reference product or a photo is enough to start. We return a quotation, the mill's certificates and a sampling plan within two working days.</p>
        <ol className="mt-10 space-y-5">{steps.map((s) => <li key={s.n} className="flex gap-5 border-t border-rule pt-4"><span className="display text-2xl text-linen">{s.n}</span><div><p className="font-medium text-navy">{s.title}</p><p className="text-sm text-muted mt-1">{s.text}</p></div></li>)}</ol>
        <div className="mt-10 frame p-6 text-sm"><p className="mono text-muted mb-3">Prefer to talk?</p><p><a className="link-ul text-navy" href={`mailto:${site.email}`}>{site.email}</a></p><p className="mt-2"><a className="link-ul text-navy" href={`https://wa.me/${site.whatsapp}`}>WhatsApp {site.phone}</a></p></div>
      </div>
      <div className="frame corner p-6 lg:p-10"><QuoteForm /></div>
    </Container>
  );
}
