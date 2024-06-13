import React from 'react'

class Demo extends React.PureComponent {
  state = {
    arr: [10,20,30] // 0x001
  }
  render() { 
    let { arr } = this.state // arr->0x001
    console.log(this);
    return<div>
      {arr.map((item, index) => {
        return <span key={index} style={{display: 'inline-block', width: 100, height: 100, lineHeight: '100px', background: 'pink', marginRight: '10px'}}>
          {item}
        </span>
      })}
      <br />
      <button onClick={() => {
        arr.push(arr[arr.length-1] + 10) // arr->给0x001堆中新增一个数值
        this.setState({
          arr // 最新修改的状态地址，还是0x001[状态地址没有改]
        })
        console.log(arr)
      }}>新增span</button>

    </div>
  }
}

export default Demo

/**
  PureComponent和Component的区别：
    PureComponent会给类组件默认加一个shouldComponentUpdate周期函数
      + 在此周期函数中，它对新老的属性/状态 会做一个浅比较
      + 如果经过浅比较，发现属性和状态并没有改变，则返回false[也就是不继续更新组件]，有变化才会去更新
 */