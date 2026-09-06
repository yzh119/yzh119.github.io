---
title: "Hello, World"
date: 2025-09-06T12:00:00+08:00
tags: ["meta"]
---

Welcome to my minimalist blog, powered by [Hugo](https://gohugo.io) and
GitHub Pages.

## Writing a new post

Create a file with `hugo new content posts/my-post.md`, or add a Markdown file
to `content/posts/` with front matter:

```yaml
---
title: "My Post Title"
date: 2025-09-06T12:00:00+08:00
tags: ["example"]
---
```

Then write your content in Markdown. Code blocks are highlighted:

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"
```

That's it. Push to `main` and GitHub Actions builds and deploys automatically.
