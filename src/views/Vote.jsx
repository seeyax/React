import React from 'react'
import VoteFooter from './VoteFooter'
import VoteMain from './VoteMain'
import '../index.less'
class Vote extends React.Component {
  render () {
    return <div className="vote-box">
      <div className="header">
        <h2 className="title">
          React是很好的前端框架
        </h2>
        <span className="num">0</span>
      </div>
      <VoteMain></VoteMain>
      <VoteFooter></VoteFooter>
    </div>
  }
}

export default Vote