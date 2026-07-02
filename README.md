# Aure d'Arte — Volume I · *Apparitions*

A quiet monograph in four cinematic plates and fifteen editioned prints.
Editorial redesign — dark, museum-grade, art-object-first.

**Live:** [https://bestkry.github.io/aure-d-arte/](https://bestkry.github.io/aure-d-arte/)

---

## About this branch (`fable-redesign`)

A full rebuild from a blank page. The site was previously ≈10,500 lines of single-file HTML that had accrued a decade of features on top of the actual product. This branch strips the site back to what a limited-edition art house should be: a catalogue you read, four plates you sit with, an opening film you enter through, and a way to write for what you want.

The result is one file (`index.html`, ~2,330 lines), zero frameworks, zero build step, and no third-party JS. Deploys to GitHub Pages / Cloudflare Pages as-is.

## Structure (Iteration 2)

0. **Intro Cinema** — full-viewport opening film. Skippable, seen-once via `localStorage`. Gold progress bar, flicker overlay, keyboard-dismissable (Enter / Esc).
1. **Masthead** — publication-style opener. Volume, issue, roman numerals, one word set to full viewport width.
2. **§ I · The Four Plates** — full-viewport cinemagraph plates, each with its own roman index (I–IV), studio label, and a single serif study button.
3. **Marquee of titles** — infinite horizontal scroll of all fifteen work titles in giant italic Cormorant, seamed with gold numerals. A visual breath between the plates and the vestments.
4. **§ II · The Vestments** — six garments in a full-width "look" layout: image left / info right, alternating. Editioned like the plates, mailto correspondence to enquire.
5. **§ III · The Catalogue** — all 15 works as a museum wall-label list. On desktop, hovering a row loads that work into a sticky viewer opposite; on mobile, each row shows its own image.
6. **§ IV · The Atelier** — a four-step process column set on a void panel: Study → Print → Sign → Dispatch. Serif numerals with gold on hover.
7. **§ V · A Note on Provenance** — an editorial about-the-house column set as a two-column drop-cap read.
8. **§ VI · Write to Acquire** — no cart, no checkout. A mailto correspondence flow, per-plate.
9. **Concordia** — an alphabetical index of every plate and every vestment, columnar and dotted; clicking a plate opens its modal.
10. **Colophon** — studio address, correspondence, edition specifics, typographic imprint.

### Bonus — Command bar (⌘ / Ctrl + K)

A site-wide fuzzy search over every plate and every vestment. Italic Cormorant input, roman numerals as identifiers, category as metadata. Selecting a plate opens the modal; selecting a vestment scrolls to § II.

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

- **Opening film** compressed to a 15.7 MB h264 loop (was 103 MB). Auto-dismisses on `ended`, skippable, remembers you across visits.
- **Custom crosshair cursor** with contextual gold labels ("Open", "View", "Send", "Enter", "Wear", "Study") and difference blend for legibility over both light and dark plates.
- **Film grain overlay** using SVG `feTurbulence` with a 6-step displacement animation.
- **Vignette overlay** to focus attention centrally on every viewport.
- **Word-by-word masthead reveal** — "Appari" + italic gold *"tions"* rise from the baseline.
- **Sticky catalogue viewer** — the list is a read; the wall opposite is the gaze. Hover to change what's on the wall.
- **Editorial numerals** — every section, plate, catalogue entry, and vestment is roman-numbered.
- **Drop caps** on provenance, on every modal description, and on every vestment paragraph.
- **Cinematic modal** with per-plate mailto correspondence: subject and body prefilled, ready to send.
- **Alternating look grid** for the vestments — image/info flip every other row, gold-tinted media wash, edition badge floats top-left.
- **Infinite title marquee** — all fifteen work titles cycling in giant italic serif, seamed with gold numerals and hairline separators.
- **Command bar** (⌘ / Ctrl + K) with italic-serif input, live filter, and jump-to-modal on selection.
- **Reduced-motion respected** everywhere — cinemagraphs pause, grain freezes, marquee freezes, intro auto-dismisses, word animation is skipped.

## What was removed

- ≈9,000 lines of legacy CSS/JS
- Fake checkout & cart flow, wishlist, recently-viewed, promo banners, discount codes
- Admin panel (v1–v5), CMS, image upload, drafts, live chat widget, affiliates, bundle builder
- WebGL hero canvas, chromatic-split shader, image-crossfade OGL
- ~~Clothing/hoodie catalogue~~ — restored in Iteration 2 as **§ II · The Vestments**, rebuilt from a museum vantage point (look grid, editioned, mailto enquiries)
- "Build Your Wall" visualizer, scene picker, PNG export
- "In Your Space" testimonials, FAQ section, newsletter
- Language toggle & Polish copy — the volume is issued in one language
- Light-mode theme (the aesthetic is dark)
- Konami easter egg, gold cursor trail, card tilt, rotatable frame
- ~~Intro video, buffering progress bar~~ — restored in Iteration 2 as the opening film (h264/CRF 26, silent, skippable, single-viewing)
- Manifesto page (7 principles) — replaced by a single provenance column
- Legal pages, single-artwork page, 404 page — the site is now short enough not to need them

## What was kept

- The four cinemagraphs (`velvet-abyss`, `crimson-reverie`, `void-architect`, `eternal-revenant`) — now full-viewport plates
- 15 artwork stills and their names, descriptions, prices, editions
- Dark aesthetic + `#c9a96e` warm gold
- Cormorant Garamond × Satoshi type pair
- Vanilla HTML/CSS/JS · deployable to GitHub Pages

## Iteration 2 additions

- `assets/intro/intro.mp4` (15.7 MB) + `assets/intro/intro-poster.jpg` — the opening film, compressed via `ffmpeg -c:v libx264 -crf 26 -preset slow -an -movflags +faststart`.
- `assets/clothing/*.jpg` — six garment images, restored from repo history and rebuilt into a look grid.
- Six new CSS blocks (§ 17–22): intro overlay, marquee titles, vestments/look, atelier, concordia, cmdk.
- Two new nav entries (**Vestments**, **Atelier**), five new section anchors.
- New keyboard-controlled interactions (⌘K to search, Esc to close, Enter to skip intro).

## Setup

No build. Open `index.html` or:

```bash
npx serve .
```

## Colophon

Set in Cormorant Garamond & Satoshi. Deposited & catalogued in Kraków.
© MMXXVI Aure d'Arte. All impressions reserved.
