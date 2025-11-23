# Instructions for Managing Your Hugo Academic Website

## Getting Started

Your website has been successfully migrated to Hugo! Here's everything you need to know.

## Adding Your Profile Photo

1. Find or take a professional photo (portrait orientation recommended)
2. Resize it to approximately 220px width
3. Save it as: `static/images/profile.jpg`

If you don't have a photo yet, you can use a placeholder or leave it empty for now.

## Creating News Posts

### Method 1: Using Hugo Command (Recommended)

```bash
hugo new content/news/my-news-title.md
```

This will create a new file with the proper template already filled in.

### Method 2: Manual Creation

Create a new file in `content/news/` folder with this format:

```markdown
---
title: "My News Title"
date: 2025-11-23
link: "https://optional-link.com"  # Optional - remove if not needed
---

Write your news content here. You can use **markdown** formatting:

- Bullet points
- **Bold text**
- *Italic text*
- [Links](https://example.com)

Add as much detail as you want!
```

### Example News Post

File: `content/news/2025-new-paper.md`

```markdown
---
title: "New paper accepted at Nature Communications"
date: 2025-11-23
link: "https://doi.org/10.1038/xxxxx"
---

Excited to announce that our paper on drug-target interaction prediction
has been accepted for publication in Nature Communications!

This work represents 2 years of research and collaboration with an
amazing team.
```

## Updating Publications

**Publications are automatically parsed from your BibTeX file!**

Edit the file: `assets/MyPub.bib`

### Adding a New Publication

Add your publication in standard BibTeX format:

```bibtex
@article{yourCitationKey2025,
  title = {Your Paper Title Goes Here},
  author = {First Author and Second Author and Zhou, Yuming and Last Author},
  journal = {Journal Name or Conference},
  year = {2025},
  volume = {10},
  number = {2},
  pages = {123--145},
  doi = {10.xxxx/xxxxx},
  url = {https://paper-url.com},
  abstract = {Optional abstract text...}
}
```

### Supported BibTeX Entry Types:
- `@article` - Journal articles
- `@online` - Online publications/preprints

### Supported Fields:
- `title` - Paper title (required)
- `author` - Authors separated by "and" (required)
- `journal` or `journaltitle` - Publication venue (required)
- `year` or `date` - Publication year (required)
- `volume` - Volume number (optional)
- `number` - Issue number (optional)
- `pages` - Page range (optional)
- `doi` - Digital Object Identifier (optional)
- `url` - Paper URL (optional)
- `abstract` - Abstract (optional, not displayed)

### Important Notes:
- Your name will be automatically highlighted in **bold** and <u>underlined</u>
- Hugo parses the BibTeX file automatically during build - no scripts needed!
- Use standard BibTeX format - the same file you use for LaTeX
- Authors should be separated by " and " in BibTeX format

## Updating Your Information

### Personal Details

Edit `hugo.toml`:

```toml
[params]
  author = "Your Name"
  description = "Your Title/Position"
  googleScholar = "Your Google Scholar URL"
  email = "your.email@example.com"
  github = "Your GitHub URL"
```

### Bio and Research Interests

Edit the homepage layout if needed: `layouts/index.html`

Look for these sections:
- Research Interests (around line 30)
- Biography paragraph (around line 40)

## Building and Testing

### Test Locally

```bash
hugo server -D
```

Then open http://localhost:1313 in your browser

### Build for Production

```bash
hugo
```

This creates the site in the `public/` folder

## Deployment

### Option 1: GitHub Pages (Automated)

The site is already configured for automatic deployment! Just:

1. Push your changes to GitHub
2. Wait a few minutes
3. Your site will be live at your GitHub Pages URL

### Option 2: Manual Deployment

1. Run `hugo` to build the site
2. Upload everything in the `public/` folder to your web server
3. Point your domain (about.zcorn.cn) to the server

## Common Tasks

### Change Site Colors

Edit `static/css/jumbotron.css` and modify colors in the CSS

### Add a New Section

1. Create new content in `content/` folder
2. Add navigation link in `layouts/index.html`
3. Style as needed in CSS

### Update Honors/Awards

Edit `layouts/index.html` and find the "Selected Honors" section (around line 100)

## Need Help?

- Hugo Documentation: https://gohugo.io/documentation/
- Markdown Guide: https://www.markdownguide.org/
- Bootstrap Documentation: https://getbootstrap.com/docs/4.0/

## Tips

1. **Always test locally** before pushing to production
2. **Backup your content** - especially the `data/` and `content/` folders
3. **Use descriptive file names** for news posts (e.g., `2025-11-23-conference-talk.md`)
4. **Keep publications chronological** - newest first in the YAML file
5. **Commit often** - push changes to Git frequently

## File Organization

```
Your most important files:
├── assets/MyPub.bib                ← Update publications here (BibTeX)
├── content/news/                   ← Add news posts here
├── static/images/profile.jpg       ← Your photo goes here
├── hugo.toml                       ← Site configuration
├── layouts/index.html              ← Homepage content
└── layouts/partials/parse-bibtex.html  ← BibTeX parser (auto-runs)
```

Good luck with your new website! 🚀

