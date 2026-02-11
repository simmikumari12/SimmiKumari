import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabaseAdmin"
import { sendNotifyEmail } from "@/lib/email"

function isEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const name = String(body?.name ?? "").trim()
    const email = String(body?.email ?? "").trim()
    const message = String(body?.message ?? "").trim()

    // honeypot (hidden field bots fill)
    const honey = String(body?.company ?? "").trim()
    if (honey) return NextResponse.json({ ok: true })

    if (!name || name.length > 80) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 })
    }
    if (!email || email.length > 120 || !isEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }
    if (!message || message.length > 2000) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 })
    }

    const { error } = await supabaseAdmin
      .from("contact_messages")
      .insert([{ name, email, message }])

    if (error) {
      return NextResponse.json({ error: "Failed to submit" }, { status: 500 })
    }

    // ✅ Send notification email (non-blocking optional; see note below)
    await sendNotifyEmail(
      "New portfolio contact message",
      `<p><b>Name:</b> ${name}</p>
       <p><b>Email:</b> ${email}</p>
       <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>`
    )

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 })
  }
}
