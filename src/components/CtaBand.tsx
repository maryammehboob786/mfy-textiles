import Link from "next/link";
import { Container, Arrow } from "./Section";
import { site } from "@/data/site";

export function CtaBand({ title = "Send us a specification. We will return a quotation, certificates and a sampling plan within two working days.", light = true }: { title?: string; light?: boolean }) {
  return (
    <section className={light ? "weave py-20 lg:py-28" : "weave-navy py-20 lg:py-28 text-white"}>
      <Container className="grid gap-10 lg:grid-cols-[2fr_1fr] items-end">
        <h2 className={`display text-4xl lg:text-[3.2rem] ${light ? "" : "!text-white"}`}>{title}</h2>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link href="/request-a-quote" className={`btn ${light ? "btn-primary" : "btn-light"}`}>Request a quote <Arrow /></Link>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener" className={`btn ${light ? "btn-outline" : "btn-light"}`}>WhatsApp</a>
        </div>
      </Container>
    </section>
  );
}
