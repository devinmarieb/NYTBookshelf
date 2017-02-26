import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory, IndexRedirect } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Main from './containers/Main-container'
import Favorites from './containers/Favorites-container'

import allReducers from './reducers/index'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(allReducers, devTools)

import './reset.css'

const router = (
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ Main } />
      <Route path='/hardcover-fiction' component={ Main } />
      <Route path='/paperback-fiction' component={ Main } />
      <Route path='/ebook-fiction' component={ Main } />
      <Route path='/hardcover-nonfiction' component={ Main } />
      <Route path='/paperback-nonfiction' component={ Main } />
      <Route path='/ebook-nonfiction' component={ Main } />
      <Route path='/young-adult-hardcover' component={ Main } />
      <Route path='/favorites' component={ Favorites } />
    </Router>
  </Provider>
)


render(router, document.querySelector('.application'));
