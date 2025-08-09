export async function POST(request: Request) {
  const data = await request.json()
  // In production, forward to your email/CRM. For now, we log and return success.
  console.log("IMS Quote Request:", data)
  return Response.json({ ok: true })
}
