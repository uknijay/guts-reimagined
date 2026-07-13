# GUTS reimagined

A ground-up redesign of the Glasgow University Tech Society website. The original repository was used only as a content source and was not modified.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The content editor lives at `/admin` after deployment.

## CMS setup

The site uses Decap CMS, so committee members can edit events and the committee through forms rather than code.

1. Create a new GitHub repository and push this project to it.
2. Import that repository into Netlify.
3. Enable Netlify Identity and Git Gateway.
4. Invite committee members. They can then sign in at `/admin`.

The public content is held in `public/content/events.json` and `public/content/site.json`, making it portable and version-controlled.
