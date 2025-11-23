# Quick Start Guide

## 1. Add Your Profile Photo (Optional)

```bash
static/images/profile.jpg
```

Recommended: 220px width, portrait orientation

## 2. Test Locally

```bash
hugo server -D
```

Open http://localhost:1313 in your browser

## 3. Deploy

```bash
git add .
git commit -m "Launch site"
git push origin main
```

Site will be live in 2-3 minutes!

## Adding Publications

Edit `assets/MyPub.bib` in standard BibTeX format. Hugo automatically parses it during build.

## Adding News Posts

```bash
hugo new content/news/2025-11-my-post.md
```

Edit the file with your content. Use markdown formatting.

## Site Configuration

Edit `hugo.toml` to change:
- Site URL
- Email
- Google Scholar link
- GitHub URL

That's it! See README.md for more details.
