# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static DJ/music producer presskit website for ARNAUT, hosted on GitHub Pages at `arnaut.ec`. No build process — pure HTML5, CSS3, and vanilla JavaScript with Bootstrap 5.3.3 via CDN.

## Running Locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. There is no package.json, no npm, and no compilation step.

## Site Structure

Three separate entry points, each self-contained:

| Path | Purpose |
|------|---------|
| `index.html` | Main public presskit (bio, music, gallery, booking) |
| `dj/index.html` | Private pricing/quote page for event bookings |
| `links/index.html` | Minimal social links landing page |

Each page has its own CSS (`styles/style.css`, `styles/style-dj.css`) and JS (`js/script.js`, `js/script-dj.js`).

## Architecture Notes

**Navbar transparency logic** (`js/script.js`): The navbar is transparent when the viewport is over the hero or other "immersive" sections (video, clips, gallery), and solid otherwise. This is driven by scroll position + IntersectionObserver / manual section detection — be careful when adding new full-bleed sections.

**Glassmorphism design**: Cards use `backdrop-filter: blur()` with semi-transparent backgrounds. The effect requires a non-white background behind the card to be visible.

**Parallax**: `background-attachment: fixed` on desktop, disabled on mobile via media query (mobile browsers don't support it smoothly).

**Images**: All images are `.webp`. Background video is `images/loopPreviaColor.mp4` (autoplay, muted, loop).

**Section anchors**: Sections use `scroll-margin-top` to account for the fixed navbar when jumping via anchor links.

## Deployment

Push to `master` branch → GitHub Pages auto-deploys to `arnaut.ec` (CNAME configured). Current working branch is `cotizacion`.
