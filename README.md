# reesewesterhoff.com

Personal site for [Reese Westerhoff](https://www.reesewesterhoff.com/), built with [Vite](https://vitejs.dev/) and plain HTML, CSS, and JavaScript.

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

This repo is configured to deploy with **GitHub Actions** (see [`.github/workflows/pages.yml`](.github/workflows/pages.yml)) when you push to `main` or `master` (add your branch in the workflow file if you use a different name).

1. In the repository on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. The workflow builds with `npm ci` and `npm run build`, then publishes `dist/`.

`public/CNAME` is included in the build so the custom domain **www.reesewesterhoff.com** / **reesewesterhoff.com** continues to work for DNS you already have pointed at GitHub.

## License

This project’s site content is personal; the repository may retain prior open-source license files from the original template. See [LICENSE](LICENSE) if present.
