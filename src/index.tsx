import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'tailwindcss/tailwind.css'
import { store } from './store/index'
import { App } from './App'

const mountNode = document.getElementById('mountNode')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode
)
