import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { withRouter } from '../router'

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
const HomeHead = function HomeHead (props) {
  console.log(props);// 也具备了路由信息
  return <NavBox>
    <Link to="/a">A</Link>
    <Link to="/b">B</Link>
    <Link to="/c">C</Link>
</NavBox>
}

export default withRouter(HomeHead)
