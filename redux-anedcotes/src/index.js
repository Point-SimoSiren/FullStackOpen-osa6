import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App $whoami='You' /*playing around with dummy prop :D */ />
  </Provider>,
  document.getElementById('root'))