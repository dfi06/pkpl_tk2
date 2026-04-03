import { getUser } from "@/lib/auth";
import ChangeButton from "./components/changebutton";
import getAdmins from "@/lib/admin";
import { FcGoogle } from "react-icons/fc";
import { getTheme } from "@/lib/redis";
import Image from "next/image";

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
      className="space-y-4 h-fit flex flex-col items-center p-20"
    >
      <ul>
        <div className="flex items-center gap-4">
          <div className="w-40 h-68 relative">
            <Image src="/hammam.jpg" alt="" fill />
          </div>
          <li>{`Hammam Muhammad Mubarak – 2406401350 - Sistem Informasi`}</li>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-40 h-52 relative">
            <Image src="/raydzan.jpg" alt="" fill />
          </div>
          <li>{`Moch Raydzan – 2406432482 - Sistem Informasi`}</li>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-40 h-38 relative">
            <Image src="/daffa.jpeg" alt="" fill />
          </div>
          <li>{`Daffa Ismail – 2406434090 - Ilmu Komputer`}</li>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-40 h-52 relative">
            <Image src="/fadhil.jpg" alt="" fill />
          </div>
          <li>{`Muhammad Fadhil Al Afifi Fajar – 2406430104 - Sistem Informasi`}</li>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-40 h-56 relative">
            <Image src="/gar.jpg" alt="" fill />
          </div>
          <li>{`Garuga Dewangga Putra Handikto – 2406437615 - Sistem Informasi`}</li>
        </div>
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
