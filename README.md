## Royloader.js

Adds support for `<script language="roy">` and `<script
type="text/roy">`.

Requires [Roy](http://roy.brianmckenna.org/)

See example usage in [index.html](https://github.com/raimohanska/royloader/blob/master/index.html).

*Disclaimer*: this is in "early alpha" stage

### Features

- Finds roy scripts based on the `language` and `type` attributes
- Finds, compiles and evaluates scripts on the jQuery `document.ready` event
- Exposes all root-level definitions globally. For example "let x = 1" compiles to "var x = 1"
- Maintains Roy type information between scripts. So if you define "let x = 1" in your first script,
  the compiler will know that `x` is a Number when it compiles your second script

### TODO

- gather experience on how this works in practise
- add to bower (roy's not there either yet)
- maybe contribute this to the roy core (when the loader code is more solid)
- print t-shirts (sell for profit)
