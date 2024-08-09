import React from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'
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

// const HomeHead = function HomeHead () {
//   let history = useHistory()
//   console.log(history);
  
//   return <NavBox>
//   <Link to="/a">A</Link>
//   <Link to="/b">B</Link>
//   <Link to="/c">C</Link>
// </NavBox>
// }

class HomeHead extends React.Component {
  render() {
    // console.log(this.props); // 可以获取三个属性了
    /**
     * NavLink VS Link
     *  都是实现路由跳转的,语法上几乎一样,区别就是:
     *  每一次页面加载或路由切换完毕,都会拿最新的路由地址,和NavLink中to指定的地址[或者pathname地址]进行匹配
     *    + 匹配上的这一项,会默认设置active选中样式类[我们可以基于activeClassName重新设置选择的样式类名]
     *    + 我们也可以设置exact精准匹配
     * 基于这样的机制,我们就可以给选中的导航设置相关的样式
     */
    return <NavBox>
      <Link to="/a">A</Link>
      <NavLink to="/b">B</NavLink>
      <Link to="/c">C</Link>
  </NavBox>
  }
}

// const Handle = function Handle(Component) {
//   // Component: 真正需要渲染的组件
//   // 返回一个代理/高阶组件 [导出去供别的地方调用的就是Hoc组件]
//   return function Hoc (props) {
//     // props：调用HOC传递的属性，其实这些属性原本是想传递给HomeHead的
//     // hoc是一个函数组件，我们可以在这里基于Hook函数获取需要的三个对象信息，然后手动作为属性，传递给HomeHead

//     let history = useHistory();
//     let location = useLocation();
//     let match = useRouteMatch();
//     return <Component {...props} history={history} location={location} match={match}></Component>
//   }
// }

// export default Handle(HomeHead)

export default withRouter(HomeHead)


/**
 * 只要在<HashRouter>/<BrowseRouter>中渲染的组件：
 *  我们在组件内部，基于useHistory/useLocation/useRouteMacth这些hook函数，就可以获取
 *  history/location/match这些对象信息
 *  即便这个组件并不是基于<Route></Route>匹配渲染的！！
 * 
 * 只有<Route></Route>匹配渲染的组件，才可以基于props属性，获取这三个对象信息
 * 
 * 问题：如果当前组件是一个类组件，在<HashRouter></HashRouter>,但是并没有经过<Route></Route>匹配渲染，
 *       我们如何获取三个对象信息尼？
 * 解决方案：基于函数高阶组件，自己包裹一层进行处理
 * 在react-router-dom  v5版本中，自带了一个高阶组件withRouter, 就是用来解决这个问题的
 * withRouter的原理，其实就是Handle组件
 * 
 * 总结：所有组件最好都包裹在<HashRouter>/<BrowsweRouter>中，只有这样的组件，我们才能在每个组件中，获取
 * history/location/match等对象信息
 *  1.函数组件，并且基于<Route></Route>匹配渲染的
 *    + 基于props属性获取[render需要自己处理一下]
 *    + 基于useHistory, useLocation,useRouteMatch Hook函数组件获取
 *  2. 函数组件，但并不是<Route></Route>匹配渲染的
 *    + 基于useHistory, useLocation,useRouteMatch Hook函数组件获取
 *    + 基于withRouter 代理一下这个组件，这样就可以基于props获取了
 *  3.类组件，Hook函数的方法就被pass了，只能基于props获取，但是如果其没有被<Route></Route>匹配渲染，则需要
 *    基于withRouter 代理一下这个组件
 *    
 */