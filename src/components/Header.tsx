"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-[background,box-shadow] duration-300 ${scrolled || open ? "bg-ivory/95 backdrop-blur shadow-[0_1px_0_var(--rule)]" : "bg-transparent"}`}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="hidden lg:flex items-center justify-between py-2 text-[11px] tracking-[.22em] uppercase text-muted font-mono border-b border-rule/70">
          <span>Export manufacturing · Faisalabad · Karachi · Sialkot · Multan</span>
          <span className="flex gap-6"><a className="hover:text-navy" href={`mailto:${site.email}`}>{site.email}</a><a className="hover:text-navy" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">WhatsApp {site.phone}</a></span>
        </div>
        <div className="flex items-center justify-between py-4 lg:py-5">
          <Link href="/" aria-label="MFY Textiles — home" className="flex items-center">
            <Image src="/brand/logo-blue.png" alt="MFY Textiles" width={132} height={72} priority className="h-11 w-auto lg:h-14" />
          </Link>
          <nav className="hidden lg:flex items-center gap-9">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={`text-[13.5px] tracking-[.06em] uppercase transition-colors ${path.startsWith(n.href) ? "text-blue" : "text-navy hover:text-blue"}`}>{n.label}</Link>
            ))}
            <Link href="/request-a-quote" className="btn btn-primary !py-3 !px-5 text-[13px]">Request a quote</Link>
          </nav>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu" className="lg:hidden flex flex-col gap-[5px] p-2">
            <span className={`block h-[1.5px] w-6 bg-navy transition ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-6 bg-navy transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-6 bg-navy transition ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-rule bg-ivory">
          <nav className="mx-auto max-w-[1400px] px-6 py-6 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="py-3 text-lg display border-b border-rule/70">{n.label}</Link>
            ))}
            <Link href="/request-a-quote" className="btn btn-primary mt-5 justify-center">Request a quote</Link>
            <a href={`https://wa.me/${site.whatsapp}`} className="btn btn-outline mt-2 justify-center">WhatsApp</a>
          </nav>
        </div>
      )}
    </header>
  );
}
