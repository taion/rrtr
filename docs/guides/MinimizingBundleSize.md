# Minimizing Bundle Size

For convenience, rrtr exposes its full API on the top-level `rrtr` import. However, this causes the entire rrtr library and its dependencies to be included in client bundles that include code that makes any imports from the top-level CommonJS bundle.

There are two options for minimizing client bundle size by excluding unused modules.


## Import from `rrtr/lib`

Bindings exported from `rrtr` are also available in `rrtr/lib`. When using CommonJS models, you can import directly from `rrtr/lib` to avoid pulling in unused modules.

Assuming you are transpiling ES2015 modules into CommonJS modules, instead of

```js
import { Link, Route, Router } from 'rrtr'
```

use

```js
import Link from 'rrtr/lib/Link'
import Route from 'rrtr/lib/Route'
import Router from 'rrtr/lib/Router'
```

The public API available in this manner is defined as the set of imports available from the top-level `rrtr` module. Anything not available through the top-level `rrtr` module is a private API, and is subject to change without notice.


## Use a Bundler with ES2015 Module Support

React Router offers a ES2015 module build under `es/` and defines a `jsnext:main` entry point. If you are using a bundler that supports ES2015 modules and tree-shaking such as webpack 2 or Rollup, you can directly import from `rrtr`, as long as you are correctly resolving to the ES2015 module build.
