import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router } from 'rrtr'
import routes from './config/routes'

render(<Router history={browserHistory} routes={routes}/>, document.getElementById('example'))
