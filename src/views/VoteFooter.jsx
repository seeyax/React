import React, {memo} from 'react'
import { Button } from 'antd'
import '../index.less'

const VoteFooter = function VoteFooter (props) {
  return <div className="footer">
  <Button type="primary">支持</Button>
  <Button type="primary" danger>反对</Button>
</div>
}

export default memo(VoteFooter)