import React, { useState, useEffect, useRef, useImperativeHandle } from 'react'
// import { Button } from 'antd'
import './useState.less'

// 基于ref获取子组件的实例，这样基于实例可以调用子组件内部挂载到实例上的东西
// class Child extends React.Component{
//   state = {
//     x: 1000
//   }
//   render() {
//     return <div className="child-box">
//       {this.state.x}
//     </div>
//   }
// }


// 基于forwardRef实现ref转发，目的：获取子组件内部的某个元素
// 函数子组件内部，可以有自己的状态和方法了；如何实现：基于forwardRef实现ref转发的同时，获取函数子组件内部的状态或者方法尼？
// => useImperativeHandle
const Child = React.forwardRef(function Child(props, ref) {
  let [text,setText] = useState('hello world')
  const submit = () => {}
  useImperativeHandle(ref, () => {
    // 在这里返回的内容，都可以被父组件的REF对象获取到
    return {
      text,
      submit
    }
  })
  console.log(ref); // 在DEMO中，调用Child，传递的ref对象[x]
  return <div className="child-box">
    <span ref={ref}>哈哈哈</span>
  </div>
})

const Demo = function Demo() {

  let x = useRef(null)
  useEffect(()=>{
    console.log(x.current);
  }, [])

  return <div className="demo">
    <Child ref={x}></Child>
  </div>
}

export default Demo