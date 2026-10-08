# GUTS reimagined

The Glasgow University Tech Society website. The homepage, event archive, sticker drawer, committee, and sponsor board are driven by version-controlled JSON content in `public/content/`.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The public pages work locally without any credentials. The content editor is at [guts-reimagined.vercel.app/admin/](https://guts-reimagined.vercel.app/admin/) after the OAuth setup below.

## Content editor setup on Vercel

The previous editor configuration used Netlify Git Gateway and could not sign in on this Vercel-hosted site. It now uses Decap's GitHub backend and a small same-origin OAuth handler. A one-time setup by the GitHub/Vercel project owner is still required:

1. In GitHub Developer Settings, create a **GitHub OAuth App** named for the GUTS content studio. Set homepage URL to `https://guts-reimagined.vercel.app/admin/` and callback URL to `https://guts-reimagined.vercel.app/api/callback`.
2. In the **guts-reimagined Vercel project**, add the app's Client ID as `GITHUB_OAUTH_CLIENT_ID` and Client Secret as `GITHUB_OAUTH_CLIENT_SECRET` (Production environment). Never commit these values or send the secret in chat.
3. Redeploy the project after adding the variables. Visit `https://guts-reimagined.vercel.app/admin/` and sign in with a GitHub account that has write access to `uknijay/guts-reimagined`.
4. Add other committee editors as GitHub repository collaborators with write access. The OAuth flow requests GitHub's `public_repo` permission; editors should understand that this grant covers their public repositories, not just this site.

Until steps 1-3 are complete, the editor shows an OAuth setup error; the public website remains fully functional. The editor is intended for the production domain, not Vercel preview URLs. If the production domain changes, update `backend.base_url` in `public/admin/config.yml`, the OAuth app callback, and `CMS_ORIGIN` in Vercel together.

The editor offers forms to add, reorder, update and remove events, stickers, sponsors, social links and committee members, as well as the main homepage and partners-page copy. Uploaded media is committed to `public/uploads`. Publishing commits the content and image changes to `main`; the connected Vercel project then rebuilds the site. New events appear in the event archive automatically, and up to three events marked “Feature poster in homepage hero” fill the hero collage. The first sticker marked “Also show on the homepage hero” appears there, while all stickers appear in the sticker drawer. Sponsor-board numbering adjusts to the list length.

For sticker uploads, use transparent PNG or WebP cut-outs. The included web copies are based on GUTS's 2017, 2018, 2019, 2021, 2022 and 2024 originals; the source archive in Downloads is unchanged. The 2025/2026 print-page PDFs were not used as cut-outs because their white print backgrounds are visible.
