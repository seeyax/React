/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomeHead from './components/HomeHead'
import A from './views/router v6/A'
import B from './views/router v6/B'
import C from './views/router v6/C'
import A1 from './views/a/A1'
import A2 from './views/a/A2'
import A3 from './views/a/A3'

const App = function App () {
  return <HashRouter>
    <HomeHead >
    </HomeHead>
    <div className="content">
      {/* 
        所有的路由匹配规则，放在<Routes></Routes>中；
        每一条规则的匹配，还是基于<Route></Route>
          + 路由匹配成功，不再基于component/render控制渲染的组件，而是基于element，语法格式是<Componen/>
          + 不再需要Switch，默认就是一个匹配成功，就不在匹配下面的了
          + 不再需要exact，默认每一项匹配都是精准匹配
        原有的<Redirect/>操作，被<Route path="/" element={<Navigate to="/"></Navigate>}></Route>代替
          + <Navigate/>组件，路由就会跳转，跳转到to指定的路由地址
          + 设置replace属性，则不会新增历史记录，而是替换现有记录
          + <Navigate to={{...}}/> to的值可以设置为一个对象：pathname需要跳转的地址，search问号传参信息
      */}
      <Routes>
        <Route path="/" element={<Navigate to="/a"></Navigate>}></Route>
        <Route path="/a" element={<A/>}>
          {/* v6版本中，要求所有的路由(二级或者多级路由)，不在分散到各个组件中编写，
              而是统一都写在一起进行处理
          */}
          <Route path="/a/" element={<Navigate to="/a/a1"></Navigate>}></Route>
          <Route path='/a/a1' element={<A1/>}></Route>
          <Route path='/a/a2' element={<A2/>}></Route>
          <Route path='/a/a3' element={<A3/>}></Route>
        </Route>
        <Route path="/b" element={<B/>}></Route>
        <Route path="/c" element={<C/>}></Route>
        {/* 如果以上都不匹配，我们可以渲染404组件，也可以重定向到A组件[传递不同的问号参数信息] */}
        <Route path="*" element={<Navigate to={{
          pathname: '/a',
          search: '?from=404'
        }}
          ></Navigate>}></Route>
      </Routes>
    </div>
  </HashRouter>
}

export default App
/**
 * 在react-router-dom v6版本中
 *  移除了： 
 *    + Switch
 *    + Redirect -> 代替方案：Navigate
 *    + withRouter -> 代替方案：自己写一个
 * 
 * 
 */
