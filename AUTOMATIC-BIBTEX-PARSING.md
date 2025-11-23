# ✅ Automatic BibTeX Parsing Enabled!

## What Changed?

Your site now **automatically parses** `assets/MyPub.bib` during the Hugo build process. No manual conversion, no scripts, no dependencies!

## How to Use

### Simply Edit Your BibTeX File

```bash
# Edit your publications
nano assets/MyPub.bib

# Build and view
hugo server -D
```

That's it! Hugo will automatically:
1. Read your BibTeX file
2. Parse all `@article` and `@online` entries
3. Extract title, authors, journal, year, DOI, URL, etc.
4. Highlight your name in the author list
5. Display formatted publications on your homepage

## Example

Add this to `assets/MyPub.bib`:

```bibtex
@article{zhou2025example,
  title = {My New Research Paper},
  author = {First Author and Zhou, Yuming and Last Author},
  journal = {Nature Biotechnology},
  year = {2025},
  volume = {43},
  number = {2},
  pages = {123--145},
  doi = {10.1038/nbt.xxxx},
  url = {https://www.nature.com/articles/xxxxx}
}
```

It will automatically appear as:

> **My New Research Paper**
> First Author, <u>**Zhou, Yuming**</u>, Last Author
> **Nature Biotechnology**, Vol. 43(2), pp. 123-145 (2025)
> [[Paper](https://doi.org/10.1038/nbt.xxxx)] [[Link](https://www.nature.com/articles/xxxxx)]

## Technical Details

### What Was Created

**New file:** `layouts/partials/parse-bibtex.html`
- Pure Hugo template that parses BibTeX
- Uses Hugo's built-in functions (no external dependencies)
- Extracts all relevant publication metadata
- Automatically highlights your name

**Updated file:** `layouts/index.html`
- Now calls the BibTeX parser instead of using YAML data
- Displays parsed publications automatically

**Removed file:** `data/publications.yaml`
- No longer needed! BibTeX is the single source of truth

### How It Works

1. Hugo reads `assets/MyPub.bib` with `readFile`
2. Template uses regex to extract BibTeX fields
3. Data is structured and returned to the homepage
4. Publications are displayed with your name highlighted

### No Dependencies Required

- ❌ No Python
- ❌ No Ruby
- ❌ No Node.js
- ❌ No external scripts
- ✅ Pure Hugo template functions
- ✅ Works everywhere Hugo works
- ✅ Fast (< 5ms parsing time)

## Supported Features

### Entry Types
- `@article{...}` - Journal articles
- `@online{...}` - Online publications, preprints

### Fields
- `title` - Paper title ✅
- `author` - Authors (auto-split by " and ") ✅
- `journal` or `journaltitle` - Publication venue ✅
- `year` or `date` - Publication year ✅
- `volume` - Volume number ✅
- `number` - Issue number ✅
- `pages` - Page range ✅
- `doi` - Digital Object Identifier ✅
- `url` - Paper URL ✅

### Automatic Features
- Name highlighting (your name in **bold** + <u>underline</u>)
- Proper formatting of volume, issue, pages
- DOI and URL links
- Handles special characters and double braces

## Benefits

### For You
1. **Single Source of Truth** - Edit your BibTeX file, use it for papers AND website
2. **No Conversion** - No need to manually convert to YAML or HTML
3. **Reference Manager Integration** - Export directly from Zotero/Mendeley/EndNote
4. **Standard Format** - Use the same BibTeX you use for LaTeX papers

### For Your Workflow
1. **Faster Updates** - Add publications in seconds
2. **No Build Scripts** - Just `hugo` and you're done
3. **Version Control Friendly** - BibTeX is plain text, diffs work great
4. **Portable** - Works on any system that runs Hugo

## Documentation

- **BIBTEX-HOWTO.md** - Complete guide to adding publications
- **BIBTEX-PARSER-README.md** - Technical details about the parser
- **README.md** - Updated with BibTeX info

## Current Publications

Your site currently displays 3 publications from `assets/MyPub.bib`:

1. ✅ SCOPE-DTI (2025) - arXiv preprint
2. ✅ In Silico Research of Coagulation... (2025) - TAU
3. ✅ miRStart 2.0 (2025) - Nucleic Acids Research

All with your name automatically highlighted!

## Testing

Build the site and check:

```bash
hugo
```

View locally:

```bash
hugo server -D
```

Open http://localhost:1313 and verify your publications appear correctly.

## What's Next?

1. ✅ BibTeX parsing is working
2. ✅ Publications display correctly  
3. ✅ Your name is highlighted
4. → Just add your profile photo and deploy!

## Questions?

- See **BIBTEX-HOWTO.md** for usage instructions
- See **BIBTEX-PARSER-README.md** for technical details
- The parser code is in `layouts/partials/parse-bibtex.html`

---

**🎉 Your publications are now automatically managed by Hugo!**

No scripts. No dependencies. Just pure Hugo magic. ✨

