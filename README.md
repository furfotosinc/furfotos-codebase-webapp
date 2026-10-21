# FurFotos

Coming-soon page for [furfotos.com](https://furfotos.com), a photo and video journal of your pet’s life. The page is a light table with a blank film strip: the journal is not open yet.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

The address on the page is `furfotos@gmail.com`. Change it in `app/page.tsx` if you use a different inbox.

## Put it on furfotos.com

This app is a Next.js site. GoDaddy domain tools can see that `furfotos.com` is already registered. They cannot upload files or edit DNS. Host the site, then point the domain at that host.

### Publish, then point GoDaddy DNS

1. Publish this project (Vercel is the straightforward host for Next.js).
2. In the host, add the domain `furfotos.com`.
3. In GoDaddy, open the domain’s DNS and use the records the host shows. For Vercel those are usually:
   - `A` record on `@` → `76.76.21.21`
   - `CNAME` record on `www` → `cname.vercel-dns.com`
4. Remove conflicting `A`, `AAAA`, or forwarding records on `@` and `www`. DNS can take a few hours.

Confirm the exact records in the host’s domain screen before saving them. They can differ by project.

### GoDaddy web hosting (cPanel)

If the domain already has GoDaddy cPanel hosting and you want the files on that account, build a static copy and upload it to `public_html`:

1. In `next.config.ts`, set `output: "export"`.
2. Run `npm run build`.
3. Upload the contents of `out/` into `public_html` with cPanel File Manager or FTP.

That static export drops Next.js server features. The coming-soon page does not need them.
