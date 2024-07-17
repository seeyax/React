import React from 'react'
import VoteFooter from './VoteFooter'
import VoteMain from './VoteMain'
import '../index.less'
class Vote extends React.Component {
  state = {
    supNum: 10,
    oppNum: 0
  }
  
  // 设置为箭头函数，不论方法再哪执行的，方法中的this永远都是Vote父组件的实例
  change = (type) => {
    let { supNum, oppNum } = this.state
    if(type === 'sup') {
      this.setState({ supNum: supNum + 1 })
      return
    }
    this.setState({ oppNum: oppNum + 1 })
  }
  render () {
    let { supNum, oppNum } = this.state
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
      <VoteFooter change={this.change}></VoteFooter>
    </div>
  }
}

export default Vote

/**
 * 父子组件通信
 *  @1 父亲想把信息传递给儿子 => 基于属性！
 *  @2 儿子想改父亲的数据 => 父亲把修改自己数据的'方法'，基于属性传递给儿子，儿子执行方法即可！
 *  @3 父亲想把一些HTML结构传递给儿子 => 基于属性中的children[插槽]！
 *  @4 父亲再调用儿子的时候，可以给儿子设置ref,以此获取儿子的实例(或者儿子中暴露的数据和方法)
 * 
 * 父子组件通信
 *  @1 就是以父组件为主导，基于'属性'实现通信
 *    原因：只有父组件可以调用子组件，此时才可以基于属性，把信息传递给子组件
 *    + 父组件基于属性，可以把信息传递给子组件[父 -> 子]
 *    + 父组件基于属性[插槽]，可以把HTML结构传递给子组件[父 -> 子]
 *    + 父组件把方法基于属性传递给子组件，子组件把传递的方法执行[子 -> 父]
 *  @2 父组件基于ref获取子组件实例[或者子组件基于useImperativeHandle暴露的数据和方法]
 */

/**
 * 组件渲染的顺序：依赖于深度优先原则：
 * 父组件的第一次渲染：
 *  父willMount -> 父render[子willMount -> 子render -> 子didMount] -> 父didMount
 * 
 * 父组件更新：
 *  父shouldUpdate -> 父willUpdate -> 父render[子willReciveProps ->子shouldUpdate -> 子willUpdate -> 子render -> 子didUpdate] -> 父didUpdate
 * 
 * 特殊：我们完全可以在子组件内部做优化处理，验证传递的属性值有没有变化，如果没有变化，则禁止更新
 * 
 * 父组件释放：
 *  父willUnmount -> 父释放中[子willUnmount -> 子释放] -> 父释放
 */