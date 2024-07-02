import React, { useState } from 'react'
import { Button } from 'antd'
import './useState.less'
// import { flushSync } from 'react-dom'

const Demo = function Demo() {
  console.log('render');
  let [x, setX] = useState(10)
  
  const handle = () => {
    for(let i = 0; i < 10; i++) {
      setX(x + 1) // 这里的x一定是上级上下文中的10， 更新一次，x->11
    }
  }
  return <div className='demo'>
    <span className='num'>x:{x}</span>
    <Button type='primary' size='small' onClick={handle}>新增</Button>
  </div>
}

export default Demo