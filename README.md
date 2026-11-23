# Happy 19th, Keshav

A three-page static website recovered from the supplied QODER project files. This repository preserves the supplied HTML, CSS, JavaScript, wording, and available photographs without redesigning the site.

## Pages

- `index.html` — birthday home
- `gpt.html` — Lakshita GPT
- `temple.html` — Vrindavan · Radha Raman

## Project structure

```text
keshav-19/
├── index.html
├── gpt.html
├── temple.html
├── css/
│   ├── styles.css
│   ├── gpt.css
│   └── temple.css
├── js/
│   ├── config.js
│   ├── main.js
│   ├── gpt.js
│   └── temple.js
├── assets/photos/
│   └── supplied JPG photographs
└── source-backup/
    └── original-qoder-export.html
```

## Important: missing original photographs

The supplied source references these files, but they were not included in the uploaded project assets:

- `assets/photos/photo-1.jpg`
- `assets/photos/photo-2.jpg`
- `assets/photos/temple-entry.jpg`
- `assets/photos/train.jpg`

Those images have deliberately not been fabricated or silently substituted. Add the original files with these exact names to restore those image locations. The README supplied with the source mentioned twelve generated photographs, but only nine JPG files were present in the upload.

## Before publishing

1. Open `js/config.js` and replace `PASTE-YOUR-GOOGLE-DRIVE-LINK-HERE` with the intended share link. This is still the original placeholder from the supplied source.
2. Add the four missing photographs listed above, if available.
3. Test all three pages locally.

## Deploy on GitHub Pages (free)

1. Create a new GitHub repository, for example `keshav-19`.
2. Upload the **contents** of this folder so `index.html` is at the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. GitHub Pages will publish the site at `https://YOUR-USERNAME.github.io/keshav-19/` after deployment completes.

No build step or framework is required. This is a static HTML/CSS/JavaScript website.

## Notes

- The original source export is retained in `source-backup/` for reference; it is not used as the live homepage.
- Google Fonts are loaded from Google Fonts, so typography requires an internet connection.
- The personal text and conversations are held in `js/config.js` as in the supplied project.
