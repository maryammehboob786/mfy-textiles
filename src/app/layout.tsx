import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Libre_Franklin, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"], display: "swap" });
const franklin = Libre_Franklin({ variable: "--font-franklin", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
const plex = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "MFY Textiles — Hotel Linen, Bedding & Towel Manufacturer in Pakistan", template: "%s · MFY Textiles" },
  description: "Export manufacturer of hotel linen, bed linen, terry towels, medical scrubs and workwear in Pakistan. OEKO-TEX certified mills in Faisalabad, Karachi and Sialkot. FOB Karachi, 30–45 day lead time, shipping to the USA, UK, EU and GCC.",
  keywords: ["hotel linen supplier", "bed sheets manufacturer Pakistan", "towel manufacturer Pakistan", "medical scrubs manufacturer", "workwear manufacturer Pakistan", "textile exporter Pakistan"],
  applicationName: site.name,
  authors: [{ name: site.name }],
  openGraph: { type: "website", siteName: site.name, locale: "en_US", url: site.url, title: "MFY Textiles — Export Textile Manufacturer, Pakistan", description: site.tagline },
  twitter: { card: "summary_large_image", title: "MFY Textiles", description: site.tagline },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#061030", width: "device-width", initialScale: 1 };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/brand/logo-blue.png`,
  email: site.email,
  telephone: site.phone,
  address: { "@type": "PostalAddress", addressLocality: site.address.city, addressRegion: site.address.region, addressCountry: "PK" },
  sameAs: [site.linkedin],
  areaServed: site.markets,
  knowsAbout: ["Hotel linen", "Bed linen", "Terry towels", "Medical scrubs", "Workwear", "Pakistani lawn"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${franklin.variable} ${plex.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
