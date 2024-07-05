import React, { useState } from 'react'
import { Button } from 'antd'
import './useState.less'
// import { flushSync } from 'react-dom'


/**
  useState自带了性能优化的机制：
    + 每一次修改状态值的时候，会拿最新要修改的值和之前的状态值比较[基于Object.is]
    + 如果发现两次的值是一样的，则不会修改状态，也不会让视图更新[可以理解为：类似于PureComponent，在
      shouldComponentUpdate中做了浅比较和优化]
 */

/*const Demo = function Demo() {
  console.log('render');
  let [x, setX] = useState(10)
  
  const handle = () => {
    // for(let i = 0; i < 10; i++) {
    //   setX(x + 1) // 这里的x一定是上级上下文中的10， 更新一次，x->11
    // }
    // for(let i=0; i< 10; i++) {
    //   flushSync(() => {
    //     setX(x + 1) // 更新2次，x -> 11
    //   })
    // }
    

    // 需求：让函数只更新一次，但是最后结果是20
    for(let i = 0; i < 10; i++) {
      setX((prev) => {
        console.log(prev);
        return prev + 1  // 返回的信息是我们要修改的状态值 只会更新一次
      })
    }
  }
  return <div className='demo'>
    <img src="../assets/images/useState函数更新-遇到for循环时.png" alt="for循环"></img>
    <img src="../assets/images/useState函数更新for循环遇到flushSync().png" alt="for循环遇到flushSync()"></img>
    <img src="../assets/images/useState函数更新-for循环时只更新一次，值为20.png" alt="让函数只更新一次，但是最后结果是20"></img>
    <span className='num'>x:{x}</span>
    <Button type='primary' size='small' onClick={handle}>新增</Button>
  </div>
}
  */

// 函数组件的每次更新都是产生一个新的闭包
const Demo = function Demo(props) {
  // 我们需要把基于属性传递进来的x/y， 相加后（或者经过其他处理）的结果作为初始值
  // 此时我们需要对初始值的操作，进行惰性化处理：只有第一次渲染组件处理这些逻辑，以后组件更新，这样的逻辑就不再运行了！！
  console.log('render');
  
  let [num, setNum] = useState(() => {
    // 惰性化处理
    let {x, y} = props, total = 0;
    for (let i = x; i<=y; i++) {
      total += +String(Math.random()).substring(2)
    }
    return total
  })
  
  const handle = () => {
    setNum(1000)
  }
  return <div className='demo'>
    <span className='num'>{num}</span>
    <Button type='primary' size='small' onClick={handle}>新增</Button>
  </div>
}
export default Demo