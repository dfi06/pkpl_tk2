import { getUser } from "@/lib/auth";
import ChangeButton from "./components/changebutton";
import getAdmins from "@/lib/admin";
import Link from "next/link";

export default async function Home() {
  const user = await getUser();

  const admins = getAdmins();
  const isAdmin = admins.includes(user?.email);

  return (
    <div className="space-y-4">
      <ul>
        <li>{`Hammam Muhammad Mubarak – 2406401350`}</li>
        <li>{`Moch Raydzan – 2406432482`}</li>
        <li>{`Daffa Ismail – 2406434090`}</li>
        <li>{`Muhammad Fadhil Al Afifi Fajar – 2406430104`}</li>
        <li>{`Garuga Dewangga Putra Handikto – 2406437615`}</li>
      </ul>

      {!user ? (
        <a href="/api/login">Login with Google</a>
      ) : (
        <>
          <div>Hello, {user.email}</div>
          {isAdmin ? <ChangeButton /> : <p>View only</p>}
          <div>{`TODO: implementasi 'ngubah tampilan website'`}</div>
        </>
      )}
    </div>
  );
}
