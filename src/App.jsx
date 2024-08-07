/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { HashRouter, Link } from 'react-router-dom'
import RouterView from './router'
import routes from './router/routes'

import styled from 'styled-components'
const NavBox = styled.nav`
  a{
    margin-right: 20px;
    font-size:20px;
    color: #000
  }
`
const App = function App () {
  return <HashRouter>
  {/* 导航部分 */}
  <NavBox>
    <Link to="/a">A</Link>
    <Link to="/b">B</Link>
    <Link to="/c">C</Link>
  </NavBox>
  <div className="content">
    <RouterView routes={routes}></RouterView>
  </div>
  </HashRouter>
}

export default App
