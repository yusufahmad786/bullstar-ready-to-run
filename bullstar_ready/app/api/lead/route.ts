import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  // In production: push to CRM, email, Google Sheet, WhatsApp API, etc.
  // For now: basic ok response so UI works.
  if (!body?.name || !body?.phone) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  return NextResponse.json({ ok: true }, { status: 200 });
}
