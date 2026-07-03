# Portfolio

Harsha Chandimal's personal portfolio, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting Started (Local Development)

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you edit files under `src/`.

## Building Locally

To verify the production build before deploying:

```bash
npm run build
npm run start
```

`npm run build` compiles the app and runs the TypeScript check; `npm run start` serves the optimized production build locally on port 3000.

To check for lint issues:

```bash
npm run lint
```

## Deploying to Vercel

1. Push this repository to GitHub (see commands below).
2. Go to [vercel.com/new](https://vercel.com/new) and sign in with your GitHub account.
3. Click **Import Project**, select this repository from the list.
4. Vercel auto-detects the Next.js framework — leave the default build settings:
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`
5. Click **Deploy**. Vercel will build and host the site, giving you a live URL (e.g. `your-project.vercel.app`).
6. (Optional) Add a custom domain under Project Settings → Domains.

## Updating the Site After Deployment

Vercel is connected directly to the GitHub repository, so every push to `main` triggers a new deployment automatically.

```bash
git add .
git commit -m "Update: describe your change"
git push origin main
```

Vercel will pick up the push, rebuild, and redeploy — no manual steps needed. Pull requests / other branches get their own preview deployments automatically.