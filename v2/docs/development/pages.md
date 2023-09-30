---
title: Pages
slug: pages
description: "Adding a new page :page_facing_up:"
---

New pages should be saved as `page-slug.md` in the appropriate directory
(for example, `/v1.0/docs/page-slug.md`).

# Frontmatter

Every page starts with frontmatter:

```
---
title: "Page Title"
slug: "page-slug"
description: "Page description"
---
```

Standard frontmatter fields:

|Field|Description|
|-----|-----------|
|`title`|Required. Should be written in Title Case.|
|`slug`|Required. Should be written in `kebab-case`.|
|`description`|Optional. Should be written in sentence case. Can include **markdown formatting** and `:emoji:`.|
|`tags`|Optional. Should be written one per line, indented. Eg:  `- Beta`.|

BOM entries can include any of the following additional fields:

|Field|Example    |
|-----|-----------|
|`price`| $10.00
|`quantity`|standard: 3<br>xl: 3
|`specs`|spec-1: 4<br>spec-2: 18<br>spec-3: 6 pin connector
|`internal-specs`|internal-part-name: Motor Housing - Horizontal<br>rev: A<br>vendor: LDO<br>cost: $1.38<br>notes: Pre-assembled
|`cad`|https://cad.onshape.com/documents/1234

# Add to the table of contents

In `_data/toc/v1.0.yml` (where `1.0` is the documentation version), add:

```
- title: Page Title
  url: page-slug
```

to the desired location. The toc page organization should match the
documentation version directory folder structure.

# Add a permalink redirect

If a `doc.farm.bot/docs/page-slug` permalink url is necessary, in `_redirects` add a new `page-slug.md` file with:

```
---
permalink: /docs/page-slug
page_path: /documentation/path/to/page-slug
layout: redirect
---
```

where `/documentation/path/to/` is the path to the `page-slug.md` file
in the `v1.0` (or latest version) directory.


# Adding images

1. Upload the image to the `_images` folder in the same directory as the `page-slug.md` file it will be used in. (Create the `_images` folder if it does not exist.)
0. Link to the image with:

```
![image alt text description](_images/image_filename.png)
```

{%
include callout.html
type="success"
content="Verify that the image appears in the GitHub markdown preview (or when served by `localhost`)."
%}


# What's next?

  * [Tests](tests.md)
