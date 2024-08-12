// import React from 'react'
// import { Link } from 'react-router-dom'
// import RouterView from '../../router v5'
// import routes from '../../router v5/routes'

// import styled from 'styled-components'

// const DemoBox = styled.div`
//   display:flex;
//   font-size:12px;
//   .menu{
//     a{
//       font-size:18px;
//       padding: 5px;
//       color:#000;
//       display: block;
//     }
//   }
// `
// const routersChildren = function routersChildren (routes) {
//   // eslint-disable-next-line array-callback-return
//   const children =  routes.find(item => {
//     const keys = Object.keys(item)
//     if(keys.includes('children')) {
//       return item
//     }
//   })
//   return children.children
// }
// const A = function A () {
//   return <DemoBox>
//     <div className="menu">
//       <Link to='/a/a1'>A1</Link>
//       <Link to='/a/a2'>A2</Link>
//       <Link to='/a/a3'>A3</Link>
//     </div>
//     <div className="view">
//     <RouterView routes={routersChildren(routes)}></RouterView>
//     </div>
//   </DemoBox>
// }

// export default A

// /**
//  * 每一次路由跳转，都是从一级路由开始匹配
//  *  + 先匹配一级路由，进入匹配的组件，在组件内容，再去陪匹配二级路由
//  * 
//  */