# Giard Design — Responsive Portfolio Landing Page

A modern, responsive single‑page website built with semantic HTML, Tailwind CSS (via CDN), vanilla JavaScript, and AOS (Animate On Scroll). The site showcases a clean design, mobile‑first layout, animated sections, a masonry gallery with image lightbox, and a slide‑in mobile navigation.

![Hero preview](images/hero-photo.jpg)

## Live demo

This project is static and can be hosted anywhere that serves static files.
- GitHub Pages: enable Pages for this repository and point it to the `main` branch (root). Your URL will be `https://<username>.github.io/<repo>/`.
- Netlify/Vercel: drag‑and‑drop the folder, or connect the repo and deploy as a static site.

## Features
- Responsive, mobile‑first layout
- Slide‑in mobile navigation with overlay close
- Scroll‑triggered animations via AOS
- Masonry gallery with expand control and image popup/lightbox
- Smooth scrolling, subtle hover and underline effects
- Lightweight: no build step required

## Tech stack
- HTML5
- Tailwind CSS (CDN, inline config in `index.html`)
- Vanilla JavaScript
- AOS (CDN)

## Quick start (local)
No build tools required. You can simply open `index.html` in a browser, or serve it with a static server for best results.

Using Python (built‑in on most systems):

```bash
cd /path/to/project
python3 -m http.server 5173
# Open http://localhost:5173 in your browser
```

Using Node.js (npx):

```bash
cd /path/to/project
npx serve -l 5173 .
# Open http://localhost:5173 in your browser
```

## Project structure
```text
.
├── index.html        # Markup and Tailwind CDN config
├── main.css          # Additional styles (masonry, effects, popup)
├── main.js           # Interactions (menu, search, gallery popup, AOS init)
├── images/           # Site imagery
└── icons/            # SVG/PNG icons
```

## Customization
- Colors/theme: set in the inline Tailwind config inside `index.html` under `tailwind.config.theme.extend.colors`.
- Copy/content: edit headings, paragraphs, and links directly in `index.html` (Polish language copy by default).
- Animations: AOS attributes (e.g., `data-aos="fade-right"`, `data-aos-duration="1100"`) are in the markup. Refer to AOS docs for available effects and options.
- Gallery: update images in `images/` and corresponding `<img>` elements in the masonry grid within the `#projects` section.
- Interactions: see `main.js` for mobile menu, search toggle, “expand” gradient hide, and image popup logic.

## Accessibility & SEO
- Language: document is set to `lang="pl"`. Adjust if your content language changes.
- Alt text: images include `alt` attributes; update to accurately describe content.
- Meta: add a meaningful `meta name="description"` and social preview tags as needed.

## Deployment
- GitHub Pages: Settings → Pages → Deploy from a branch → `main` / root. Commit and visit the generated URL.
- Netlify: New site from Git → pick the repo → no build command → publish directory = root.
- Vercel: Import project → Framework preset = “Other” → Output directory = `.`.

## Credits
- Design inspiration and branding assets credited to AdRespect (`adrespect.pl`).
- AOS by Michał Sajnóg.
- Masonry CSS technique adapted from `w3bits.com`.

## License
This repository contains third‑party design assets and images. Unless otherwise noted, code is provided without an explicit license. Please seek permission before reusing non‑code assets.

