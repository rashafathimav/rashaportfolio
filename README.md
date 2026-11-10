# RASHA.QUEST

An RPG-style portfolio for Rasha Fathima V. Plain HTML, CSS and JavaScript, with no build step.

```
rasha-quest/
├── index.html
├── style.css
├── script.js        ← all content is in the DATA block at the top
└── assets/
    ├── Rasha_Fathima_Resume.pdf   (add this, required)
    └── portrait.jpg               (optional)
```

## Run locally
Double-click `index.html` to open it, or run a small server from this folder:
`python3 -m http.server 8000`, then open http://localhost:8000.

## Deploy to Netlify
1. Go to app.netlify.com, then Add new site, then Deploy manually.
2. Drag the `rasha-quest` folder onto the page. No build command or publish directory is needed.

## Deploy to GitHub Pages
1. Create a repository and upload the contents of this folder so `index.html` sits at the root.
2. Go to Settings, then Pages. Under Source, choose Deploy from a branch, select `main` and `/ (root)`, then Save.
3. Your site will be at `https://<username>.github.io/<repo>/`.

## How it plays
After the opening scene, the visitor scrolls down through the seven places. The character walks along the path as they scroll, and the side markers jump to any place.

## Placeholders to replace (search script.js for "EDIT ME")
- `assets/Rasha_Fathima_Resume.pdf`: add the real PDF.
- GitHub URL: confirm the username `rashafathimav` before publishing.
- About: the "creative personality" line and the career objective.
- Experience (Cognilearn): the technical tasks and the skills gained.
- Portrait (optional): set `portrait: "assets/portrait.jpg"`.
