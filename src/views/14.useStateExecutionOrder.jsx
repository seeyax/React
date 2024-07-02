import React, { useState } from 'react'
import { Button } from 'antd'
import './useState.less'
import { flushSync } from 'react-dom'

const Demo = function Demo() {
  console.log('render');
  let [x, setX] = useState(10)
  let [y, setY] = useState(20)
  let [z, setZ] = useState(30)
  
  /**
   在React18中，我们基于useState创建出来的'修改状态的方法'，它们的执行也是异步的
   原理：等同于类组件中的this.setState
    基于异步操作 & 更新队列，实现状态的批处理
  在任何地方修改状态，都是采用异步编程的
   * */ 

  /**
  在React16中，也和this.setState一样，放在合成事件/周期函数中，是异步的操作；但是放在其他的异步操作中[例如：
  定时器、手动的事件绑定等]它是同步的
   */
  const handle = () => {
    // 异步的
    // setX(x+1)
    // setY(y+1)
    // setZ(z+1)

    
    flushSync(() => {
      setX(x+1)
      setY(y+1) // 回调函数中编写的和其上面编写的，会一起更新
    })
    setZ(z+1)
  }
  return <div className='demo'>
    <span className='num'>x:{x}</span>
    <span className='num'>y:{y}</span>
    <span className='num'>z:{z}</span>
    <Button type='primary' size='small' onClick={handle}>新增</Button>
  </div>
}

export default Demo