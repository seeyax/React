import React from 'react'
import VoteFooter from './VoteFooter'
import VoteMain from './VoteMain'
import '../index.less'
import { connect } from 'react-redux'

const Vote = function Vote (props) {
  console.log(props);
  let { supNum, oppNum } = props
  return <div className="vote-box">
    <div className="header">
      <h2 className="title">
        React是很好的前端框架
      </h2>
      <span className="num">{supNum + oppNum}</span>
    </div>
    <VoteMain/>
    <VoteFooter/>
  </div>
}

// 把redux中vote板块中的所有状态作为属性传递给组件
export default connect(state => state.vote)(Vote)
/**
 * connect(mapStateToProps,mapDispatchToProps)(我们要渲染的组件)
 *  1.mapStateToProps:可以获取redux中的公共状态，把需要的信息作为属性，传递给组件即可
  *  connect((state)=>{
  *   // 存储redux容器中，所有模块的公共状态信息
  *   // 返回对象中的信息，就是要作为属性，传递给组件的信息
  *   return {
  *     AAA:state.vote.supNum,
  *     info:state.personal.info
  *   }
  *  })(Vote)
 * 
 * 
 */
