# yzh119.github.io

A minimalist blog built with [Jekyll](https://jekyllrb.com) and hosted on GitHub Pages.

## Write a post

Add a Markdown file to `_posts/` named `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "My Post"
date: 2025-09-06 12:00:00 +0800
---

Your content here.
```

Push to `main` — GitHub Pages builds and deploys automatically.

## Local preview (optional)

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

## Structure

```
_config.yml        site config
_layouts/          page templates (default, post)
_posts/            blog posts (Markdown)
assets/css/        styles
index.html         post list (home)
about.md           about page
```
