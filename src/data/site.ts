export const site = {
  name: "MFY Textiles",
  legalName: "MFY Textiles — a division of MFY Innovatech",
  tagline: "Hotel linen, bedding and towels. Manufactured in Pakistan, delivered worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mfytextiles.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "sales@mfytextiles.com",
  phone: "+92 335 9078929",
  whatsapp: "923359078929",
  linkedin: "https://www.linkedin.com/company/mfy-textiles/",
  address: { city: "Lahore", region: "Punjab", country: "Pakistan" },
  hubs: ["Faisalabad", "Karachi", "Sialkot", "Multan"],
  ports: ["Karachi (KICT / PICT)", "Port Qasim"],
  markets: ["United States", "United Kingdom", "Germany", "Netherlands", "Spain", "UAE", "Kuwait", "Saudi Arabia", "Qatar"],
};

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/hotel-linen-supplier", label: "Hospitality" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/export-logistics", label: "Export & Logistics" },
  { href: "/about", label: "About" },
];

export const certifications = [
  { code: "OEKO-TEX", name: "OEKO-TEX® Standard 100", note: "Tested for harmful substances" },
  { code: "GOTS", name: "Global Organic Textile Standard", note: "Organic cotton programmes" },
  { code: "BSCI", name: "amfori BSCI", note: "Social compliance audits" },
  { code: "ISO 9001", name: "ISO 9001:2015", note: "Quality management" },
  { code: "SEDEX", name: "Sedex SMETA", note: "Ethical trade audits" },
  { code: "BCI", name: "Better Cotton", note: "Responsible cotton sourcing" },
];

export type ProductItem = {
  name: string;
  spec: string;
  sizes?: string;
  moq: string;
};

export type Product = {
  slug: string;
  name: string;
  short: string;
  eyebrow: string;
  fabric: string; // key into /fabrics
  headline: string;
  intro: string;
  body: string[];
  items: ProductItem[];
  specs: { label: string; value: string }[];
  markets: string[];
  hub: string;
  leadTime: string;
  moq: string;
  faqs: { q: string; a: string }[];
  keywords: string[];
};

