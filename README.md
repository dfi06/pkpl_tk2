deployed site: https://pkpl-tk2.vercel.app/



Untuk jalanin secara local:

clone project

open terminal inside project dir (alias root)

setup:
```
pnpm install
```

add file .env in project dir, contents:
```
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
ADMIN_EMAILS=contoh@gmail.com,contohlagi@gmail.com
WEBSITE_URL=http://localhost:3000
```



run:
```
pnpm run dev
```