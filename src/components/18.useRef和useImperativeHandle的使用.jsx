import React, { useState, useEffect, useRef } from 'react'
import { Button } from 'antd'
import './useState.less'

let prev1, prev2;
const Demo = function Demo() {
  let [num, setNum] = useState(0)
  // 基于'ref={函数}'的方式，可以把创建的DOM元素(或者子组件的实例)赋值给box变量[不推荐使用]
  // let box;
  // useEffect(() => {
  //   console.log(box);
  // },[])
  const handle = () => {
    setNum(num + 1)
  }

  // 也可以基于React.createRef创建ref对象来获取想要的内容
  // let bd = React.createRef()
  // useEffect(() => {
  //   console.log(bd.current);
  // }, [])

  /*
    函数组件中，还可以基于useRef Hook函数，创建一个ref对象
      + React.createRef也可以创建ref对象，即可以在类组件中使用，也可以在函数组件中使用
      + useRef只能在函数组件中使用[所有的ReactHook函数，都只能在函数组件中使用，在类组件中使用会报错]
  */
  let box1 = useRef(null)
  let box2 = React.createRef()

  if(!prev1) {
    // 第一次DEMO执行，把第一次创建的REF对象赋值给变量
    prev1 = box1
    prev2 = box2
  } else{
    // 第二次DEMO执行，我们验证一下，新创建的REF，和之前第一次创建的REF对象，是否一致？
    console.log(prev1 === box1); // true  useRef在每一次组件更新的时候（函数重新执行），再次执行useRef方法的时候，不会
                                 //创建新的REF对象了，获取到的还是第一次创建的那个REF对象
    
    console.log(prev2 === box2); // false  createRef在每一次组件更新的时候，都会创建一个全新的REF对象出来，比较浪费性能
  }

  /**
   * 总结：
   *  在类组件中，创建REF对象，我们基于React.createRef处理；但是在函数组件中，为了保证性能，我们应该使用专属的useRef处理
   * 
   */

  useEffect(() => {
    console.log(box1.current);
    console.log(box2.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return <div className='demo'>
    {/* <span className='num' ref={x => box = x}>{num}</span> */}
    {/* <span className='num' ref={bd}>{num}</span> */}
    <span className='num' ref={box1}>box1: {num}</span>
    <span className='num' ref={box2}>box2: {num}</span>
    <Button type='primary' size='small' onClick={handle}>新增</Button>
  </div>
}
export default Demo

/**
 * 类组件中，我们基于ref可以做的事情：
 *  1. 赋值给一个标签：获取DOM元素
 *  2.赋值给一个类子组件：获取子组件实例[可以基于实例调用子组件中的属性和方法等]
 *  3.赋值给一个函数子组件：报错[需要配合React.forwardRef实现ref转发，获取子组件中的某一个DOM元素]
 * 
 * ref的使用方法
 *  1.ref = 'box'
 *    this.refs.box获取（不推荐使用）
 *  2.ref = (x=>this.box=x)
 *    this.box 获取
 *  3.let box = React.createRef()创建一个ref对象
 *    <h2 ref = {box}></h2>
 *    this.box.current获取DOM元素
 * 
 */