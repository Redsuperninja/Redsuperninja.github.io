# Tawhid Ather — Portfolio

Personal developer portfolio built with Angular 18 (standalone components).
Live at **[redsuperninja.github.io](https://redsuperninja.github.io)**.

![Deploy](https://github.com/Redsuperninja/Redsuperninja.github.io/actions/workflows/deploy.yml/badge.svg)

## Sections

- **Experience** — current role at LASP (CU Boulder)
- **Skills** — languages, CI/CD & DevOps tooling, web frameworks, AI/cloud
- **Projects** — featured builds (Festo agentic frontend generator, SpotU,
  game projects) plus a compact grid of additional coursework/ML projects
- **DevOps & Infrastructure** — what's shipped, in progress, and next
- **Demos** — embedded video walkthroughs (no source code, results only)
- **Contact** — email, LinkedIn, GitHub

## Tech stack

Angular 18 · TypeScript · SCSS · standalone components · no UI library —
all styling is hand-written design tokens (see `src/styles.scss`).

## Getting started

```bash
npm install
npm start        # ng serve → http://localhost:4200
```

```bash
npm run build     # production build → dist/portfolio/browser
```

## Project structure

```
src/app/
├── components/
│   ├── navbar/          top nav with anchor links
│   ├── hero/             name, role, terminal-style intro
│   ├── experience/       work history
│   ├── skills/           skill category grid
│   ├── projects/         featured + "more projects" grid
│   ├── project-card/     reusable card used by projects/
│   ├── devops/           shipped / in-progress / next roadmap
│   ├── video-demos/      embedded YouTube/Loom demo grid
│   ├── contact/          contact links + form
│   └── footer/           bottom credit line
├── pages/home/            composes all components into the page
├── services/
│   └── portfolio-data.service.ts   ← all site content lives here
├── app.config.ts          app-wide providers (router)
└── app.routes.ts           route table
```

**To update any content** (name, projects, skills, experience, DevOps
items, videos), edit `src/app/services/portfolio-data.service.ts`. The
components are display-only and shouldn't need to change for content edits.

## Adding a video demo

Each entry in the `videos` array in `portfolio-data.service.ts` supports an
optional `youtubeId`:

```ts
{ title: 'My Project Demo', description: '...', embedNote: '...', youtubeId: 'VIDEO_ID' }
```

Get `VIDEO_ID` from the share URL: `https://youtu.be/VIDEO_ID` →
`youtubeId: 'VIDEO_ID'`. Leave it unset and the card shows a placeholder
instead. No source-code links live in this section by design — it's for
showing results, not implementation.

## Deployment

Deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`)
on every push to `main`:

1. `npm ci`
2. `ng build --configuration production --base-href "/"`
3. Copies `index.html` → `404.html` for SPA-friendly routing on Pages
4. Publishes `dist/portfolio/browser` via `actions/deploy-pages`

Pages source is set to **GitHub Actions** under
**Settings → Pages → Build and deployment**. No manual deploy step needed —
just push to `main` and check the **Actions** tab.

## License

Personal portfolio — content and resume details are © Tawhid Ather.
Feel free to fork the structure/code for your own portfolio.
