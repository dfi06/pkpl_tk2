import { cookies } from "next/headers";

export async function GET(Request) {
  const { searchParams } = new URL(Request.url);

  const code = searchParams.get("code");
  const returnedState = searchParams.get("state");

  const cookieStore = await cookies();
  const storedState = cookieStore.get("oauth_state")?.value;

  if (!storedState || storedState !== returnedState) {
    return new Response("state mismatch!!!!", { status: 400 });
  }

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.WEBSITE_URL}/api/callback`,
      grant_type: "authorization_code",
    }),
  });

  const tokenData = await tokenRes.json();

  const userRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
    },
  });

  const user = await userRes.json();

  cookieStore.set("user", JSON.stringify(user), {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
  });

  return Response.redirect("http://localhost:3000");
}
