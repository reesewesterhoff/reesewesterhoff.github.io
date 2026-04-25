# [reesewesterhoff.com](https://www.reesewesterhoff.com/)

My personal website [https://www.reesewesterhoff.com](https://www.reesewesterhoff.com/), built with Vite, HTML, CSS, and JavaScript.

## Develop

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

Output is written to `dist/`. You can check it with `npm run preview`.

## Deploy (GitHub Pages)

This repo is configured to deploy with **GitHub Actions** when there is a push to `main`.

1. In the repository on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. The workflow builds with `npm ci` and `npm run build`, then publishes `dist/`.
