import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory, IndexRedirect } from 'react-router'
import Main from './components/Main/Main'
import Header from './components/Header/Header'

import './reset.css'

const router = (
  <Router history={ browserHistory }>
    <Route path='/' component={ Main }>
    </Route>
  </Router>
)


render(router, document.querySelector('.application'));
