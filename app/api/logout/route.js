import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  cookieStore.delete("oauth-state");
  cookieStore.delete("user");
  return Response.redirect("http://localhost:3000");
}
