// import React, { Suspense } from 'react'
// import { Switch, Route, Redirect } from 'react-router-dom'

// // 调用组件的时候，基于属性传递路由表进来，我们根据路由表，动态设定路由的匹配规则
// const RouterView = function RouterView(props) {
//   let { routes } = props
//   return <>
//     <Switch>
//       {
//         routes.map((item, index) => {
//           let { redirect, from, to, path, exact, component: Component } = item
//           let config = {}
//           if (redirect) {
//             // 重定向规则
//             config = { to }
//             if (from) config.from = from
//             if (exact) config.exact = exact
//             return <Redirect key={index} {...config}></Redirect>
//           }
//           // 正常匹配
//           config = { path }
//           if (exact) config.exact = true
//           return <Route key={index} {...config} render={(props) => {
//             // 统一基于render函数处理，当某个路由匹配，后期在这里可以做一些其他事情
//             // 路由懒加载，一定需要Suspense的支持
//             // fallback：在异步加载的组件没用处理完成之前，先展示的Loading效果
//             return <Suspense fallback={<>正在处理中...</>}>
//               <Component {...props}></Component>
//             </Suspense>
//           }}></Route>
//         })
//       }
//     </Switch>
//   </>
// }

// export default RouterView

