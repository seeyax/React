/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom'

import A from './views/A'
import B from './views/B'
import C from './views/C'

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
    <Switch>
      <Redirect exact from='/' to="/a"></Redirect>
      <Route path="/a" component={A}></Route>
      <Route path="/b" component={B}></Route>
      <Route path="/c" component={C}></Route>
      <Redirect to="/a"></Redirect>
    </Switch>
  </div>
  </HashRouter>
}

export default App
