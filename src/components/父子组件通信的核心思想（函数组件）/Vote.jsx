import React, { useState, useCallback } from 'react'
import VoteFooter from './VoteFooter'
import VoteMain from './VoteMain'
import '../index.less'
const Vote = function Vote () {
  let [supNum, setSupNum] = useState(10)
  let [oppNum, setOppNum] = useState(5)
  
  // useCallback一定不要乱用，如果没有设置任何依赖，则函数永远是在第一次组件渲染，产生的闭包中创建的！
  // 函数中用到的信息[向上级上下文中找]永远是第一次闭包中的信息！
  const change = useCallback((type) => {
    if(type === 'sup') {
      setSupNum( supNum + 1 )
      return
    }
    setOppNum( oppNum + 1)
  }, [supNum, oppNum]) // 只有supNum/oppNum发生改变就会重新创建新的方法
  return <div className="vote-box">
    <div className="header">
      <h2 className="title">
        React是很好的前端框架
      </h2>
      <span className="num">{ supNum + oppNum }</span>
    </div>
    {/* 把状态信息基于'属性'传递给儿子, 父传子 */}
    <VoteMain supNum={supNum} oppNum={oppNum}></VoteMain>
    {/* 父组件把'修改自己状态'的方法，基于属性传递给儿子，儿子可以把传递的方法执行，实现 子 改 父 */}
    <VoteFooter change={change}></VoteFooter>
  </div>
}

export default Vote
