import getAdmins from "@/lib/admin";
import { getUser } from "@/lib/auth";

export async function GET() {
  const user = await getUser();

  const admins = getAdmins();
  if (!user || !admins.includes(user.email)) {
    return new Response("not admin!!", { status: 403 });
  }

  return Response.json({ ok: true });
}
