---
title: FarmBot Theme
slug: intro
description: "Example FarmBot documentation for infrastructure development purposes :wrench:"
---

* toc
{:toc}


{%
include callout.html
type="info"
title="For development purposes"
content="This hub is used for theme development.
The content on these pages includes whatever is necessary to do so and has no other meaning.

Use the links in the top navigation bar to navigate to the actual documentation hubs."
%}

# H1 heading

## H2 heading

### H3 heading

Text

# Tables

|Table  |    |
|-------|----|
|Content|Text

Text

|Component|$/Unit|Genesis Qty|Genesis Subtotal|XL Qty|XL Subtotal|
|---------|------|-----------|----------------|------|-----------|
|40mm Horizontal Cable Carrier Support|$3.00|12|$36.00|24|$72.00
|60mm Horizontal Cable Carrier Support|$3.00|6|$18.00|12|$36.00

|                              |                              |
|------------------------------|------------------------------|
|**Material**                  |Gray UV stabilized ABS
|**Price**                     |$3.00
|**Quantity**                  |Genesis - 12<br>Genesis XL - 24
|**Recommended Supplier**      |[The FarmBot Shop](http://shop.farm.bot)

|||
|---|---|
|headerless|table

# Callouts

{%
include callout.html
type="info"
title="Info"
content="This callout contains multiple lines of text, showcasing the spacing between lines. How does it look? It should look and feel consistent with body text outside of callouts.

This callout also has multiple paragraphs, showing the spacing between paragraphs."
%}

{%
include callout.html
type="success"
title="Success"
content="This callout has just a little bit of content and a [link](page.md)."
%}

{%
include callout.html
type="warning"
title="Warning: this callout only has a title!"
%}

{%
include callout.html
type="danger"
title="Danger"
%}

{%
include callout.html
title="Callout"
content="This callout doesn't have a `type`."
%}

{%
include callout.html
type="cog"
content="This callout doesn't have a title, but it does have a custom `type`."
%}

{%
include callout.html
type="bug"
title="This callout also has a custom type"
%}

# Media

## Videos

{% include youtube.html id="qwSbWy_1f8w" %}

## Images

![image](_images/express.jpg)

Tall images respect a maximum height:

![tall image](_images/tall.png)

## Section images

simplSection links to aggregate BOM pages with sections for multiple parts (Genesis v1.5- and Express v1.0) have a hover image, like for these [dowel pins](../bom/legacy-parts.md#dowel-pins).

## Hover images

Links to individual part BOM pages (Genesis v1.6+ and Express v1.1+) have a hover image, like for this [[stepper motor]].

## Galleries

{% include gallery.html images='
![express](_images/express.jpg)
![genesis](_images/genesis.jpg)
![software](_images/software.jpg)
![developer](_images/developer.jpg)
![business](_images/business.jpg)
![farmbot logo](/assets/images/farmbot.svg)
![tall image](_images/tall.png)
<iframe width="100%" src="https://www.youtube.com/embed/qwSbWy_1f8w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
' %}

# Links

Here is a [link](page.md)

## Part links

Here is a link to the BOM page for a [[horizontal motor housing]]. It is created by wrapping the part name in double square brackets, `[``[`like this`]``]`, but without any spaces between the double brackets. This syntax will auto generate the link to the BOM page, extra styling, and hover image.

## CAD

Here is a link to a CAD model: {% include cad.html type='part' name='Part 1' %}

## OER standard reference

{% include standard.html org="NGSS" code="K-LS1-1" %}

{% include standard.html org="NGSS" code="5-PS1-3" %}

{% include standard.html org="CCSS" code="ELA-Literacy.RST.6-8.3" %}

# Misc Markdown

> block quote

horizontal rule:

---

0. list item 1
   0. sublist item
0. list item 2

* bullet list item

`code`

```
code block
```

# HTML

<details>
<summary>Details summary</summary>
details
</details>

# Styles

## Buttons

<span class="fb-button fb-green">BUTTON</span>
<span class="fb-button fb-purple">purple</span>
<span class="fb-button fb-red">red</span>
<span class="fb-button fb-yellow">yellow</span>
<span class="fb-button fb-gray">gray</span>
<span class="fb-button fb-orange">orange</span>
<span class="fb-button fb-teal">teal</span>
<span class="fb-button fb-blue">blue</span>
<span class="fb-button fb-clear">clear</span>
<span class="fb-button fb-add-variable">add variable</span>

<span class="fb-circle-button fb-green"><i class='fa fa-plus'></i></span>

<span class="fb-add-command-button"><i class='fa fa-plus'></i></span>

<span class="fb-button fb-gray"><i class='fa fa-arrow-left'></i></span>
<span class="fb-button fb-gray"><i class='fa fa-arrow-right'></i></span>
<span class="fb-button fb-gray"><i class='fa fa-arrow-up'></i></span>
<span class="fb-button fb-gray"><i class='fa fa-arrow-down'></i></span>

## Inputs

<span class="fb-input">INPUT</span>
<span class="fb-input fb-disabled-input">disabled</span>
<span class="fb-dropdown">dropdown <i class='fa fa-caret-down'></i></span>

## Peripheral controls

<span class="fb-peripheral-on">ON</span>
<span class="fb-peripheral-off">OFF</span>
<span class="fb-peripheral-unknown"></span>
<span class="fb-peripheral-unknown fb-peripheral-disabled"></span>

## Sequence commands

<span class="fb-step fb-move">MOVE</span>
<span class="fb-step fb-move-absolute">MOVE TO</span>
<span class="fb-step fb-move-relative">MOVE RELATIVE</span>
<span class="fb-step fb-write-pin">CONTROL PERIPHERAL</span>
<span class="fb-step fb-write-pin">TOGGLE PERIPHERAL</span>
<span class="fb-step fb-read-pin">READ SENSOR</span>
<span class="fb-step fb-set-servo-angle">CONTROL SERVO</span>
<span class="fb-step fb-wait">WAIT</span>
<span class="fb-step fb-send-message">SEND MESSAGE</span>
<span class="fb-step fb-reboot">REBOOT</span>
<span class="fb-step fb-shutdown">SHUTDOWN</span>
<span class="fb-step fb-e-stop">E-STOP</span>
<span class="fb-step fb-find-home">FIND HOME</span>
<span class="fb-step fb-set-zero">SET HOME</span>
<span class="fb-step fb-calibrate">FIND AXIS LENGTH</span>
<span class="fb-step fb-if-statement">IF STATEMENT</span>
<span class="fb-step fb-execute">EXECUTE SEQUENCE</span>
<span class="fb-step fb-run-farmware">RUN FARMWARE</span>
<span class="fb-step fb-run-farmware">DETECT WEEDS</span>
<span class="fb-step fb-take-photo">TAKE PHOTO</span>
<span class="fb-step fb-assertion">ASSERTION</span>
<span class="fb-step fb-lua">LUA</span>
<span class="fb-step fb-mark-as">MARK AS</span>

## Cable colors

<span class="cable-color red">red</span>
<span class="cable-color yellow">yellow</span>
<span class="cable-color green">green</span>
<span class="cable-color black">black</span>
<span class="cable-color white">white</span>
<span class="cable-color brown">brown</span>
<span class="cable-color blue">blue</span>
<span class="cable-color grey">grey</span>
<span class="cable-color orange">orange</span>
<span class="cable-color purple">purple</span>
<span class="cable-color pink">pink</span>
<span class="cable-color cyan">cyan</span>

# Icons and emoji

Favicon: <span class="value-icon fb"></span>

Open products: <span class="value-icon products"></span>

Open business: <span class="value-icon business"></span>

1% for the community: <span class="value-icon community"></span>

Be good people: <span class="value-icon good-people"></span>

Tooltip: <span class="fb-tooltip"><i class='fa fa-question'></i></span>

XL sticker: <span class="fb-xl-sticker">XL</span>

Settings:
<i class='fa fa-cog'></i>

Art:
:art:

LEDs:
<span class="fa fa-circle led green"></span>
<span class="fa fa-sun-o led green"></span>
<span class="fa fa-circle-thin led green"></span>
<span class="fa fa-circle led orange"></span>
<span class="fa fa-sun-o led orange"></span>
<span class="fa fa-circle-thin led orange"></span>
<span class="fa fa-circle led red"></span>
<span class="fa fa-sun-o led red"></span>
<span class="fa fa-circle-thin led red"></span>
<span class="fa fa-circle led blue"></span>
<span class="fa fa-sun-o led blue"></span>
<span class="fa fa-circle-thin led blue"></span>
<span class="fa fa-circle led gray"></span>
<span class="fa fa-sun-o led gray"></span>
<span class="fa fa-circle-thin led gray"></span>

Indicators:
<span class="fa fa-circle saucer blue"></span>
<span class="fa fa-circle saucer green"></span>
<span class="fa fa-circle saucer red"></span>
<span class="fa fa-circle saucer gray"></span>
<span class="fa fa-circle saucer light-blue"></span>
<span class="fa fa-circle saucer yellow"></span>

# What's next?

 * [Other Page](other-page.md)