export const products: Product[] = [
  {
    slug: "hotel-linen",
    name: "Hotel Linen",
    short: "Bed linen, bath linen and F&B linen for hotels, resorts and serviced apartments.",
    eyebrow: "Hospitality",
    fabric: "percale",
    headline: "Hotel linen built for 200 industrial washes.",
    intro:
      "Complete linen programmes for hotels, resorts, hospitals and serviced apartments: percale and sateen bed linen, ring-spun terry, and table linen, engineered for commercial laundries and supplied on a replenishment schedule.",
    body: [
      "Hospitality linen fails in the laundry, not on the bed. Every sheet and towel we supply is constructed for tunnel washers and 70 °C thermal disinfection: long-staple combed cotton, reinforced selvedges, double-needle hems, and shrinkage controlled to under 3 percent after the first wash.",
      "We run par-stock replenishment for hotel groups, with white-label or branded packaging, size labelling by room type, and consolidated shipments to the GCC, the UK and the United States. Housekeeping standards such as 4–6 towels per occupied room and three-par bed linen are built into the ordering sheets we provide.",
    ],
    items: [
      { name: "T-200 percale flat sheet", spec: "100% cotton, 200 TC, 1 cm hem, 3 cm reinforced top hem", sizes: "Single to Super King, custom", moq: "500 pcs" },
      { name: "T-300 sateen fitted sheet", spec: "100% long-staple cotton, 300 TC, 35 cm pocket, all-round elastic", sizes: "90×200 to 200×200 cm", moq: "500 pcs" },
      { name: "T-250 satin-stripe duvet cover", spec: "60/40 cotton-polyester or 100% cotton, 1 cm or 3 cm stripe, bag closure", sizes: "Single to King", moq: "300 pcs" },
      { name: "Oxford pillowcase", spec: "200–300 TC, 5 cm Oxford border, envelope closure", sizes: "50×75, 50×90 cm", moq: "1,000 pcs" },
      { name: "Hotel bath towel", spec: "100% ring-spun cotton, 500–650 GSM, dobby border, double-stitched hems", sizes: "70×140 cm", moq: "500 pcs" },
      { name: "Bath sheet", spec: "600–700 GSM zero-twist or ring-spun, optional jacquard logo", sizes: "100×150 cm", moq: "300 pcs" },
      { name: "Hand towel & face cloth", spec: "500–600 GSM, matching border", sizes: "50×90, 30×30 cm", moq: "1,000 pcs" },
      { name: "Bath mat", spec: "900–1,100 GSM, non-slip or terry-back", sizes: "50×80 cm", moq: "500 pcs" },
      { name: "Waffle & terry bathrobe", spec: "Shawl or kimono collar, 380–450 GSM, embroidered crest", sizes: "S–XXL, one-size", moq: "200 pcs" },
      { name: "Table linen", spec: "Spun polyester or cotton damask, mercerised, stain release", sizes: "Rounds, rectangles, napkins", moq: "500 pcs" },
      { name: "Mattress & pillow protectors", spec: "Quilted or terry-top, waterproof TPU option", sizes: "All bed sizes", moq: "500 pcs" },
      { name: "Duvets & pillows", spec: "Microfibre or down-alternative fill, 230 TC casing", sizes: "All bed sizes", moq: "300 pcs" },
    ],
    specs: [
      { label: "Fibre", value: "Long-staple combed cotton, cotton-polyester blends" },
      { label: "Thread count", value: "T-180 to T-400" },
      { label: "Terry weight", value: "450 to 700 GSM" },
      { label: "Wash durability", value: "200+ industrial cycles, 70 °C" },
      { label: "Packing", value: "Polybag, carton, size & room labels, barcodes" },
      { label: "Branding", value: "Jacquard, embroidery, woven label, printed hangtag" },
    ],
    markets: ["UAE", "Kuwait", "Saudi Arabia", "Qatar", "United Kingdom", "United States"],
    hub: "Faisalabad & Karachi",
    leadTime: "30–45 days",
    moq: "From 300 pieces per style",
    faqs: [
      { q: "What thread count is right for a 4- or 5-star hotel?", a: "Most 4-star programmes run T-200 to T-250 percale; 5-star properties typically specify T-300 sateen with a 1 cm satin stripe for duvet covers. We advise on construction rather than thread count alone, because yarn quality and finishing determine how a sheet survives the laundry." },
      { q: "Can you supply on a replenishment schedule?", a: "Yes. We hold agreed par levels for hotel groups and ship quarterly or monthly top-ups, with the same construction and shade every time." },
      { q: "Do you provide samples before a bulk order?", a: "We send lab-dips, fabric swatches and finished samples within 7–10 days. Sample cost is credited against the first production order." },
    ],
    keywords: ["hotel linen supplier", "hotel linen manufacturer in Pakistan", "hotel bed sheets wholesale", "hotel towels wholesale", "hospitality linen suppliers"],
  },
  {
    slug: "bed-linen",
    name: "Bed Linen & Bedding",
    short: "Private-label sheet sets, duvet covers and bedding for retailers and e-commerce brands.",
    eyebrow: "Home textiles",
    fabric: "sateen",
    headline: "Private-label bedding from a 3.1-billion-dollar export base.",
    intro:
      "Pakistan is the world's third-largest supplier of home textiles to the United States. We build private-label bedding programmes on that base: percale, sateen, bamboo-viscose and brushed cotton, in retail-ready packaging, for Amazon brands, department stores and wholesalers.",
    body: [
      "Our bedding mills in Faisalabad run vertically from spinning to stitching, which means shade consistency across repeat orders and the ability to hold your fabric in greige for fast re-dyeing. Minimums start at 500 sets per design, with mixed-size cartons for direct-to-consumer brands.",
      "Every programme includes a tech pack review, a pre-production sample, an inline inspection at 30 percent and a final AQL 2.5 inspection. OEKO-TEX Standard 100 is standard; GOTS organic cotton and BCI are available on request.",
    ],
    items: [
      { name: "Percale sheet set", spec: "100% cotton, 200–400 TC, crisp matte finish", sizes: "Twin to California King, EU sizes", moq: "500 sets" },
      { name: "Sateen sheet set", spec: "100% long-staple cotton, 300–600 TC, 4-over-1 weave", sizes: "All US & EU sizes", moq: "500 sets" },
      { name: "Bamboo-viscose sheet set", spec: "100% viscose from bamboo or 60/40 blend, 300 TC", sizes: "All US sizes", moq: "500 sets" },
      { name: "Brushed cotton / flannel set", spec: "100% cotton, 160–180 GSM, double-brushed", sizes: "All sizes", moq: "500 sets" },
      { name: "Duvet cover set", spec: "Cotton or cotton-blend, hidden button or zipper, corner ties", sizes: "Twin to King", moq: "500 sets" },
      { name: "Deep-pocket fitted sheet", spec: "Up to 45 cm pocket, 360° elastic", sizes: "All sizes", moq: "1,000 pcs" },
      { name: "Quilt & coverlet", spec: "Pre-washed cotton, 200 GSM fill, stitched patterns", sizes: "Twin to King", moq: "300 pcs" },
      { name: "Comforter", spec: "Microfibre shell, 250–400 GSM fill, box-stitched", sizes: "Twin to King", moq: "300 pcs" },
      { name: "Printed children's bedding", spec: "Reactive or pigment prints, custom artwork", sizes: "Cot to Single", moq: "1,000 sets" },
    ],
    specs: [
      { label: "Fibre", value: "Cotton, long-staple cotton, bamboo-viscose, blends" },
      { label: "Thread count", value: "T-200 to T-600" },
      { label: "Finishes", value: "Mercerised, easy-care, enzyme wash, brushed" },
      { label: "Prints", value: "Reactive, pigment, digital; yarn-dyed stripes" },
      { label: "Packing", value: "Retail box, zip bag, belly band, FBA-ready cartons" },
      { label: "Compliance", value: "OEKO-TEX 100, GOTS, BCI, CPSIA flammability" },
    ],
    markets: ["United States", "United Kingdom", "Germany", "Netherlands", "Spain"],
    hub: "Faisalabad",
    leadTime: "35–50 days",
    moq: "From 500 sets per design",
    faqs: [
      { q: "Can you ship directly to Amazon FBA warehouses?", a: "Yes. We label at SKU level, pack to Amazon carton limits and ship FOB Karachi or DDP to your prep centre." },
      { q: "What is the difference between percale and sateen?", a: "Percale is a one-over-one weave: crisp, matte and cool. Sateen is a four-over-one weave: smoother, warmer and with a soft sheen. We sample both so your buyers can feel the difference." },
    ],
    keywords: ["bed sheets manufacturer Pakistan", "bed sheets wholesale", "private label bedding manufacturer", "bed linen wholesale suppliers", "bamboo bed sheets wholesale"],
  },
  {
    slug: "towels",
    name: "Towels & Bath",
    short: "Ring-spun, zero-twist and jacquard terry for retail, hospitality, gyms and promotional brands.",
    eyebrow: "Terry",
    fabric: "terry",
    headline: "Terry towels woven where the world's towels are woven.",
    intro:
      "Karachi and Multan produce more than a billion dollars of terry a year. From that network we supply bath, hand, beach, gym, golf and kitchen towels, from 400 GSM promotional pieces to 700 GSM zero-twist luxury, with jacquard logos, embroidery and custom packaging.",
    body: [
      "Terry quality is decided by the yarn. We specify ring-spun or zero-twist cotton, loop height and pile density per programme, and we test absorbency, colourfastness and shrinkage in-house before shipment.",
      "For gyms, clubs and promotional buyers we run small-batch custom towels from 300 pieces, with woven-in logos, dobby borders and individual poly-bagging.",
    ],
    items: [
      { name: "Bath towel", spec: "100% ring-spun cotton, 500–650 GSM, dobby border", sizes: "70×140 cm", moq: "500 pcs" },
      { name: "Zero-twist bath sheet", spec: "100% cotton, 650–700 GSM, ultra-soft", sizes: "90×160, 100×150 cm", moq: "300 pcs" },
      { name: "Hand towel", spec: "500–600 GSM", sizes: "50×90 cm", moq: "1,000 pcs" },
      { name: "Face cloth / washcloth", spec: "500 GSM, 12-pack retail", sizes: "30×30 cm", moq: "2,000 pcs" },
      { name: "Gym & sports towel", spec: "400–450 GSM, jacquard or embroidered logo, zip pocket option", sizes: "40×80, 50×100 cm", moq: "300 pcs" },
      { name: "Golf towel", spec: "Tri-fold, grommet & carabiner, waffle or velour", sizes: "40×60 cm", moq: "300 pcs" },
      { name: "Beach towel", spec: "Velour-face jacquard or reactive print, 420–500 GSM", sizes: "90×170, 100×180 cm", moq: "500 pcs" },
      { name: "Kitchen & tea towel", spec: "Cotton waffle, terry or flat-weave, printed", sizes: "45×70, 50×70 cm", moq: "1,000 pcs" },
      { name: "Waffle towel", spec: "100% cotton honeycomb, 300–350 GSM, quick-dry", sizes: "All sizes", moq: "500 pcs" },
      { name: "Bathrobe", spec: "Terry, velour or waffle, 350–450 GSM", sizes: "S–XXL", moq: "200 pcs" },
      { name: "Bath mat", spec: "900–1,100 GSM, tufted or terry", sizes: "50×80 cm", moq: "500 pcs" },
    ],
    specs: [
      { label: "Yarn", value: "Ring-spun, zero-twist, combed, BCI cotton" },
      { label: "Weight", value: "350 to 1,100 GSM" },
      { label: "Branding", value: "Jacquard, dobby, embroidery, printed labels" },
      { label: "Testing", value: "Absorbency, colourfastness, shrinkage, pilling" },
      { label: "Packing", value: "Poly-bag, belly band, gift box, display cartons" },
      { label: "Compliance", value: "OEKO-TEX 100, BSCI, Sedex" },
    ],
    markets: ["United States", "United Kingdom", "Germany", "UAE", "Kuwait"],
    hub: "Karachi & Multan",
    leadTime: "30–45 days",
    moq: "From 300 pieces per design",
    faqs: [
      { q: "What GSM should I choose?", a: "400–450 GSM for gyms and promotions, 500–600 GSM for retail and 4-star hotels, 650–700 GSM zero-twist for luxury. Heavier is not always better: a 700 GSM towel takes longer to dry and costs more to launder." },
      { q: "Can my logo be woven in rather than embroidered?", a: "Yes. Jacquard weaving puts the logo in the pile itself, which outlasts embroidery in commercial laundries. Setup is per design and is credited on orders above 1,000 pieces." },
    ],
    keywords: ["towel manufacturer Pakistan", "custom towel manufacturer", "gym towel manufacturer", "bulk towels with logo", "hotel towels wholesale"],
  },
  {
    slug: "medical-scrubs",
    name: "Medical Scrubs & Uniforms",
    short: "Private-label scrubs, lab coats and healthcare uniforms in stretch poly-cotton and antimicrobial fabrics.",
    eyebrow: "Healthcare",
    fabric: "scrubs",
    headline: "Scrubs that hold their colour through 100 hot washes.",
    intro:
      "We manufacture private-label medical scrubs, scrub caps, lab coats and hospital uniforms for healthcare brands, distributors and hospital groups, from stretch poly-cotton-spandex to antimicrobial and fluid-repellent fabrics.",
    body: [
      "Modern scrub brands are built on fit and fabric. Our Sialkot and Lahore units produce four-way stretch jogger scrubs, classic V-neck sets and tailored lab coats with size grading from XXS to 5XL and petite and tall lengths.",
      "Fabrics are sourced to spec, with colourfastness to industrial laundering, moisture-wicking finishes and optional antimicrobial treatment. Minimums start at 200 pieces per style and colour.",
    ],
    items: [
      { name: "Stretch V-neck scrub top", spec: "72/21/7 poly-rayon-spandex or 65/35 poly-cotton, 4 pockets", sizes: "XXS–5XL", moq: "200 pcs" },
      { name: "Jogger scrub pant", spec: "4-way stretch, elastic waist with drawcord, 6 pockets", sizes: "XXS–5XL, petite & tall", moq: "200 pcs" },
      { name: "Classic cargo scrub pant", spec: "65/35 poly-cotton, 170 GSM, cargo pockets", sizes: "XXS–5XL", moq: "200 pcs" },
      { name: "Scrub cap", spec: "Bouffant or tie-back, printed or solid", sizes: "One-size", moq: "500 pcs" },
      { name: "Lab coat", spec: "65/35 poly-cotton twill, 190–220 GSM, 3 pockets", sizes: "XS–4XL", moq: "200 pcs" },
      { name: "Warm-up jacket", spec: "Stretch knit, snap front, rib cuffs", sizes: "XS–4XL", moq: "200 pcs" },
      { name: "Underscrub tee", spec: "Moisture-wicking knit, long sleeve", sizes: "XS–3XL", moq: "300 pcs" },
      { name: "Patient gown", spec: "Poly-cotton, back-tie or snap, reusable", sizes: "One-size, bariatric", moq: "500 pcs" },
    ],
    specs: [
      { label: "Fabrics", value: "Poly-cotton, poly-rayon-spandex, antimicrobial, fluid-repellent" },
      { label: "Weight", value: "150 to 220 GSM" },
      { label: "Branding", value: "Embroidery, heat transfer, woven labels, custom trims" },
      { label: "Sizing", value: "US, UK, EU size charts; petite & tall" },
      { label: "Testing", value: "Colourfastness, dimensional stability, pilling" },
      { label: "Compliance", value: "OEKO-TEX 100, BSCI, ISO 9001" },
    ],
    markets: ["United States", "United Kingdom", "UAE", "Saudi Arabia"],
    hub: "Sialkot & Lahore",
    leadTime: "35–50 days",
    moq: "From 200 pieces per style",
    faqs: [
      { q: "Can you match an existing brand's fit?", a: "Send a reference garment and we reverse-engineer the pattern, then grade it to your size range. Fit samples are turned around in 10–14 days." },
      { q: "Do you hold stock fabric colours?", a: "Core colours such as navy, ceil blue, hunter green, black and wine are held in stock fabric for faster re-orders. Custom colours are lab-dipped to Pantone." },
    ],
    keywords: ["medical scrubs manufacturer", "custom medical scrubs manufacturer", "scrubs wholesale manufacturer", "scrub manufacturers in Pakistan", "nursing scrubs manufacturer"],
  },
  {
    slug: "workwear",
    name: "Workwear & Corporate Uniforms",
    short: "Industrial workwear, hi-vis, FR garments and corporate uniform programmes.",
    eyebrow: "Industrial",
    fabric: "workwear",
    headline: "Workwear cut for the job, built to the standard.",
    intro:
      "From coveralls and cargo trousers to hi-vis vests and corporate shirting, we supply workwear and uniform programmes for distributors, contractors and facilities groups in the UK, Europe and the Gulf.",
    body: [
      "Sialkot's workwear cluster produces to EN ISO 20471 (hi-vis), EN ISO 11612 (heat and flame) and EN 343 (rain) when certified fabrics and reflective tapes are specified. We manage the fabric certificates and test reports as part of the order file.",
      "Corporate programmes include size-set sampling, named packing per employee and staged deliveries by site.",
    ],
    items: [
      { name: "Coverall / boiler suit", spec: "65/35 poly-cotton twill, 245 GSM, concealed stud front", sizes: "S–5XL, regular & tall", moq: "300 pcs" },
      { name: "Cargo work trouser", spec: "Poly-cotton or cotton canvas, 260–300 GSM, knee-pad pockets", sizes: "28–50 waist", moq: "300 pcs" },
      { name: "Hi-vis vest & jacket", spec: "EN ISO 20471 class 2/3 fabric, reflective tape", sizes: "S–5XL", moq: "500 pcs" },
      { name: "FR coverall", spec: "EN ISO 11612 certified fabric, FR thread & trims", sizes: "S–5XL", moq: "300 pcs" },
      { name: "Work shirt", spec: "Poly-cotton poplin or oxford, 125–145 GSM", sizes: "S–5XL", moq: "300 pcs" },
      { name: "Polo & T-shirt", spec: "Piqué 200–220 GSM, combed jersey 160–180 GSM", sizes: "XS–5XL", moq: "300 pcs" },
      { name: "Softshell & fleece jacket", spec: "Bonded softshell 300 GSM, anti-pill fleece 280 GSM", sizes: "XS–5XL", moq: "300 pcs" },
      { name: "Chef & hospitality uniform", spec: "Poly-cotton, stud or button jacket, apron", sizes: "XS–4XL", moq: "200 pcs" },
      { name: "Apron", spec: "Cotton canvas or poly-cotton, bib or waist, custom print", sizes: "One-size", moq: "500 pcs" },
    ],
    specs: [
      { label: "Fabrics", value: "Poly-cotton twill, canvas, ripstop, FR, hi-vis" },
      { label: "Weight", value: "125 to 300 GSM" },
      { label: "Standards", value: "EN ISO 20471, EN ISO 11612, EN 343 (certified fabrics)" },
      { label: "Branding", value: "Embroidery, heat seal, reflective print" },
      { label: "Packing", value: "Individual bagging, named packs, site-staged cartons" },
      { label: "Compliance", value: "OEKO-TEX 100, BSCI, Sedex" },
    ],
    markets: ["United Kingdom", "Germany", "Netherlands", "UAE", "Saudi Arabia"],
    hub: "Sialkot & Lahore",
    leadTime: "40–55 days",
    moq: "From 200 pieces per style",
    faqs: [
      { q: "Are your hi-vis garments certified?", a: "Garments are made from EN ISO 20471-certified fabrics and tapes, and we supply the fabric and tape certificates. Full garment certification can be arranged through a notified body on request." },
    ],
    keywords: ["workwear manufacturer in Pakistan", "custom workwear manufacturer", "FR workwear manufacturer", "wholesale workwear suppliers", "uniform manufacturer"],
  },
  {
    slug: "lawn-suits",
    name: "Lawn & Ready-to-Wear",
    short: "Unstitched printed lawn and embroidered ready-to-wear for retailers in the Gulf, UK and North America.",
    eyebrow: "Fashion",
    fabric: "lawn",
    headline: "Printed lawn and ready-to-wear, direct from the source.",
    intro:
      "Pakistani lawn is the summer uniform of South Asia and its diaspora. We supply unstitched 3-piece lawn suits, embroidered chiffon and ready-to-wear kurtas to boutiques, wholesalers and online retailers in Kuwait, the UAE, the UK and North America.",
    body: [
      "Seasonal collections are produced in Lahore and Faisalabad: digitally or reactive-printed lawn at 70–80 GSM, with embroidered necklines, chiffon dupattas and dyed trousers, packed in branded boxes for retail.",
      "For Ramadan and Eid programmes we schedule production in January and ship by sea in early March, or by air in two weeks for replenishment.",
    ],
    items: [
      { name: "Printed lawn 3-piece (unstitched)", spec: "70–80 GSM lawn shirt, printed trouser, lawn or chiffon dupatta", sizes: "Standard 2.5 m / 2.5 m / 2.5 m", moq: "300 suits" },
      { name: "Embroidered lawn 3-piece", spec: "Schiffli or machine embroidery, chiffon dupatta", sizes: "Standard cuts", moq: "300 suits" },
      { name: "Ready-to-wear kurta", spec: "Printed lawn or cambric, stitched to size", sizes: "XS–XXL", moq: "300 pcs" },
      { name: "Ready-to-wear 2-piece", spec: "Kurta & trouser, printed or embroidered", sizes: "XS–XXL", moq: "300 sets" },
      { name: "Chiffon & organza festive", spec: "Embroidered, embellished, lined", sizes: "Unstitched or stitched", moq: "200 suits" },
      { name: "Winter khaddar & linen", spec: "Printed or embroidered, shawl dupatta", sizes: "Unstitched", moq: "300 suits" },
    ],
    specs: [
      { label: "Fabrics", value: "Lawn, cambric, chiffon, organza, khaddar, linen" },
      { label: "Prints", value: "Digital and reactive printing, screen printing" },
      { label: "Embroidery", value: "Schiffli, multi-head, hand-embellished" },
      { label: "Packing", value: "Branded boxes, poly-bags, size labels" },
      { label: "Seasons", value: "Spring/Summer lawn, Festive, Winter" },
      { label: "Compliance", value: "OEKO-TEX 100 on request" },
    ],
    markets: ["Kuwait", "UAE", "Saudi Arabia", "United Kingdom", "United States", "Canada"],
    hub: "Lahore & Faisalabad",
    leadTime: "30–45 days",
    moq: "From 200 suits per design",
    faqs: [
      { q: "Can you produce under our own label?", a: "Yes. Most of our lawn programmes are retailer-branded, with your packaging, hangtags and catalogue photography." },
    ],
    keywords: ["pakistani lawn suits wholesale", "pakistani clothes wholesale suppliers", "unstitched suits wholesale", "pakistani ready to wear suits wholesale", "lawn fabric wholesale Pakistan"],
  },
];

