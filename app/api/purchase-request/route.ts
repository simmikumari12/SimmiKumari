import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabaseAdmin"

function isEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const artworkTitle = String(body?.artworkTitle ?? "").trim()
    const buyerName = String(body?.name ?? "").trim()
    const buyerEmail = String(body?.email ?? "").trim()
    const message = String(body?.message ?? "").trim()

    // honeypot
    const honey = String(body?.company ?? "").trim()
    if (honey) return NextResponse.json({ ok: true })

    if (!artworkTitle || artworkTitle.length > 120) {
      return NextResponse.json({ error: "Invalid artwork" }, { status: 400 })
    }
    if (!buyerName || buyerName.length > 80) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 })
    }
    if (!buyerEmail || buyerEmail.length > 120 || !isEmail(buyerEmail)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }
    if (message.length > 2000) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 })
    }

    // Find artwork_id by title
    const { data: artwork, error: artErr } = await supabaseAdmin
      .from("artworks")
      .select("id,title")
      .eq("title", artworkTitle)
      .single()

    if (artErr || !artwork) {
      return NextResponse.json({ error: "Artwork not found" }, { status: 404 })
    }

    const { error } = await supabaseAdmin.from("purchase_requests").insert([
      {
        artwork_id: artwork.id,
        artwork_title: artwork.title,
        buyer_name: buyerName,
        buyer_email: buyerEmail,
        message,
      },
    ])

    if (error) {
      return NextResponse.json({ error: "Failed to submit request" }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 })
  }
}
