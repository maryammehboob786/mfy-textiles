import type { MetadataRoute } from "next";
import { products, countries, site } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-18");
  const base = ["", "/products", "/hotel-linen-supplier", "/manufacturing", "/export-logistics", "/about", "/request-a-quote", "/contact"].map((p) => ({ url: `${site.url}${p}`, lastModified: now, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 }));
  const prod = products.map((p) => ({ url: `${site.url}/products/${p.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 }));
  const ctry = countries.map((c) => ({ url: `${site.url}/hotel-linen-supplier/${c.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 }));
  return [...base, ...prod, ...ctry];
}
