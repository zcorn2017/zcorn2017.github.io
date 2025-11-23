# How to Add Publications (BibTeX)

## Overview

Your publications are **automatically parsed** from `assets/MyPub.bib` during the Hugo build process. No manual conversion, no scripts, no dependencies - just edit your BibTeX file!

## Adding a New Publication

### Step 1: Open Your BibTeX File

Edit: `assets/MyPub.bib`

### Step 2: Add Your Publication

Add a new entry in standard BibTeX format:

```bibtex
@article{chen2025mywork,
  title = {My Amazing Research Paper},
  author = {Chen, First and Zhang, Second and Zhou, Yuming and Wang, Last},
  journal = {Nature Communications},
  year = {2025},
  volume = {16},
  number = {3},
  pages = {1--15},
  doi = {10.1038/s41467-025-xxxxx},
  url = {https://www.nature.com/articles/xxxxx}
}
```

### Step 3: Build and See Results

```bash
hugo server -D
```

That's it! Your publication will automatically appear on the site with your name highlighted.

## Supported BibTeX Types

### Journal Articles

```bibtex
@article{citationkey2025,
  title = {Paper Title},
  author = {Author One and Zhou, Yuming and Author Three},
  journal = {Journal Name},
  journaltitle = {Alternative Journal Field},  % Will use if 'journal' not present
  year = {2025},
  volume = {10},
  number = {2},
  pages = {123--145},
  doi = {10.xxxx/xxxxx},
  url = {https://paper-url.com}
}
```

### Online Publications / Preprints

```bibtex
@online{citationkey2025,
  title = {Preprint Title},
  author = {Author One and Zhou, Yuming},
  date = {2025-03-15},  % Will extract year
  year = {2025},        % Or use year directly
  doi = {10.48550/arXiv.2503.xxxxx},
  url = {https://arxiv.org/abs/2503.xxxxx}
}
```

## Field Reference

### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| `title` | Paper title | `{My Research Paper}` |
| `author` | Authors (separated by "and") | `{First Author and Zhou, Yuming}` |
| `journal` or `journaltitle` | Publication venue | `{Nature}` |
| `year` or `date` | Publication year | `{2025}` or `{2025-03-15}` |

### Optional Fields

| Field | Description | Example | Displayed As |
|-------|-------------|---------|--------------|
| `volume` | Volume number | `{10}` | "Vol. 10" |
| `number` | Issue number | `{2}` | "(2)" |
| `pages` | Page range | `{123--145}` | "pp. 123-145" |
| `doi` | DOI | `{10.xxxx/xxxxx}` | Link with [Paper] |
| `url` | URL | `{https://...}` | Link with [Link] |

## Name Highlighting

Your name will be automatically highlighted if it appears as:
- `Zhou, Yuming`
- `Zhou, Yu-Ming`
- Or any entry containing "Zhou"

The system will make your name **bold** and <u>underlined</u>.

## Author Format

Authors must be separated by " and " (with spaces):

✅ **Correct:**
```bibtex
author = {Smith, John and Zhou, Yuming and Doe, Jane}
```

❌ **Incorrect:**
```bibtex
author = {Smith, John, Zhou, Yuming, Doe, Jane}  % Wrong separator
```

## Page Ranges

Use double dash `--` for page ranges in BibTeX:

✅ **Correct:**
```bibtex
pages = {123--145}
```

❌ **Incorrect:**
```bibtex
pages = {123-145}  % Will work but not standard BibTeX
```

## Special Characters

BibTeX special characters are preserved:

```bibtex
title = {{SCOPE-DTI}: Semi-Inductive Dataset Construction}  % Double braces preserved
title = {miRStart 2.0: Enhancing miRNA Regulatory Insights}  % Works fine
```

## Example Complete Entry

```bibtex
@article{zhou2025comprehensive,
  title = {A Comprehensive Study of Protein-DNA Interactions Using Deep Learning},
  author = {Zhou, Yuming and Li, Collaborator and Chen, Another and Wang, Senior},
  journal = {Nature Biotechnology},
  year = {2025},
  volume = {43},
  number = {5},
  pages = {567--580},
  doi = {10.1038/nbt.4321},
  url = {https://www.nature.com/articles/nbt4321},
  abstract = {This is the abstract which is not displayed on the site but good to keep}
}
```

This will be displayed as:

> **A Comprehensive Study of Protein-DNA Interactions Using Deep Learning**
> <u>**Zhou, Yuming**</u>, Li, Collaborator, Chen, Another, Wang, Senior
> **Nature Biotechnology**, Vol. 43(5), pp. 567-580 (2025)
> [[Paper](https://doi.org/10.1038/nbt.4321)] [[Link](https://www.nature.com/articles/nbt4321)]

## Tips

1. **Use your existing BibTeX file** - This is the same format used for LaTeX bibliographies
2. **Export from reference managers** - Zotero, Mendeley, EndNote all export to BibTeX
3. **Get BibTeX from Google Scholar** - Click "Cite" → "BibTeX" on any paper
4. **Keep abstracts** - They're not displayed but good for your records
5. **Test locally** - Run `hugo server -D` to preview before pushing

## How It Works

1. Hugo reads `assets/MyPub.bib` during build
2. The `layouts/partials/parse-bibtex.html` partial uses Hugo template functions
3. Regular expressions extract title, authors, journal, year, etc.
4. Publications are automatically formatted and displayed
5. Your name is detected and highlighted

**No Python, Ruby, or external dependencies required!** Pure Hugo magic. ✨

## Troubleshooting

### Publication not showing up?

Check:
- Entry type is `@article` or `@online`
- Has required fields: title, author, journal/journaltitle, year
- BibTeX syntax is valid (matching braces)

### Name not highlighted?

Make sure your name appears as:
- `Zhou, Yuming` (comma between last and first name)
- Or contains "Zhou"

### Test your changes:

```bash
hugo server -D
```

Open http://localhost:1313 and check the Publications section.

## Questions?

The BibTeX parser is in `layouts/partials/parse-bibtex.html` if you want to see how it works or customize it.

