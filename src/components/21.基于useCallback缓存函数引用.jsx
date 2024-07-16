import React, { useState, useCallback } from 'react'
import { Button } from 'antd'
import '../index.less'

// 父组件
// let prev
const Demo = function Demo() {
  let [x, setX] = useState(0)

  /**
   * 函数组件的每一次更新，都是把函数重新执行
   *  + 产生一个新的闭包
   *  + 在闭包中所有创建的操作，都会：重新创建新的堆内存(也就是函数会重新创建)
   * 
   */
  // const handle = () => {}  // 第一次： 0x001 第二次： 0x010(eg)

  /**
   * const xxx = useCallback(callback,[denpendcies])
   *  + 组件第一次渲染，useCallback执行，创建一个函数'callback',赋值给xxx
   *  + 组件后续每一次更新，判断依赖的状态值是否改变，如果改变，则重新创建新的函数堆，赋值给xxx;但是如果，
   *    依赖的状态没有更新[或者没有设置依赖[]，则xxx获取的一直是第一次创建的函数堆，不会创建新的函数出来]
   *  + 或者说，基于useCallback,可以始终获取第一次创建函数的堆内存地址（或者说是函数的引用）
   */

  // 简单来讲：useCallback可以保证，函数组件的每一次更新，不再把里面的小函数重新创建，用的都是第一次创建的
  /**
   * useCallback不要乱用：并不是所有组件内部的函数，都拿其处理会更好
   *  + 虽然减少了堆内存的开辟
   *  + 但是useCallback本身也有自己的处理逻辑喝缓存的机制，这个也消耗时间的
   * 
   * 啥时候使用?
   *  + 父组件嵌套子组件，父组件要把一个内部的函数，基于属性传递给子组件，此时传递的这个方法，我们基于useCallback会更好
   */
  // const handle = useCallback(() => {

  // },[]) // 第一次：0x001  第二次：0x001
  
  // if(!prev) {
  //   prev = handle
  // } else {
  //   console.log(handle === prev);
  // }

  // const handle = () => {} // 第一次：0x001 第二次:0x101  第三次:0x201
  
  /**
   * 诉求：当父组件更新的时候,因为传递给子组件的属性仅仅是一个函数[特点：基本应该算是不变的]，所以不想再让子组件也跟着更新
   *    + 第一条：传递给子组件的属性(函数)，每一次需要是相同的堆内存地址,基于useCallback处理！！
   *    + 第二条：在子组件内部也要做一个处理，验证父组件传递的属性是否发生变化，如果没有变化，则让子组件不能更新，有变化才
   *              需要更新。
   *            + 类组件：继承React.PureComponent即可在[shouldComponentUpdate对新老属性做了浅比较]
   *            + 函数组件：函数组件是基于React.memo函数，对新老传递属性做比较，如果不一致，才会把函数组件执行，如果一致，
   *                       则不让子组件更新
   *              
   *   
   */
  const handle = useCallback(()=>{

  },[]) // 第一次：0x001 第二次:0x001  第三次:0x001
  return <div className="vote-box">
    <Child handle={handle}></Child>
    <div className="main">
      <p className="text">{x}</p>
    </div>
    <div className="footer">
      <Button type='primary' onClick={() => {setX(x + 1)}}>累加</Button>
    </div>
  </div>
}

// 子组件
// class Child extends React.PureComponent {
//   render() {
//     console.log('Child Render 类组件');
//     return <div style={{fontSize: '30px', margin: '10px', color: 'green'}}>
//       我是子组件
//     </div>
//   }
// }

const Child = React.memo(function Child () {
  console.log('Child Render  函数组件');
  return <div>
    我是子组件
  </div>
})

export default Demo