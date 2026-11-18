import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || body._gotcha || !body.email || !body.name) return NextResponse.json({ ok: false }, { status: 400 });
  const to = process.env.QUOTE_TO_EMAIL;
  const key = process.env.RESEND_API_KEY;
  const lines = Object.entries(body).filter(([k]) => k !== "_gotcha").map(([k, v]) => `${k}: ${v}`).join("\n");
  if (key && to) {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.QUOTE_FROM_EMAIL ?? "MFY Textiles <onboarding@resend.dev>", to: [to], reply_to: body.email, subject: `Quote request — ${body.product ?? "textiles"} — ${body.company ?? body.name}`, text: lines }),
    });
    if (!r.ok) return NextResponse.json({ ok: false }, { status: 502 });
  } else {
    console.log("[quote]", lines);
  }
  return NextResponse.json({ ok: true });
}
