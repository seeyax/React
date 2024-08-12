import React from 'react'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'

const B = function A (props) {
  const navigate = useNavigate()
  // navigate('/c')
  // navigate('/c', { replace: true })
  // navigate({
  //   pathname: '/c'
  // })
  // navigate({
  //   pathname:'/c',
  //   search: '?id=100&name=zhufeng'
  // })
  // 传参方式：问号传参、路径传参、隐式传参
  const handle = () => {
    // 问号传参
    // navigate({
    //   pathname: '/c',
    //   search: qs.stringify({
    //     id: 100,
    //     name: 'zhufeng'
    //   })
    // })
    
    // 路径传参
    // navigate(`/c/100/zhufeng`)

    // 隐式传参
    navigate('/c',{
      // replace: true, // 历史记录池替换现有地址
      // 隐式传参信息
      state: {
        id: 200,
        name: 'jkl'
      }
    })
  }

  return <div className="box">
    B组件的内容
    <button onClick={handle}>按钮</button>
  </div>
}

export default B

/**
 * 在React-router-dom v6版本中, 实现路由跳转的方式：
 *  + <Link/NavLink to='/a' /> 点击跳转路由
 *  + <Navigate to='/' /> 遇到这个组件就会跳转
 *  + 编程式导航：取消了history对象，基于navigate函数实现路由跳转
 *    import { useNavigate } from 'react-router-dom'
 *    const navigate = useNavigate()
 *  
      const navigate = useNavigate()
      navigate('/c')
      navigate('/c', { replace: true })
      navigate({
        pathname: '/c'
      })
      navigate({
        pathname:'/c',
        search: '?id=100&name=zhufeng'
      })

  
    
 */

/**
 * 在React-router-dom v6版本中，即便当前组件是基于<Route/>匹配渲染的，也不会基于属性，把history/location/match
 * 传递给组件； 想获取相关的信息，我们只能基于Hook函数处理
 *  + 首先要确保，需要使用路由Hook的组件，是在Router[HashRouter/BrowserRouter]内包着的，否则会报错
 *  + 只要在Router内部包裹的组件，不论是否是基于<Route/>匹配渲染的
 *    + 默认都不可能再基于props获取相关的对象信息了
 *    + 只能基于路由Hook去获取
 * 类组件：
 *  + 自己重写withRouter
 * 
 * 
 */

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