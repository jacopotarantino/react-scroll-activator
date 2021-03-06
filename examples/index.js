import React from 'react'
import { render } from 'react-dom'

import Container from './src/Container'

if (module.hot) {
  module.hot.accept()
}

const DemoApp = () => <Container />

render(<DemoApp />, document.getElementById('demo-app'))
