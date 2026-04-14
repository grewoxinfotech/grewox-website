# Grewox Infotech Website

## One server when you go live (no “two apps”)

Browsers **cannot** send Gmail SMTP by themselves (secrets would leak). So the **mail code stays in Node** — but it is **not a second deployment**:

**One Node process** serves:

1. Your built React site (`frontend/dist`)
2. **`POST /api/contact`** (Nodemailer → **grewoxinfotech@gmail.com**)

You push **one repo**, build once, start **one** command on the VPS. No separate “API host” unless you want one.

---

### Production (typical VPS)

1. Clone the repo on the server.
2. **`cd frontend && npm install && npm run build`**
3. **`cd ../backend && npm install`**
4. Copy **`backend/.env.example`** → **`backend/.env`** and set **`SMTP_USER`**, **`SMTP_PASS`** (Gmail [App password](https://support.google.com/accounts/answer/185833)), optional **`MAIL_TO`** / **`PORT`**.
5. From **`backend`**: **`npm start`** (or `node server.js`).

Open **`http://your-server:PORT`** — same URL for pages and form. Put Nginx in front on port 443 if you use SSL.

---

### Local development (hot reload for React)

1. **Terminal A — API:** `cd backend && npm install && npm run dev` (port **5000**).
2. **Terminal B — UI:** `cd frontend && npm install && npm run dev` (Vite **proxies** `/api` → `5000`).

The contact form always uses **`/api/contact`**.

---

### Optional: one command from repo root

```bash
npm run build    # builds frontend
npm start        # runs backend/server.js (needs frontend/dist present)
```

---

## Why not “everything inside the React files only”?

React is static in the browser. Putting Gmail passwords in frontend code would expose them to everyone. **Direct send** needs a small server (here: same Express app as the static host).

## License

Grewox Infotech.
