import React, { useContext } from 'react'
import { Button } from 'antd'
import '../index.less'
import ThemeContext from '../ThemeContext'

const VoteFooter = function VoteFooter (props) {
  const { store } = useContext(ThemeContext)
  console.log(store);
  return <div className="footer">
  <Button type="primary" onClick={()=>{
    // 点击按钮派发任务，通知reducer执行传递的action行为对象中，type行为标识，要和reducer中进行判断的行为标识，要对应上！！
    store.dispatch({
      type: 'VOTE_SUP'
    })
  }}>支持</Button>
  <Button type="primary" danger onClick={() => {
    store.dispatch({
      type: 'VOTE_OPP'
    })
  }}>反对</Button>
</div>
}

export default VoteFooter