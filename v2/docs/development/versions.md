---
title: Versions
slug: versions
description: "Adding a new version :books:"
---

# Step 1

Copy the latest version documentation directory:

> `/v1.0/` -> `/v1.1/`

# Step 2

Copy the latest version data files when applicable:

> `/_data/toc/v1.0.yml` -> `/_data/toc/v1.1.yml`
> `/_data/section_images/v1.0.yml` -> `/_data/section_images/v1.1.yml`
> `/_data/cad/v1.0.yml` -> `/_data/cad/v1.1.yml`

# Step 3

Change the `version_number` in the new data files:

> `version_number: 1.0` -> `version_number: 1.1`

# Step 4

If necessary, change any version-specific titles and urls in the new toc file:

> `home: FarmBot-Model-v1.0/intro` -> `home: FarmBot-Model-v1.1/intro`
> `title: FarmBot Model V1.0` -> `title: FarmBot Model V1.1`
> `url: FarmBot-Model-v1.0` -> `url: FarmBot-Model-v1.1`

# Step 5

If necessary, change any version-specific folder names within `/v1.1`. Pay attention to case:

> `FarmBot-Model-v1.0` -> `FarmBot-Model-v1.1`

# Step 6

If necessary, change any version-specific titles and URLs in documentation content files:

> Within the `/v1.1` folder, find and replace `/FarmBot-Model-v1.0/` -> `/FarmBot-Model-v1.1/`
> Search for `v1.0` within the `/v1.1` folder and edit content appropriately.

# Step 7

Change the `redirect_from` value for the home page in the
new documentation version folder. (The home page path can be found at
the top of the table of contents data file in the `home` field.)

> `redirect_from: /docs/v1.0/` to `redirect_from: /docs/v1.1/`

# Step 8

When ready to publish the new version, update `latest_version_number` in `/_config.yml`:

> `latest_version_number: 1.0` -> `latest_version_number: 1.1`

`latest_version_number` specifies the documentation version for:
 * The default documentation home page
 * Permalink redirects
 * The latest documentation available in the version picker

{%
include callout.html
type="info"
content="Until `latest_version_number` is updated with the latest documentation version, pages in newer versions (if a newer version exists) are only accessible via URL."
%}
