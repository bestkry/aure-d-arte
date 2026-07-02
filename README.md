# Aure d'Arte — Volume I · *Apparitions*

A quiet monograph in four cinematic plates and fifteen editioned prints.
Editorial redesign — dark, museum-grade, art-object-first.

**Live:** [https://bestkry.github.io/aure-d-arte/](https://bestkry.github.io/aure-d-arte/)

---

## About this branch (`fable-redesign`)

A full rebuild from a blank page. The site was previously ≈10,500 lines of single-file HTML that had accrued a decade of features on top of the actual product. This branch strips the site back to what a limited-edition art house should be: a catalogue you read, four plates you sit with, and a way to write for what you want.

The result is one file (`index.html`, ~1,530 lines), zero frameworks, zero build step, and no third-party JS. Deploys to GitHub Pages / Cloudflare Pages as-is.

## Structure

1. **Masthead** — publication-style opener. Volume, issue, roman numerals, one word set to full viewport width.
2. **§ I · The Four Plates** — full-viewport cinemagraph plates, each with its own roman index (I–IV), studio label, and a single serif study button.
3. **§ II · The Catalogue** — all 15 works as a museum wall-label list. On desktop, hovering a row loads that work into a sticky viewer opposite; on mobile, each row shows its own image.
4. **§ III · A Note on Provenance** — an editorial about-the-house column set as a two-column drop-cap read.
5. **§ IV · Write to Acquire** — no cart, no checkout. A mailto correspondence flow, per-plate.
6. **Colophon** — studio address, correspondence, edition specifics, typographic imprint.

## Design system

| Token | Value |
|---|---|
| Paper (page) | `#0a0a09` |
| Void (footer/modal) | `#070706` |
| Ink | `#f2ede1` (paper-warm off-white) |
| Ink dim | `#a29d90` |
| Gold accent | `#c9a96e` |
| Display | Cormorant Garamond, italic-forward |
| Body | Satoshi 300/500 |
| Grid | 12-col responsive; hairline rules; `clamp()`-driven scale |

## Bold moves

- **Custom crosshair cursor** with contextual gold labels ("Open", "View", "Send") and difference blend for legibility over both light and dark plates.
- **Film grain overlay** using SVG `feTurbulence` with a 6-step displacement animation.
- **Vignette overlay** to focus attention centrally on every viewport.
- **Word-by-word masthead reveal** — "Appari" + italic gold *"tions"* rise from the baseline.
- **Sticky catalogue viewer** — the list is a read; the wall opposite is the gaze. Hover to change what's on the wall.
- **Editorial numerals** — every section, plate, and catalogue entry is roman-numbered.
- **Drop caps** on provenance and every modal description.
- **Cinematic modal** with per-plate mailto correspondence: subject and body prefilled, ready to send.
- **Reduced-motion respected** everywhere — cinemagraphs pause, grain freezes, word animation is skipped.

## What was removed

- ≈9,000 lines of legacy CSS/JS
- Fake checkout & cart flow, wishlist, recently-viewed, promo banners, discount codes
- Admin panel (v1–v5), CMS, image upload, drafts, live chat widget, affiliates, bundle builder
- WebGL hero canvas, chromatic-split shader, image-crossfade OGL
- Clothing/hoodie catalogue (6 items) — Aure d'Arte is an art house, not a merch line
- "Build Your Wall" visualizer, scene picker, PNG export
- "In Your Space" testimonials, FAQ section, newsletter
- Language toggle & Polish copy — the volume is issued in one language
- Light-mode theme (the aesthetic is dark)
- Konami easter egg, gold cursor trail, card tilt, rotatable frame
- Intro video, buffering progress bar, volume slider
- Manifesto page (7 principles) — replaced by a single provenance column
- Legal pages, single-artwork page, 404 page — the site is now short enough not to need them

## What was kept

- The four cinemagraphs (`velvet-abyss`, `crimson-reverie`, `void-architect`, `eternal-revenant`) — now full-viewport plates
- 15 artwork stills and their names, descriptions, prices, editions
- Dark aesthetic + `#c9a96e` warm gold
- Cormorant Garamond × Satoshi type pair
- Vanilla HTML/CSS/JS · deployable to GitHub Pages

## Setup

No build. Open `index.html` or:

```bash
npx serve .
```

## Colophon

Set in Cormorant Garamond & Satoshi. Deposited & catalogued in Kraków.
© MMXXVI Aure d'Arte. All impressions reserved.
