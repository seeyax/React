import React, { useState } from 'react'
import { Button } from 'antd'
import './useState.less'
/**
  useState: React Hook函数之一，目的是在函数组件中使用状态，并且后期基于状态的修改，可以让组件更新
    let [num, setNum] = useState(initialValue);
      + 执行useState,传递的initialValue是初始的状态值
      + 执行这个方法，返回结果是一个数组: [状态值，修改状态的方法]
        + num变量存储的是获取的状态值
        + setNum变量存储的是：修改状态的方法
      + 执行setNum(value)
        + 修改状态值为value
        + 通知视图更新

    函数组件[或者Hooks组件]不是类组件，所以没有实例的概念[调用组件不再是创建类的实例，而是把函数执行。产生一个私有上下文而已，
    再所以，再函数组件中不涉及this的处理]

 * @returns 
 */

  /**
  函数组件的每一次渲染（或者是更新），都是把函数（重新）执行，产生一个全新的'私有上下文'
    + 内部的代码也需要重新执行
    + 涉及的函数需要重新的构建{这些函数的作用域(函数执行的上级上下文)，是每一次执行DEMO产生的闭包}
    + 每一次执行DEMO函数，也会把useState重新执行，但是：
      + 执行useState，只有第一次，设置是初始值会生效，其余以后再执行，获取的状态都是最新的状态值[而不是初始值]
      + 返回的修改状态的方法，每一次都是返回一个新的
  
   */
const Demo = function Demo() {
  let [num, setNum] = useState(0)
  const handle = () => {
    setNum(100) // 每一次都是新的一个闭包[私有上下文]
    setTimeout(()=>{
      console.log(num); // 寻找它的上级上下文
    },2000)
  }
  return <div className='demo'>
    <span className='num'>{num}</span>
    <Button type='primary' size='small' onClick={handle}>新增</Button>
  </div>
}

export default Demo