import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name: "MFY Textiles", short_name: "MFY Textiles", start_url: "/", display: "standalone", background_color: "#f4efe6", theme_color: "#061030", icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }] }; }
