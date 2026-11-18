"use client";
import { useState } from "react";
import { products, countries, site } from "@/data/site";

export function QuoteForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const r = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setState(r.ok ? "ok" : "err");
    } catch { setState("err"); }
  }
  if (state === "ok") return (
    <div className="frame corner p-10 text-center">
      <p className="eyebrow plain justify-center">Received</p>
      <h3 className="display text-3xl mt-3">Thank you. We will reply within two working days.</h3>
      <p className="text-muted mt-4">For anything urgent, message us on WhatsApp at {site.phone}.</p>
    </div>
  );
  return (
    <form onSubmit={submit} className="grid gap-6 sm:grid-cols-2">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" required autoComplete="name" /></div>
      <div className="field"><label htmlFor="company">Company</label><input id="company" name="company" required autoComplete="organization" /></div>
      <div className="field"><label htmlFor="email">Work email</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
      <div className="field"><label htmlFor="phone">Phone / WhatsApp</label><input id="phone" name="phone" autoComplete="tel" /></div>
      <div className="field"><label htmlFor="product">Product category</label>
        <select id="product" name="product" defaultValue={defaultProduct} required>
          <option value="" disabled>Select</option>
          {products.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
          <option>Other / multiple</option>
        </select></div>
      <div className="field"><label htmlFor="country">Destination market</label>
        <select id="country" name="country" required defaultValue="">
          <option value="" disabled>Select</option>
          {["United States", "Canada", "United Kingdom", "Germany", "Netherlands", "Spain", "France", "Italy", ...countries.filter((c) => c.slug !== "uk").map((c) => c.name), "Other"].map((c) => <option key={c}>{c}</option>)}
        </select></div>
      <div className="field"><label htmlFor="quantity">Estimated quantity</label><input id="quantity" name="quantity" placeholder="e.g. 2,000 sets per quarter" /></div>
      <div className="field"><label htmlFor="incoterm">Preferred terms</label>
        <select id="incoterm" name="incoterm" defaultValue="FOB Karachi"><option>FOB Karachi</option><option>CIF destination port</option><option>DDP to warehouse</option><option>Not sure</option></select></div>
      <div className="field sm:col-span-2"><label htmlFor="message">Specification</label><textarea id="message" name="message" rows={6} placeholder="Construction, GSM or thread count, sizes, colours, branding, target price, timeline. Attach a tech pack by email after submitting." /></div>
      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button className="btn btn-primary" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send enquiry"}</button>
        <span className="text-sm text-muted">Or email <a className="link-ul text-navy" href={`mailto:${site.email}`}>{site.email}</a></span>
        {state === "err" && <span className="text-sm text-red-700">Could not send. Please email us directly.</span>}
      </div>
    </form>
  );
}
