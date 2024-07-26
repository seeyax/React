import React from 'react'
import '../index.less'
import { connect } from 'react-redux'


class VoteMain extends React.Component {
  // this.props
  render () {
    // 获取公共状态信息做绑定
    let {supNum, oppNum} = this.props
    return <div className="main">
      <p>支持人数：{supNum}人</p>
      <p>反对人数：{oppNum}人</p>
    </div> 
  }
}


export default connect(state=>state.vote)(VoteMain)