export type Country = {
  slug: string;
  name: string;
  adjective: string;
  cities: string[];
  port: string;
  transit: string;
  incoterm: string;
  intro: string;
  points: string[];
  keywords: string[];
};

export const countries: Country[] = [
  {
    slug: "uae",
    name: "United Arab Emirates",
    adjective: "UAE",
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ras Al Khaimah"],
    port: "Jebel Ali",
    transit: "7–10 days by sea from Karachi",
    incoterm: "FOB Karachi or CIF Jebel Ali",
    intro: "The UAE adds more hotel rooms every year than any other Gulf market. We supply bed linen, terry and bathrobes to hotel groups, laundries and hospitality suppliers in Dubai and Abu Dhabi, with weekly sailings from Karachi to Jebel Ali.",
    points: ["Consolidated LCL and full-container shipments to Jebel Ali", "Par-stock programmes for multi-property groups", "Arabic and English care labelling", "Replenishment in under three weeks door to door"],
    keywords: ["hotel linen supplier in UAE", "hotel linen supplier Dubai", "hospitality linen suppliers UAE", "hotel towels supplier Dubai"],
  },
  {
    slug: "kuwait",
    name: "Kuwait",
    adjective: "Kuwaiti",
    cities: ["Kuwait City", "Hawalli", "Salmiya"],
    port: "Shuwaikh / Shuaiba",
    transit: "8–12 days by sea from Karachi",
    incoterm: "FOB Karachi or CIF Shuwaikh",
    intro: "Kuwait's hotels, hospitals and serviced-apartment operators source most of their linen through regional distributors. We supply those distributors and larger properties directly, with Pakistani-made bed linen, towels and uniforms shipped to Shuwaikh.",
    points: ["Direct sailings Karachi to Shuwaikh and Shuaiba", "Hospital linen and patient gowns alongside hotel linen", "Printed lawn and ready-to-wear for Kuwaiti retailers", "Ramadan and Eid production scheduling"],
    keywords: ["hotel linen supplier Kuwait", "bed sheets supplier Kuwait", "towels supplier Kuwait", "Pakistani textiles Kuwait"],
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    adjective: "Saudi",
    cities: ["Riyadh", "Jeddah", "Makkah", "Madinah", "Dammam"],
    port: "Jeddah Islamic Port / Dammam",
    transit: "10–14 days by sea from Karachi",
    incoterm: "FOB Karachi or CIF Jeddah / Dammam",
    intro: "Saudi Arabia's pilgrimage and giga-project hotels run the largest linen volumes in the region. We supply Makkah and Madinah hotel operators, Riyadh hospitality groups and contract laundries with high-wash-count bed linen, terry and ihram towels.",
    points: ["Jeddah for the western region, Dammam for the east", "Ihram towels and prayer textiles for pilgrimage operators", "Arabic labelling and SABER-ready documentation", "Capacity for 50,000-piece opening orders"],
    keywords: ["hotel linen supplier in Saudi Arabia", "hotel linen supplier Riyadh", "hotel towels supplier Jeddah", "ihram towel manufacturer"],
  },
  {
    slug: "qatar",
    name: "Qatar",
    adjective: "Qatari",
    cities: ["Doha", "Lusail", "Al Wakrah"],
    port: "Hamad Port",
    transit: "9–12 days by sea from Karachi",
    incoterm: "FOB Karachi or CIF Hamad Port",
    intro: "Doha's hotel inventory doubled around the World Cup and now needs replenishment. We supply Qatari hotel groups, facilities-management companies and laundries with bed linen, towels and uniform programmes shipped to Hamad Port.",
    points: ["Direct service Karachi to Hamad Port", "Facilities-management uniform programmes", "Small replenishment lots by air in 5 days", "Bilingual labelling and documentation"],
    keywords: ["hotel linen suppliers in Qatar", "hotel linen supplier Doha", "hospitality linen Qatar"],
  },
  {
    slug: "uk",
    name: "United Kingdom",
    adjective: "British",
    cities: ["London", "Manchester", "Birmingham", "Edinburgh"],
    port: "Felixstowe / Southampton",
    transit: "22–28 days by sea from Karachi",
    incoterm: "FOB Karachi, CIF Felixstowe or DDP",
    intro: "The UK is one of Pakistan's largest textile customers, with duty-free access under the Developing Countries Trading Scheme. We supply UK hotel linen distributors, laundries, independent hotels and workwear suppliers with Pakistani-made linen and garments.",
    points: ["Duty-free entry under the UK DCTS for most lines", "DDP delivery to your warehouse available", "UK size charts and care labelling", "Workwear and corporate uniform programmes alongside linen"],
    keywords: ["hotel linen suppliers UK", "hotel towels wholesale UK", "bed linen manufacturer for UK", "workwear manufacturer for UK distributors"],
  },
];

