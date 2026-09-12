# yzh119.github.io

A minimalist blog built with [Hugo](https://gohugo.io) and hosted on GitHub Pages.

## Write a post

```bash
hugo new content posts/my-post.md
```

Or add a Markdown file to `content/posts/` with front matter:

```markdown
---
title: "My Post"
date: 2025-09-06T12:00:00+08:00
tags: ["example"]
---

Your content here.
```

Push to `main` — GitHub Actions builds and deploys automatically.

## Local preview

```bash
hugo server             # published site only; archived resource notes remain hidden
hugo server -D          # review archived drafts only
```

## Structure

```
hugo.toml              site config
layouts/               templates (baseof, index, list, single)
content/posts/         blog posts (Markdown)
content/about.md       about page
static/css/            styles
.github/workflows/     GitHub Actions deploy
```

## First-time setup on GitHub

Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
