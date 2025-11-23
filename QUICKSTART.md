# Quick Start Guide

## Immediate Next Steps

### 1. Add Your Profile Photo (5 minutes)
```bash
# Place your photo in this location:
static/images/profile.jpg
```
- Recommended size: 220px width
- Format: JPG or PNG
- Portrait orientation

### 2. Test the Site (2 minutes)
```bash
hugo server -D
```
Then open http://localhost:1313 in your browser

### 3. Review Your Information
All your information has been populated from your existing data:
- ✅ Name: Yuming Zhou
- ✅ Email: yumingz5@illinois.edu
- ✅ Google Scholar: https://scholar.google.com/citations?hl=en&user=_S7iDL8AAAAJ
- ✅ Publications: Parsed from MyPub.bib (3 papers)
- ✅ Research interests and bio
- ✅ Honors and awards

### 4. Deploy to GitHub Pages (5 minutes)

The site is already configured for automatic deployment!

**Steps:**
1. Add and commit all files:
   ```bash
   git add .
   git commit -m "Migrate to Hugo"
   ```

2. Push to GitHub:
   ```bash
   git push origin main
   ```

3. Enable GitHub Pages:
   - Go to your repo on GitHub: https://github.com/zcorn2017/zcorn2017.github.io
   - Settings → Pages
   - Source: GitHub Actions
   - Wait 2-3 minutes for deployment

4. Configure custom domain (if needed):
   - In Settings → Pages → Custom domain
   - Enter: about.zcorn.cn
   - Update your DNS settings to point to GitHub Pages

## What's Been Created

### Your Site Structure
```
✅ Homepage (index.html) - with all your info
✅ Publications section - auto-generated from MyPub.bib
✅ News section - with example posts
✅ Blog post template - ready for new content
✅ GitHub Actions - for automatic deployment
✅ Responsive design - works on mobile/tablet/desktop
```

### Files You'll Edit Most Often
1. `assets/MyPub.bib` - Add/update publications (BibTeX format)
2. `content/news/*.md` - Create news posts
3. `static/images/profile.jpg` - Your photo
4. `hugo.toml` - Site configuration

## Creating Your First News Post

```bash
hugo new content/news/2025-11-my-first-post.md
```

Or create a file manually in `content/news/`:
```markdown
---
title: "My First Post"
date: 2025-11-23
---

Hello world! This is my first blog post.
```

## Common Commands

```bash
# Start development server
hugo server -D

# Build for production
hugo

# Create new news post
hugo new content/news/my-post.md

# Check Hugo version
hugo version
```

## Need Help?

- See `INSTRUCTIONS.md` for detailed guide
- See `README.md` for technical details
- Hugo docs: https://gohugo.io/documentation/

## What's Different from the Original HTML?

### Improvements ✨
- ✅ Easier to maintain (no need to edit HTML)
- ✅ Automatic deployment with GitHub Actions
- ✅ Blog/news system with markdown
- ✅ Publications managed in YAML (cleaner than HTML)
- ✅ Version control friendly
- ✅ Faster to add new content
- ✅ Easier to update information

### Same Look & Feel 👍
- ✅ Same Bootstrap design
- ✅ Same smooth scrolling
- ✅ Same navigation
- ✅ Same layout and colors

## Your Publications (Parsed)

The following publications from MyPub.bib are now in your site:

1. **SCOPE-DTI** (2025) - arXiv preprint
2. **In Silico Research of Coagulation...** (2025) - Translational Andrology and Urology
3. **miRStart 2.0** (2025) - Nucleic Acids Research

Your name (Zhou, Yuming) is automatically highlighted in **bold and underlined**.

## Current News Posts

4 example news posts have been created:
- PhD start at UIUC
- SCOPE-DTI preprint
- miRStart 2.0 publication
- iGEM Gold Medal

Feel free to edit or delete these examples!

## Site URL

Once deployed, your site will be available at:
- GitHub Pages: `https://zcorn2017.github.io/`
- Custom domain: `https://about.zcorn.cn` (after DNS configuration)

---

**Ready to go live?** Just run these commands:

```bash
# Add profile photo first (optional but recommended)
# Then commit and push:
git add .
git commit -m "Launch Hugo site"
git push origin main
```

Your site will be live in 2-3 minutes! 🚀