export const steps = [
  { n: "01", title: "Enquiry & tech pack", text: "Send a brief, a reference product or a tech pack. We confirm construction, MOQ and a target price within two working days." },
  { n: "02", title: "Sampling", text: "Lab-dips, swatches and a finished sample in 7–14 days. Sample cost is credited against your first order." },
  { n: "03", title: "Production", text: "Inline inspection at 30 percent and a final AQL 2.5 inspection. You receive photo reports at each stage." },
  { n: "04", title: "Shipping", text: "FOB Karachi, CIF or DDP. Weekly sailings to the Gulf, Europe and North America, with documents issued within 48 hours." },
];

export const stats = [
  { value: "4", label: "Production hubs", note: "Faisalabad · Karachi · Sialkot · Multan" },
  { value: "9", label: "Export markets", note: "North America, Europe and the Gulf" },
  { value: "30–45", label: "Days lead time", note: "From approved sample to vessel" },
  { value: "AQL 2.5", label: "Final inspection", note: "On every shipment, with photo report" },
];

export const faqsGeneral = [
  { q: "Are you a manufacturer or a trading company?", a: "We are an export manufacturing partner. Production runs in our partner mills and stitching units in Faisalabad, Karachi, Sialkot and Multan, under our quality control, with MFY Textiles as your single point of contact for development, inspection and shipping." },
  { q: "What are your payment terms?", a: "For new accounts: 30 percent deposit with the order and the balance against copy of the bill of lading. Letters of credit at sight are accepted for orders above USD 50,000. Established accounts move to open-account terms." },
  { q: "What is your minimum order?", a: "Typically 300 to 500 pieces per style and colour for home textiles and 200 pieces for garments. Smaller trial orders are possible at a sampling surcharge." },
  { q: "Which certifications do your mills hold?", a: "OEKO-TEX Standard 100 across all home-textile lines, with GOTS, BCI, amfori BSCI, Sedex SMETA and ISO 9001 available depending on the mill. Certificates are supplied with every quotation." },
  { q: "How do I get samples?", a: "Request a quote with your specification. Swatches ship within a week by courier; finished samples take 7 to 14 days." },
];
