import React from 'react'
import { Button } from 'antd'
import '../index.less'
import { connect } from 'react-redux'
import action from '../store/actions'

const VoteFooter = function VoteFooter (props) {
  let { support, oppose } = props
  return <div className="footer">
  <Button type="primary" onClick={support}>支持</Button>
  <Button type="primary" danger onClick={oppose}>反对</Button>
</div>
}

export default connect(null, action.vote)(VoteFooter)

// export default connect(null, dispatch => {
//   // 返回相关的方法，作为属性传递给组件
//   return {
//     // 组件内部执行方法的时候，基于dispatch完成任务的派发
//     // 派发的行为对象，基于action中封装的操作获取
//     support() {
//       dispatch(action.vote.support())
//     },
//     oppose() {
//       dispatch(action.vote.oppose())
//     }
//   }
// })(VoteFooter)

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
 *  2.mapDispatchToProps: 把需要派发的任务，当作属性传递给组件
 *    connect(null, dispatch => {
 *      // dispatch: store.dispatch 派发任务的方法
 *      // 返回对象中的信息，会作为属性传递给组件
 *      return {
 *        ...
 *      }
 *    })(vote)
 * 
 */