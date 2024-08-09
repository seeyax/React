import React from 'react'
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

const B = function A (props) {
  // 1.通过props获取
  // 2.在函数组件中通过react内部提供的Hook函数获取,这样就不需要基于属性处理了
  // console.log(props); // => {history, location, match}
  let history = useHistory()
  let location = useLocation()
  let match = useRouteMatch()
  console.log(history,location,match);
  
  return <div className="box">
    B组件的内容
    <button onClick={() =>{
      /**
       * 传参方案一： 问好传参 history.push('/c?id=1000&name=zhufeng')
       *  + 传递的信息出现在URL地址上 不安全 长度限制
       *  + 信息是显示的，即便在目标路由内刷新，传递的信息也在
       * 
       * 
       * 传参方案二： 路由参数[把需要传递的值，作为路由路径中的一部分]
       *  + 传递的信息也在URL地址中：比问号传参看起来漂亮一些,但是也存在安全和长度的限制
       *  + 因为信息都在地址中,即便目标组件刷新,传递的信息也在
       * 
       * 传参方案三: 隐式传参
       *  + 传递的信息不会出现在地址中:安全,美观,也没有限制
       *  + 在目标组件内刷新,传递的信息也就丢失了
       */

      // 方案一：
      // history.push({
      //   pathname: '/c',
      //   // search存储的就是问号传参信息，要求是url lencode字符串 'id=1000&name=zhufeng'
      //   search: 'id=1000&name=zhufeng'
      // })

      // 方案二：需要自己把传递的信息,拼接到地址中
      // history.push(`/c/100/zhufeng`)

      // 方案三:
      history.push({
        pathname: '/c',
        state: {
          id: 100,
          name: 'zhufeng'
        }
      })

    }}>按钮</button>
    <img src="../assets/images/route的传递的私有属性.png" alt="" />
  </div>
}

export default B

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
/**
 * 总结：基于<Route></Route>匹配渲染的组件，我们想获取这三个属性对象
 *  @1 基于props属性获取，适用于函数组件和类组件
 *  @2 基于Hook函数获取，只适用于函数组件
 * 
 */