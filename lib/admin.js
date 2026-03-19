export default function getAdmins() {
  const raw = process.env.ADMIN_EMAILS;

  return raw ? raw.split(",") : [];
}
