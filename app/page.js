import { getUser } from "@/lib/auth";
import ChangeButton from "./components/changebutton";
import getAdmins from "@/lib/admin";
import { FcGoogle } from "react-icons/fc";
import { getTheme } from "@/lib/redis";

export default async function Home() {
  const user = await getUser();
  const admins = getAdmins();
  const isAdmin = admins.includes(user?.email);
  const theme = await getTheme();

  const bgColor = theme?.bgColor || "#000000";
  const fontFamily = theme?.fontStyle || "sans-serif";

  return (
    <div
      style={{
        backgroundColor: bgColor,
        fontFamily: fontFamily,
        transition: "all 0.3s ease",
      }}
      className="space-y-4 h-screen flex flex-col items-center p-20"
    >
      <ul>
        <li>{`Hammam Muhammad Mubarak – 2406401350`}</li>
        <li>{`Moch Raydzan – 2406432482`}</li>
        <li>{`Daffa Ismail – 2406434090`}</li>
        <li>{`Muhammad Fadhil Al Afifi Fajar – 2406430104`}</li>
        <li>{`Garuga Dewangga Putra Handikto – 2406437615`}</li>
      </ul>

      {!user ? (
        <a
          href="/api/login"
          className="bg-white text-black rounded-xl py-3 px-6 flex items-center gap-2 border"
        >
          <FcGoogle size={24} /> Login with Google
        </a>
      ) : (
        <>
          {isAdmin ? <ChangeButton /> : <p>Login berhasil tapi bukan admin!</p>}
          <div>Hello, {user.email}</div>
          <a
            href="/api/logout"
            className="bg-white text-black rounded-xl py-3 px-6 flex items-center gap-2 border"
          >
            logout
          </a>
        </>
      )}
    </div>
  );
}
