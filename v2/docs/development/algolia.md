---
title: Algolia
slug: algolia
description: "Updating the documentation search index :mag:"
---

After any pages are added, removed, or modified, the Algolia search index needs to be updated. Run this command from the root directory of the repository once the changes have been merged into `main`:

```
ALGOLIA_API_KEY=12345 bundle exec jekyll algolia
```

# What's next?

  * [Versions](versions.md)
