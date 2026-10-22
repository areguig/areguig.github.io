# areguig.github.io

Personal site of Akli Reguig: [areguig.github.io](https://areguig.github.io).

- One static page, Next.js (`output: 'export'`) + Tailwind
- All copy lives in `src/content/site.ts`
- Push to `master` deploys to GitHub Pages (`.github/workflows/deploy.yml`)

```sh
npm ci
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```
