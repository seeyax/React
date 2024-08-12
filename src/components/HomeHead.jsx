import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBox = styled.nav`
  a{
    margin-right: 20px;
    font-size:20px;
    color: #000;
    &.active{
    color: red
    }
  }
`
class HomeHead extends React.Component {
  render() {
    return <NavBox>
      <Link to="/a">A</Link>
      <NavLink to="/b">B</NavLink>
      <Link to="/c">C</Link>
  </NavBox>
  }
}

export default HomeHead
