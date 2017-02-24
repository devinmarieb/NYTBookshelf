import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory, IndexRedirect } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Bookshelf from './containers/Bookshelf-container'

import allReducers from './reducers/index'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(allReducers, devTools)

import './reset.css'

const router = (
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path='/' component={ Bookshelf }>
      </Route>
    </Router>
  </Provider>
)


render(router, document.querySelector('.application'));
