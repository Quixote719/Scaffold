import React from 'react'
import ReactDom from 'react-dom'

import App from './App'

/* tslint-disable */
const temp = module
if (temp.hot) {
    temp.hot.accept()
}
/* tslint-enable */

ReactDom.render(
    <App />,
    document.getElementById('main')
)
