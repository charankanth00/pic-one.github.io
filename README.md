# PICK ONE — Static personality discovery game

## Overview
PICK ONE is a static, client-side interactive personality game. It uses only HTML, CSS, and vanilla JavaScript with LocalStorage for persistence. The experience is designed to feel cinematic and game-like while remaining deterministic and privacy-preserving.

## Structure
- `index.html`, `modes.html`, `game.html`, `result.html`, `profile.html`, `how-it-works.html`
- `css/` — global and page-specific styles
- `js/` — questions, personality logic, game flow, result rendering, profile
- `assets/` — optional images and icons (not required; CSS artwork used)

## How to run
Open `index.html` in a modern browser. No server required.

## Notes
- Questions are randomized per session but scoring is deterministic.
- All data stays in the browser (LocalStorage).
- Accessibility: keyboard navigation, focus states, reduced-motion support.
