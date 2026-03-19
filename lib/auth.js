import { cookies } from "next/headers";

export async function getUser() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("user");
  if (!cookie) return null;
  return JSON.parse(decodeURIComponent(cookie.value));
}
