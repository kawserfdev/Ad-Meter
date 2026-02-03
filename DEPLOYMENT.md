Deployment options (free)
=========================

This project builds into `dist/` using `npm run build` (Vite). The `dist/` folder is ready to be served as a static site.

Quick options:

- Vercel (recommended):
  - Connect your GitHub repo to Vercel and import the project.
  - Framework: Vite
  - Build command: `npm run build`
  - Output directory: `dist`

- Netlify:
  - Connect your repository or drag-and-drop the `dist/` folder in the Netlify UI.
  - Build command (when connecting repo): `npm run build`
  - Publish directory: `dist`
  - This repo includes `netlify.toml` for SPA redirects.

- GitHub Pages (via GitHub Actions):
  - Create a GitHub repository and push this code to `main` (or `master`).
  - The workflow `.github/workflows/gh-pages.yml` will run `npm ci` and `npm run build` then publish `dist/` to the `gh-pages` branch using the provided `GITHUB_TOKEN`.

- Cloudflare Pages:
  - Connect your Git repository to Cloudflare Pages.
  - Build command: `npm run build`
  - Build output directory: `dist`

Notes and tips:
- If you want me to push these changes to a GitHub repo for you, provide the remote URL (or give me permission) and tell me which branch to push to.
- For single-page-app routing, Netlify and Cloudflare Pages support SPA fallbacks by redirecting all routes to `index.html`. `netlify.toml` is included in the repo for Netlify.
