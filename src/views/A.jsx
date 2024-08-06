import React from 'react'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import A1 from './a/A1'
import A2 from './a/A2'
import A3 from './a/A3'

import styled from 'styled-components'

const DemoBox = styled.div`
  display:flex;
  font-size:12px;
  .menu{
    a{
      font-size:18px;
      padding: 5px;
      color:#000;
      display: block;
    }
  }
`

const A = function A () {
  return <DemoBox>
    <div className="menu">
      <Link to='/a/a1'>A1</Link>
      <Link to='/a/a2'>A2</Link>
      <Link to='/a/a3'>A3</Link>
    </div>
    <div className="view">
      {/* 配置二级路由的匹配规则：需要把一级路由地址带上，不能省略  */}
      <Switch>
        <Redirect exact from='/a' to="/a/a1"></Redirect>
        <Route  path="/a/a1" component={A1}></Route>
        <Route path="/a/a2" component={A2}></Route>
        <Route path="/a/a3" component={A3}></Route>
      </Switch>
    </div>
  </DemoBox>
}

export default A

/**
 * 每一次路由跳转，都是从一级路由开始匹配
 *  + 先匹配一级路由，进入匹配的组件，在组件内容，再去陪匹配二级路由
 * 
 */