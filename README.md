# Tawhid Ather — Portfolio (Angular)

Angular 18 standalone-component portfolio site.

## Run locally
```bash
npm install
npm start        # ng serve, http://localhost:4200
```

## Production build
```bash
npm run build    # outputs to dist/portfolio
```

## Structure
```
src/app/
  components/   # navbar, hero, experience, skills, projects, project-card,
                # devops, video-demos, contact, footer
  pages/home/   # composes the components above into the single-page layout
  services/     # portfolio-data.service.ts — all content lives here
  app.config.ts
  app.routes.ts
```

## Editing content
Everything — name, experience, projects, skills, DevOps items, video
placeholders — lives in `src/app/services/portfolio-data.service.ts`.
Edit that one file to update the site; no need to touch the components.

## Adding real video demos
In `src/app/components/video-demos/video-demos.component.html`, swap the
placeholder `<div class="placeholder">` block for:
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe>
```
using an unlisted YouTube or Loom link.

## Wiring up the contact form
`src/app/components/contact/contact.component.ts` currently just flips a
`submitted` flag. Point `onSubmit()` at Formspree, EmailJS, or your own
backend endpoint to actually receive messages.
