import React from 'react'
// useMacth
import { useLocation, useSearchParams, useParams } from 'react-router-dom'
const C = function A (props) {
  // props: 只有通过路由匹配才可以拿到props
  // 方案一：问号传参
  const location = useLocation()
  const usp = new URLSearchParams(location.search)
  console.log(usp.get('id'));

  //方案二：问号传参
  let [rr] = useSearchParams()
  console.log(rr.get('id'));

  // 路径传参

  // let match = useMacth(location.pathname) // useMatch中必须要传递一个地址，对地址进行解析
  // console.log(match); // 这样无法获取路径参数信息，即使在match.params中也没有

  let params = useParams()
  console.log(params); // {id:100, name:'zhufeng'}
  
  // 隐式传参：在v5中一刷新，信息就没有了；在v6中，刷新也保留下来了
  console.log(location.state);
  
  
  return <div className="box">
    C组件的内容
  </div>
}

export default C


/**
 * 
 * 在react-router-dom v6常用的路由Hook:
 *  + useNavigate ->代替5中的useHistory，实现编程式导航
 *  + useLocation[5中也有，获取location信息，pathname/search/state]
 *  + useSearchParams[6有]，获取问号传参信息，取到的结果是一个URLSearchParams对象
 *  + useParams[5/6], 获取路径参数匹配的信息
 *  + useMacth，[6],代替6中的useRouteMatch[5中可以基于params获取路径参数信息，6中，需要我们自己传递地址，
 *    而且params中也没有获取匹配的信息]
 */

/**
 * 函数组件 & 基于Route匹配渲染的：可以基于props获取路由信息、也可以自己使用Hook函数获取
 * 类组件 & 基于Route匹配渲染的：只能基于属性获取，或者使用withRouter[自己写的]
 * 函数组件 & 不是Route匹配的：可以基于Hook自己处理，也可以使用withRouter
 * 类组件 & 不是Route匹配的：只能使用withRouter
 * 
 * 
 */