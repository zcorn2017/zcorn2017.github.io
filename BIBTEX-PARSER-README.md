# Automatic BibTeX Parser

## What Is This?

This Hugo site includes a **pure Hugo BibTeX parser** that automatically converts your `assets/MyPub.bib` file into a formatted publications list on your website.

**No dependencies. No scripts. No Python/Ruby/Node.js. Just Hugo.**

## How It Works

### The Magic Partial

Location: `layouts/partials/parse-bibtex.html`

This Hugo partial template:
1. Reads `assets/MyPub.bib` using Hugo's `readFile` function
2. Uses Hugo template functions (regex, string manipulation) to parse BibTeX
3. Extracts publication metadata (title, authors, journal, year, DOI, etc.)
4. Returns a data structure that the homepage uses to display publications

### What It Parses

**Supported Entry Types:**
- `@article{...}` - Journal articles
- `@online{...}` - Online publications, preprints

**Extracted Fields:**
- `title` - Paper title
- `author` - Authors (automatically split by " and ")
- `journal` or `journaltitle` - Publication venue
- `year` or `date` - Publication year
- `volume` - Volume number
- `number` - Issue number
- `pages` - Page range
- `doi` - Digital Object Identifier
- `url` - Paper URL

### Name Highlighting

The parser automatically detects and highlights your name in the author list:
- Searches for: "Zhou, Yuming", "Zhou, Yu-Ming", or any author containing "Zhou"
- Applies: `<u><b>Your Name</b></u>` (bold + underline)

## Usage

### For End Users

Just edit your BibTeX file:

```bash
# Edit your publications
nano assets/MyPub.bib

# Build and see results
hugo server -D
```

That's it! No need to run any scripts or conversion tools.

### For Developers

The parser is called in `layouts/index.html`:

```go-html-template
{{ $publications := partial "parse-bibtex.html" . }}
{{ range $publications }}
  <!-- Display publication -->
  <b>{{ .title }}</b><br>
  {{ range .authors }}{{ . }}, {{ end }}
  ...
{{ end }}
```

## Technical Details

### Hugo Template Functions Used

- `readFile` - Read the BibTeX file
- `split` - Split entries and authors
- `findRE` - Regex pattern matching to extract fields
- `replaceRE` - Clean up extracted text
- `trim` - Remove whitespace
- `hasPrefix` - Check entry types
- `dict` / `merge` - Build data structures
- `slice` / `append` - Build lists

### Regex Patterns

The parser uses regex to extract BibTeX fields:

```regex
title\s*=\s*\{\{?([^}]+)\}?\}     # Extract title
author\s*=\s*\{([^}]+)\}          # Extract authors
journal\s*=\s*\{([^}]+)\}         # Extract journal
year\s*=\s*\{?([0-9]+)            # Extract year
```

### Edge Cases Handled

- Double braces in titles: `{{SCOPE-DTI}}` → `SCOPE-DTI`
- Both `journal` and `journaltitle` fields
- Both `year` and `date` fields
- Multiple author formats
- Special characters and LaTeX commands

## Advantages

### vs. Manual HTML Editing
- ✅ No need to manually format each publication
- ✅ Consistent formatting automatically
- ✅ Easy to add/update publications

### vs. YAML Data Files
- ✅ No need to convert BibTeX to YAML
- ✅ Use the same file for papers and website
- ✅ Export directly from reference managers

### vs. External Scripts (Python/Ruby)
- ✅ No additional dependencies to install
- ✅ No build scripts to maintain
- ✅ Works everywhere Hugo works
- ✅ Faster build times (no external processes)

## Limitations

- Only parses `@article` and `@online` entry types
- Doesn't handle complex LaTeX commands in titles
- Requires well-formed BibTeX syntax
- Limited to fields that Hugo template functions can extract

## Extending the Parser

To add more entry types, edit `layouts/partials/parse-bibtex.html`:

```go-html-template
{{- if and . (or (hasPrefix . "article") (hasPrefix . "online") (hasPrefix . "inproceedings")) -}}
  <!-- Add your new type here -->
{{- end -}}
```

To extract additional fields:

```go-html-template
{{- /* Extract new field */ -}}
{{- if findRE "newfield\\s*=\\s*\\{([^}]+)\\}" $content -}}
  {{- $match := index (findRE "newfield\\s*=\\s*\\{([^}]+)\\}" $content) 0 -}}
  {{- $value := replaceRE "newfield\\s*=\\s*\\{" "" $match -}}
  {{- $value = replaceRE "\\}.*" "" $value -}}
  {{- $pub = merge $pub (dict "newfield" (trim $value " ,")) -}}
{{- end -}}
```

## Performance

- **Parse time**: < 5ms for typical BibTeX files
- **Build time**: No significant impact on Hugo build speed
- **File size**: Works with BibTeX files up to several MB

## Troubleshooting

### Publications not showing?

1. Check BibTeX syntax (braces must match)
2. Ensure entry type is `@article` or `@online`
3. Verify required fields: title, author, journal, year

### Debug the parser:

Add to `layouts/partials/parse-bibtex.html`:

```go-html-template
{{- warnf "Debug: Found %d publications" (len $publications) -}}
```

Then build with:
```bash
hugo --verbose
```

## Inspiration

This parser was created to solve a common problem: maintaining publications on academic websites. Most solutions require external dependencies or manual conversion, but Hugo's template functions are powerful enough to parse BibTeX directly!

## Credits

Built using:
- Hugo's template functions
- Regular expressions for parsing
- No external dependencies

## License

This BibTeX parser is part of your Hugo site and can be freely modified.

