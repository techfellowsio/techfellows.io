# Copilot Instructions — techfellows.io

Marketing site for the TechFellows community. Nuxt 3 + Vue 3 + TypeScript + Tailwind + Pinia, deployed to Cloudflare Pages via Nitro's `cloudflare-pages` preset.

## Commands

- `npm install` — also triggers `nuxt prepare` (postinstall); required after fresh clone or dependency change before type-check/lint work.
- `npm run dev` — local dev server at `http://localhost:3000`.
- `npm run build` — production build for Cloudflare Pages.
- `npm run generate` — static generation.
- `npm run preview` — preview production build locally.
- `npm run pages:dev` — run dev server through `wrangler pages dev` (Cloudflare bindings proxy on port 3000).
- `npm run pages:deploy` — build and deploy to Cloudflare Pages via Wrangler.

There is no test runner and no dedicated lint script. ESLint is wired into Nuxt's type-check step (`nuxt.config.ts` → `typescript.typeCheck.eslint`), so linting runs during `build`/`dev`. To lint ad-hoc, run ESLint directly: `npx eslint path/to/file.vue`. To type-check without building: `npx nuxi typecheck`.

## Architecture

Content-driven marketing site with **no backend/API**. All page content is static JSON under `data/` and is loaded into Pinia stores for reactivity:

- `data/*.json` → imported by the matching store in `stores/*Store.ts` → consumed by components/pages.
- Example flow: `data/events.json` → `stores/eventsStore.ts` (defines `Event` interface, derives `sortedEvents` / `upcomingEvents` / `pastEvents` getters from raw date fields) → `components/EventsList.vue` / `EventCard.vue`.
- `data/seo.json` is imported directly in `nuxt.config.ts` as the `site` config for `@nuxtjs/seo`.
- `data/app-config.json` backs `app.config.ts`.

Single-page app: `pages/` contains only `index.vue`. The root layout lives in `app.vue` and mounts `BasePageHeader`, `<NuxtPage>`, `BasePageFooter`, and a `#modal` portal.

Third-party scripts (Microsoft Clarity, SCM) are injected via `app.head.script` in `nuxt.config.ts`; static SCM assets live in `public/scm/`.

Images use `@nuxt/image` with the `cloudflare` provider (`baseURL: https://techfellows.io/`).

## Conventions

- **Add new content by editing `data/*.json`, not by hardcoding in components.** If a new content type is needed, create both a JSON file in `data/` and a matching Pinia store in `stores/` that imports it (mirror `eventsStore.ts`).
- Pinia stores use the **options API form** (`defineStore({ id, state, actions, getters })`), not the setup form.
- Events store dates as separate `year/month/day/hour/minute` numeric fields (not ISO strings) — reuse this shape for anything date-related so existing getters/sorting work.
- Components are auto-imported by Nuxt; use PascalCase tags (e.g. `<EventsList />`). Shared layout primitives live under `components/base/` and are referenced as `<BasePageHeader />` etc.
- Styling is Tailwind-first. Global SCSS entry is `assets/css/app.scss` (registered in `nuxt.config.ts`). `prettier-plugin-tailwindcss` sorts classes — run Prettier rather than hand-ordering.
- TypeScript is strict via `standard-with-typescript` + `@typescript-eslint/recommended-requiring-type-checking`. Keep explicit return types on store getters/actions (see `eventsStore.ts`).
- Cloudflare-specific code: `worker-configuration.d.ts` holds binding types; `nitro-cloudflare-dev` module enables bindings in dev. Extend `wrangler.toml` (currently only `name` + `compatibility_date`) when adding KV/D1/R2 bindings.
