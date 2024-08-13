/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { HashRouter } from 'react-router-dom'
import HomeHead from './components/HomeHead'
import RouterView from './router'

const App = function App () {
  return <HashRouter>
    <HomeHead >
    </HomeHead>
    <div className="content">
      <RouterView></RouterView>
    </div>
  </HashRouter>
}

export default App