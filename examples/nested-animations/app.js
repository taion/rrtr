import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { browserHistory, Router, Route, Link } from 'rrtr'
import './app.css'

class App extends Component {
  render() {
    const { pathname } = this.props.location

    // Only take the first-level part of the path as key, instead of the whole path.
    const key = pathname.split('/')[1] || 'root'

    return (
      <div>
        <ul>
          <li><Link to="/page1">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
        </ul>
        <ReactCSSTransitionGroup
          component="div" transitionName="swap"
          transitionEnterTimeout={500} transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children || <div />, { key: key })}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

class Page1 extends Component {
  render() {
    const { pathname } = this.props.location

    return (
      <div className="Image">
        <h1>Page 1</h1>
        <ul>
          <li><Link to="/page1/tab1">Tab 1</Link></li>
          <li><Link to="/page1/tab2">Tab 2</Link></li>
        </ul>
        <ReactCSSTransitionGroup
          component="div" transitionName="example"
          transitionEnterTimeout={500} transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children || <div/>, { key: pathname })}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

class Page2 extends Component {
  render() {
    const { pathname } = this.props.location

    return (
      <div className="Image">
        <h1>Page 2</h1>
        <ul>
          <li><Link to="/page2/tab1">Tab 1</Link></li>
          <li><Link to="/page2/tab2">Tab 2</Link></li>
        </ul>
        <ReactCSSTransitionGroup
          component="div" transitionName="example"
          transitionEnterTimeout={500} transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children || <div/>, { key: pathname })}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

class Tab1 extends Component {
  render() {
    return (
      <div className="Image">
        <h2>Tab 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}

class Tab2 extends Component {
  render() {
    return (
      <div className="Image">
        <h2>Tab 2</h2>
        <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="page1" component={Page1}>
        <Route path="tab1" component={Tab1} />
        <Route path="tab2" component={Tab2} />
      </Route>
      <Route path="page2" component={Page2}>
        <Route path="tab1" component={Tab1} />
        <Route path="tab2" component={Tab2} />
      </Route>
    </Route>
  </Router>
), document.getElementById('example'))
