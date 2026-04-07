# Portfolio (Resume-based)

This is a simple, modern, single-page portfolio generated from your resume screenshot.

## Run locally (Windows)

- Open `portfolio/index.html` in your browser.

Or run a tiny local server (recommended for best behavior):

```powershell
cd C:\Users\resQ\portfolio
python -m http.server 5173
```

Then open `http://localhost:5173`.

## Deploy on Render (Static Site)

1. Push this folder to a GitHub repository (same steps as GitHub Pages push).
2. Render dashboard → **New** → **Static Site**
3. Connect your GitHub repo and select the repo.
4. Render will auto-detect `render.yaml`.
   - **Build Command**: (blank)
   - **Publish Directory**: `.`
5. Click **Create Static Site**.

Deploy button (uses this repo URL after pushing):

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/manasi459/portfolio)

## What to update

- `index.html` → replace the placeholders in **Contact** (email/phone/LinkedIn/GitHub).
- `index.html` → in **Projects**, add your real project links (GitHub + live demos).
- Optional: Add your `resume.pdf` into this folder and add a “Download Resume” button.
<br>



Author-Manasi Singh