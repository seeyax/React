import React, { useContext } from 'react'
import { Button } from 'antd'
import '../index.less'
import ThemeContext from '../ThemeContext'

const VoteFooter = function VoteFooter (props) {
  const { store } = useContext(ThemeContext)
  console.log(store);
  return <div className="footer">
  <Button type="primary">支持</Button>
  <Button type="primary" danger>反对</Button>
</div>
}

export default VoteFooter