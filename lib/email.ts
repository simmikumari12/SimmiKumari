export async function sendNotifyEmail(subject: string, html: string) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.NOTIFY_EMAIL
  const from = process.env.FROM_EMAIL

  if (!apiKey || !to || !from) return

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html }),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => "")
    console.error("Resend email failed:", res.status, text)
  }
}
