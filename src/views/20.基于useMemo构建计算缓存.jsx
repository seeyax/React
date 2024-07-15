import React, { useState, useMemo } from 'react'
import { Button } from 'antd'
import './useState.less'

const Demo = function () {
  let [supNum, setSupNum] = useState(10)
  let [oppNum, setOppNum] = useState(5)
  let [x, setX] = useState(0)

  // 经过计算，算出支持比率
  /**
   * 函数组件的每一次更新，都是把函数重新执行
   *  + 产生一个新的闭包
   *  + 内部的代码也要重新执行一遍
   * 
   * 如果我们修改的是支持数/反对数，视图更新的时候，我们可以让此逻辑重新计算
   * 但是如果我们修改其他的状态值，视图更新了，此逻辑没有必要再重新执行了！！[如果此逻辑需要执行的时间比较长，一定会影响视图更新的速度]
   * 
   * 诉求：再函数每一次重新执行的时候，如果依赖的状态值没有发生变化，我们此操作逻辑不应该去执行，只有依赖值发生变化，我们再去执行即可！！
   */
  // let total = supNum + oppNum,
  //     ratio = '--'
  // if(total>0) {
  //   console.log(x);
  //   ratio = (supNum/total*100).toFixed(2) + '%'
  // }

  /**
   * useMemo语法：
   * let xxx = useMemo(callback, [denpendencies])
   *  + 第一次渲染组件的时候，callback会执行
   *  + 后期只有依赖的状态值发生改变，callback才会再执行
   *  + 每一次会把callback执行的返回结果赋值给xxx
   *  + useMemo具备缓存的效果，在依赖的状态值没有发生改变，callback没有触发执行的时候，xxx获取的是上一次计算出来的结果'计算缓存'
   */

  let ratio = useMemo(() => {
    console.log('ok');
    let total = supNum + oppNum,
       rate = '--'
    if(total>0) {
      rate = (supNum/total*100).toFixed(2) + '%'
    }
    return rate
  }, [supNum, oppNum])


  return<div className="vote-box">
    <div className="main">
      <p>支持人数：{supNum}人</p>
      <p>反对人数：{oppNum}人</p>
      <p>支持比率： {ratio}</p>
      <p>x:{x}</p>
    </div>
    <div className="footer">
      <Button type="primary" onClick={() => {setSupNum(supNum + 1)}}>支持</Button>
      <Button type="primary" danger onClick={() => {setOppNum(oppNum + 1)}}>反对</Button>
      <Button onClick={() => {setX(x + 1)}}>干点别的事</Button>
    </div>
  </div>
}

export default Demo