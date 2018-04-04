import React from 'react'
import { render } from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './styles/normalize.css'

import WebFont from 'webfontloader'
WebFont.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons']
  }
})

render(<App />, document.getElementById('root'))
registerServiceWorker()
