import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// 调用组件的时候，基于属性传递路由表进来，我们根据路由表，动态设定路由的匹配规则
const RouterView = function RouterView(props) {
  let { routes } = props
  return <>
    <Switch>
      {
        routes.map((item, index) => {
          let { redirect, from, to, path, exact, component: Component } = item
          let config = {}
          if (redirect) {
            // 重定向规则
            config = { to }
            if (from) config.from = from
            if (exact) config.exact = exact
            return <Redirect key={index} {...config}></Redirect>
          }
          // 正常匹配
          config = { path }
          if (exact) config.exact = true
          return <Route key={index} {...config} render={(props) => {
            // 统一基于render函数处理，当某个路由匹配，后期在这里可以做一些其他事情
            // 路由懒加载，一定需要Suspense的支持
            // fallback：在异步加载的组件没用处理完成之前，先展示的Loading效果
            return <Suspense fallback={<>正在处理中...</>}>
              <Component {...props}></Component>
            </Suspense>
          }}></Route>
        })
      }
    </Switch>
  </>
}

export default RouterView


/**
 * <Route path="/a" component={A}></Route>
 * 在react-router-dom v5中,基于React路由匹配渲染的组件,路由会默认给每个组件传递三个属性
 *  + history
 *  + location
 *  + match
 * 后期我们基于props/this.props获取传递的属性值
 * 
 * <Route path='/a' render={()=>{
 *  // 在render中可以获取传递的属性
 *  // 但是组件中没有这些属性,此时我们需要自己传递给组件
 * return <A {...props}></A>
 * }}
 */