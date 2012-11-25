## Royloader.js

Adds support for `<script language="roy">`.

Requires [Roy](http://roy.brianmckenna.org/), jQuery.

See example usage in [index.html](https://github.com/raimohanska/royloader/blob/master/index.html).

*Disclaimer*: this is in "early alpha" or more like on the "I've tried this once with the alert('lol') example" stage

### Features

- Finds roy scripts based on the `language` attribute
- Compiles and evaluates scripts
- Exposes all root-level definitions globally. For example "let x = 1" compiles to "var x = 1"
- Maintains Roy type information between scripts. So if you define "let x = 1" in your first script,
  the compiler will know that `x` is a Number when it compiles your second script

### TODO

- gather experience on how this works in practise
- find out how other similar loaders actually work and do the same (if good)
- add to bower (roy's not there either yet)
- maybe contribute this to the roy core (when the loader code is more solid)
- print t-shirts (sell for profit)