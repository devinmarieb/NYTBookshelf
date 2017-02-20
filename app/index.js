import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory, IndexRedirect } from 'react-router'
import {createStore} from 'redux'
import { Provider } from 'react-redux'

import allReducers from './reducers/index'
import Main from './components/Main/Main'
import Header from './components/Header/Header'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(allReducers);

import './reset.css'

const router = (
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ Main }>
      </Route>
    </Router>
  </Provider>
)


render(router, document.querySelector('.application'));
