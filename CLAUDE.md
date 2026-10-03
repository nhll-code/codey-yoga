# Kotiin Yoga — Project Rules

## Stack
- React + Vite, single-page app
- CSS in `src/App.css` (component styles) and `src/index.css` (globals)
- Hosted on Netlify; git remote: `https://github.com/nhll-code/codey-yoga.git`
- Google Fonts: Cormorant Garamond (serif, content) + Nunito Sans (sans-serif, utility only)

## Branch & Deploy Protocol
- `main` — production. Only merge here when ready to ship.
- `staging` — integration / preview before prod.
- Feature branches off `staging`, not `main`.
- **Deploy steps (always in this order):**
  1. `git add <specific files>` — never `git add .` blindly
  2. `git commit -m "..."` with a clear message
  3. `git push origin <branch>`
  4. Go to Netlify → Deploys → click **Publish deploy** on the new build
  - Auto-publishing is locked; the manual publish step is always required.
- Build command: `npm run build` → output in `dist/`

## CSS Rules
- One `@media (max-width: 768px)` block at the bottom of `App.css` for all mobile overrides. Never scatter breakpoints.
- Use `clamp(min, vw, max)` for fluid font sizes on headings.
- Desktop styles are never touched when fixing mobile, and vice versa.
- No inline styles in JSX. All styling in CSS files.
- Do not add CSS frameworks (Tailwind, Bootstrap, etc.).

## Security
- No `dangerouslySetInnerHTML`. Ever.
- No external scripts beyond Google Fonts. All logic stays in-repo.
- No user-submitted data, forms, or APIs — this is a static marketing site.
- No `.env` files with secrets committed to git.
- No third-party analytics or tracking scripts without explicit approval.

## Performance / No Bloat
- Do not install npm packages without discussing it first.
- Do not add new image files without checking they are compressed (target < 500 KB per image).
- Do not add new sections, features, or copy without being asked.
- Targeted edits only — fix what was asked, nothing else.

## Working Style
- Explain the change before making it when the impact is non-obvious.
- Edit existing files; don't create new ones unless necessary.
- Test mentally against mobile (≤768px) and desktop (≥1024px) for every CSS change.
- Never rewrite a whole file to fix one thing.
- Commit only `src/` files. Never commit `dist/`, `node_modules/`, or editor config.
