import React from 'react'
import VoteFooter from './VoteFooter'
import VoteMain from './VoteMain'
import '../index.less'
const Vote = function Vote () {
  return <div className="vote-box">
    <div className="header">
      <h2 className="title">
        React是很好的前端框架
      </h2>
      <span className="num">0</span>
      <img src="../assets/images/redux的逻辑.png" alt="redux的逻辑" />
      <img src="../assets/images/redux基础工作流程.png" alt="redux基础工作流程" />
    </div>
    <VoteMain/>
    <VoteFooter/>
  </div>
}

export default Vote
