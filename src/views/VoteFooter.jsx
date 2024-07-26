import React, { useContext } from 'react'
import { Button } from 'antd'
import '../index.less'
import { connect } from 'react-redux'

const VoteFooter = function VoteFooter (props) {
  return <div className="footer">
  <Button type="primary" onClick={()=>{
   
  }}>支持</Button>
  <Button type="primary" danger onClick={() => {
   
  }}>反对</Button>
</div>
}

export default connect(state=>state.vote)(VoteFooter)