# ishaanpuri23.com — static site

A clean, static recreation of the personal "About Me" site that was previously hosted on Wix, now built for **GitHub Pages** and editable in VS Code.

## Structure
```
index.html        — the entire single-page site
styles.css        — all styling (CSS variables at the top)
assets/img/       — all images (downloaded originals from the old Wix site)
DNS-MIGRATION.md  — how to point ishaanpuri23.com at this site (do this last)
```

## Run locally
Any static server works, e.g.:
```
python3 -m http.server 8731
```
then open http://localhost:8731

## Deploy
Pushed to GitHub and served via GitHub Pages from the `main` branch (root).
Preview URL: **https://puriishaan.github.io/ishaanpuri23/**

The custom domain (ishaanpuri23.com) is **still on Wix** for now — see `DNS-MIGRATION.md`
for the cutover steps when you're ready.

## Notes
- Fonts: **Libre Caslon Display** (hero) + **Inter** (everything else), loaded from Google Fonts.
  The original used Adobe Caslon (a licensed Wix font); Libre Caslon Display is the closest free match.
- Images are the full-resolution originals — several were shown blurred on the live Wix site
  because of a lazy-loading bug, so this copy is actually sharper.
- Footer year reads "© 2035" to match the original (a Wix template default); change as you like.
