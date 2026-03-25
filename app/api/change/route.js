import getAdmins from "@/lib/admin";
import { getUser } from "@/lib/auth";
import { setTheme } from "@/lib/redis";

const colors = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#F7DC6F",
  "#BB8FCE",
  "#85C1E2",
];

const fontStyles = ["sans-serif", "serif", "monospace", "cursive"];

export async function GET() {
  const user = await getUser();

  const admins = getAdmins();
  if (!user || !admins.includes(user.email)) {
    return new Response("not admin!!", { status: 403 });
  }

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomFontStyle =
    fontStyles[Math.floor(Math.random() * fontStyles.length)];

  const theme = {
    bgColor: randomColor,
    fontStyle: randomFontStyle,
  };

  await setTheme(theme);

  return Response.json({ ok: true, theme });
}
