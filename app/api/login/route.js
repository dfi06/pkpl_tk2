export async function GET() {
    const state = crypto.randomUUID()

  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: "http://localhost:3000/api/callback",
    response_type: "code",
    scope: "openid email profile",
    access_type: "offline",
    prompt: "consent",
    state
  })

  return new Response(null, {
    status: 302,
    headers: {
      Location: `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`,
      "Set-Cookie": `oauth_state=${state}; Path=/; HttpOnly; SameSite=Lax`,
    },
  })
}