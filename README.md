# Yuming Zhou's Personal Website

This is a personal academic website built with Hugo, migrated from an HTML template.

## Quick Start

### Prerequisites
- Hugo Extended (v0.120.0 or later)
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/zcorn2017/zcorn2017.github.io.git
   cd zcorn2017.github.io
   ```

2. **Run the Hugo server**
   ```bash
   hugo server -D
   ```

3. **View the site**
   Open your browser and visit: http://localhost:1313

### Building the Site

To build the static site for deployment:
```bash
hugo
```

The site will be generated in the `public/` directory.

## Content Management

### Adding News/Blog Posts

Create a new news item:
```bash
hugo new content/news/your-post-name.md
```

Or manually create a file in `content/news/` with this template:
```markdown
---
title: "Your Post Title"
date: 2025-11-23
link: "https://optional-external-link.com"
---

Your content here...
```

### Updating Publications

**Publications are automatically parsed from your BibTeX file!**

Simply edit `assets/MyPub.bib` and add your publications in standard BibTeX format:

```bibtex
@article{yourCitationKey2025,
  title = {Your Paper Title},
  author = {First Author and Zhou, Yuming and Last Author},
  journal = {Journal Name},
  year = {2025},
  volume = {10},
  number = {2},
  pages = {123--145},
  doi = {10.xxxx/xxxxx},
  url = {https://paper-url.com}
}
```

The system will automatically:
- Parse the BibTeX file during Hugo build
- Extract all publication details
- Highlight your name ("Zhou, Yuming" or variations) in **bold** and <u>underlined</u>
- Display volume, issue, and page information

**No additional dependencies or scripts required!** Hugo handles everything.

### Adding Profile Image

Place your profile photo at:
```
static/images/profile.jpg
```

Recommended size: 220px width, portrait orientation

## Directory Structure

```
.
├── archetypes/          # Content templates
├── assets/             # Source files
│   └── MyPub.bib      # Your BibTeX publications (edit this!)
├── content/            # Site content
│   └── news/          # News and blog posts
├── layouts/            # HTML templates
│   ├── index.html     # Homepage
│   ├── partials/
│   │   └── parse-bibtex.html  # BibTeX parser (auto-runs)
│   └── _default/      # Default layouts
├── static/             # Static files
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   └── images/        # Images
└── hugo.toml          # Site configuration
```

## Configuration

Edit `hugo.toml` to update:
- Site title
- Base URL
- Google Scholar link
- Email address
- GitHub profile

## Deployment

### GitHub Pages

The site is configured for automatic deployment via GitHub Actions:

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy
3. Your site will be live in 2-3 minutes

### Manual Deployment

1. Build the site: `hugo`
2. Upload the contents of `public/` to your web server

## Features

- Clean, academic-focused design
- **Automatic BibTeX parsing** - no manual conversion needed!
- Publications automatically parsed from `assets/MyPub.bib`
- News/blog section with easy content management
- Smooth scrolling navigation
- Responsive Bootstrap layout
- Google Scholar and GitHub integration
- Your name automatically highlighted in publications

## How Publications Work

The site uses a custom Hugo partial (`layouts/partials/parse-bibtex.html`) that:

1. Reads your `assets/MyPub.bib` file during build time
2. Parses BibTeX entries using Hugo's built-in template functions
3. Extracts: title, authors, journal, year, volume, pages, DOI, URL
4. Automatically highlights your name in the author list
5. Generates the publications HTML

**No Python, Ruby, or external dependencies required!** It's pure Hugo.

## License

© 2025 Yuming Zhou. All rights reserved.
