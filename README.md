# Yun Chen — Personal Website

A single-page static site (plain HTML/CSS/JS, no build step), deployed via Netlify.

## Structure

```
index.html          ← all page content
css/style.css        ← design tokens, fonts, layout
js/main.js           ← nav scroll-spy + fade-in-on-scroll animations
assets/images/       ← photo + project figures
files/CV_yunchen.pdf  ← CV, linked from the hero "CV" button
netlify.toml          ← tells Netlify to publish the repo root, no build command
```

## Editing content

Everything lives in `index.html`, split into sections marked with
comment banners (`<!-- ═══ SECTION ═══ -->`). Find the section you want
and edit the markup directly:

| Section | What's there |
|---|---|
| `<!-- NAVIGATION -->` | Top nav links |
| `<!-- HERO -->` | Name, tagline, bio blurb, badges, CTA buttons (email/LinkedIn/CV), photo |
| `<!-- ABOUT -->` (`id="about"`) | Bio paragraphs, research interest tags, education list |
| `<!-- PUBLICATIONS -->` (`id="publications"`) | One `.pub-card` per paper — add/remove/reorder freely; add `class="pub-card highlight"` + a `<span class="pub-award">` to call one out |
| `<!-- EXPERIENCE -->` (`id="experience"`) | One `.tl-item` per role, reverse-chronological |
| `<!-- PROJECTS -->` (`id="projects"`) | One `.proj-card` per project; use `<img class="proj-thumb">` for a figure or `<div class="proj-icon">` for an emoji, plus `.proj-links` for PDF/Video links |
| `<!-- FOOTER -->` | Contact links |

To swap the profile photo, replace `assets/images/Yun_photo.png` (any
image works — it's cropped to a circle via CSS `object-fit: cover`, so
it doesn't need to be pre-cropped).

To update the CV, replace `files/CV_yunchen.pdf` with the same filename,
or update the `href` in the hero's CV button if you rename it.

Colors/fonts are CSS variables at the top of `css/style.css` under
`:root { ... }` — change `--terra` etc. to retheme, or the Google Fonts
`@import` line to swap typefaces.

## Previewing locally

No build step — just open `index.html` in a browser. If you want the
nav's `#anchor` links and any relative-path fetches to behave exactly
like production, serve it instead of opening the file directly:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploying (Netlify)

This repo is already connected to Netlify, and `netlify.toml` pins the
publish directory to the repo root with no build command — so no
dashboard configuration is needed.

- **Automatic deploys**: push to the branch Netlify is watching (check
  Site settings → Build & deploy → Branches in the Netlify dashboard) —
  every push triggers a new deploy automatically.
- **Manual deploy**: in the Netlify dashboard, go to Deploys → Trigger
  deploy → Deploy site, if you want to force a rebuild without pushing.
- **Preview before merging**: Netlify creates a deploy preview for any
  pull request automatically (if PR deploys are enabled for the site).
