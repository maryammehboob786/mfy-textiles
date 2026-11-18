import type { Metadata } from "next";
import { Container, SectionHead } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { CtaBand } from "@/components/CtaBand";
import { Certifications } from "@/components/Certifications";
import { products } from "@/data/site";

export const metadata: Metadata = { title: "Products — Hotel Linen, Bedding, Towels, Scrubs, Workwear, Lawn", description: "Six export ranges manufactured in Pakistan: hotel linen, private-label bedding, terry towels, medical scrubs, workwear and printed lawn. MOQ from 200–500 pieces, FOB Karachi.", alternates: { canonical: "/products" } };

export default function Products() {
  return (
    <>
      <Container className="pt-12 pb-16 lg:pt-20">
        <SectionHead eyebrow="Product ranges" title={<>What we manufacture, <em>and where.</em></>} lede="Each range is placed in the Pakistani cluster that leads in it, so you get specialist mills with the export documentation handled by one team." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{products.map((p, i) => <ProductCard key={p.slug} p={p} index={i} />)}</div>
      </Container>
      <Certifications compact />
      <CtaBand light={false} />
    </>
  );
}
