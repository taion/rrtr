# rrtr [![Travis][build-badge]][build] [![npm package][npm-badge]][npm]

[rrtr](https://www.npmjs.com/package/rrtr) is a complete routing library for [React](https://facebook.github.io/react).

rrtr keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.

[![Coveralls][coveralls-badge]][coveralls]
[![Discord][discord-badge]][discord]

**rrtr**? It's an actively-maintained fork of React Router. More details [here](https://medium.com/@taion/react-router-is-dead-long-live-rrtr-d229ca30e318).

### Docs & Help

- [Tutorial – do this first!](https://github.com/reactjs/react-router-tutorial)
- [Guides and API docs](/docs)
- [Troubleshooting guide](/docs/Troubleshooting.md)
- [Changelog](/CHANGES.md)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/react-router)
- [CodePen boilerplate](http://codepen.io/anon/pen/xwQZdy?editors=001) for bug reports

For questions and support, please visit [our channel on Reactiflux](https://discord.gg/0ZcbPKXt5bYaNQ46) or [Stack Overflow](http://stackoverflow.com/questions/tagged/react-router).

### Browser Support

We support all browsers and environments where React runs.

### Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save rrtr

Then with a module bundler like [webpack](https://webpack.github.io/) that supports either CommonJS or ES2015 modules, use as you would anything else:

```js
// using an ES6 transpiler, like babel
import { Router, Route, Link } from 'rrtr'

// not using an ES6 transpiler
var Router = require('rrtr').Router
var Route = require('rrtr').Route
var Link = require('rrtr').Link
```

The UMD build is also available on [npmcdn](https://npmcdn.com):

```html
<script src="https://npmcdn.com/rrtr/umd/ReactRouter.min.js"></script>
```

You can find the library on `window.ReactRouter`.

### What's it look like?

```js
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'rrtr'

const App = React.createClass({/*...*/})
const About = React.createClass({/*...*/})
// etc.

const Users = React.createClass({
  render() {
    return (
      <div>
        <h1>Users</h1>
        <div className="master">
          <ul>
            {/* use Link to route around the app */}
            {this.state.users.map(user => (
              <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
})

const User = React.createClass({
  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      user: findUserById(this.props.params.userId)
    })
  },

  render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
        {/* etc. */}
      </div>
    )
  }
})

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.body)
```

See more in the [Introduction](/docs/Introduction.md), [Guides](/docs/guides/README.md), and [Examples](/examples).

### Versioning and Stability

We want rrtr to be a stable dependency that’s easy to keep current. We follow the same versioning as React.js itself: [React Versioning Scheme](https://facebook.github.io/react/blog/2016/02/19/new-versioning-scheme.html).

### Thanks

Thanks to [our sponsors](/SPONSORS.md) for supporting the development of
React Router.

React Router was initially inspired by Ember's fantastic router. Many thanks to the Ember team.

[build-badge]: https://img.shields.io/travis/taion/rrtr/master.svg
[build]: https://travis-ci.org/taion/rrtr

[npm-badge]: https://img.shields.io/npm/v/rrtr.svg
[npm]: https://www.npmjs.org/package/rrtr

[coveralls-badge]: https://img.shields.io/coveralls/taion/rrtr/master.svg
[coveralls]: https://coveralls.io/github/taion/rrtr

[discord-badge]: https://img.shields.io/badge/Discord-join%20chat%20%E2%86%92-738bd7.svg
[discord]: https://discord.gg/0ZcbPKXt5bYaNQ46
