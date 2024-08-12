import React from 'react'
import { useLocation, useSearchParams, useMacth, useParams } from 'react-router-dom'
const C = function A () {
  // 方案一：问号传参
  const location = useLocation()
  const usp = new URLSearchParams(location.search)
  console.log(usp.get('id'));

  //方案二：问号传参
  let [rr] = useSearchParams()
  console.log(rr.get('id'));

  // 路径传参

  let match = useMacth(location.pathname) // useMatch中必须要传递一个地址，对地址进行解析
  console.log(match); // 这样无法获取路径参数信息，即使在match.params中也没有

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