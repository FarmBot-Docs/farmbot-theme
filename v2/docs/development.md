---
title: Documentation Development
slug: development
description: "How to work on the docs :wrench:"
---

# Install

Install one of the documentation hubs from [github.com/FarmBot-Docs](https://github.com/FarmBot-Docs):

1. `git clone https://github.com/FarmBot-Docs/farmbot-docs`
0. `cd farmbot-docs`
0. [Install ruby](https://www.ruby-lang.org/en/documentation/installation/) (check installation with `ruby -v`)
0. `gem install bundler`
0. `bundle install`

# Serve

1. `bundle exec jekyll serve`
0. Open [http://localhost:4000/](http://localhost:4000/) in a browser

# Edit

Saving any changes will automatically trigger a rebuild.

{%
include callout.html
type="info"
content="Changes to `_config.yml` require re-running `bundle exec jekyll serve`."
%}

# Modifying the theme

The common documentation theme (assets/css, layouts, includes) can be modified in the [farmbot-theme](https://github.com/FarmBot-Docs/farmbot-theme) repository.


# What's next?

  * [Pages](development/pages.md)
  * [Tests](development/tests.md)
  * [Algolia](development/algolia.md)
  * [Versions](development/versions.md)
