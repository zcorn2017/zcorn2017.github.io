# Yuming Zhou's Academic Website

Hugo-based personal academic website with automatic BibTeX publication parsing.

## Quick Start

```bash
# Test locally
hugo server -D

# Build for production
hugo
```

## Adding Content

### Publications

Edit `assets/MyPub.bib` in standard BibTeX format:

```bibtex
@article{yourkey2025,
  title = {Your Paper Title},
  author = {First Author and Zhou, Yuming and Last Author},
  journal = {Journal Name},
  year = {2025},
  volume = {10},
  pages = {1--10},
  doi = {10.xxxx/xxxxx},
  url = {https://paper-url.com}
}
```

Your name will be automatically highlighted. Hugo parses the BibTeX file during build - no scripts or dependencies needed.

### News Posts

```bash
hugo new content/news/2025-11-post-title.md
```

Or manually create in `content/news/`:

```markdown
---
title: "Your Post Title"
date: 2025-11-23
link: "https://optional-external-link.com"
---

Your content here...
```

### Profile Photo

Place your photo at: `static/images/profile.jpg` (recommended: 220px width)

## Configuration

Edit `hugo.toml` to update site settings, email, Google Scholar link, etc.

## Deployment

GitHub Actions automatically deploys on push to main. Just commit and push:

```bash
git add .
git commit -m "Update site"
git push origin main
```

Site will be live in 2-3 minutes at your GitHub Pages URL.

## Features

- Automatic BibTeX parsing (no dependencies)
- Name auto-highlighting in publications
- Responsive Bootstrap design
- News/blog system with markdown
- Auto-deployment via GitHub Actions

## License

© 2025 Yuming Zhou. All rights reserved.
