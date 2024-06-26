
import React from 'react'

class Demo extends React.Component {
  render() {
    // onClickCapture: 捕获阶段触发
    // 1. 视图渲染中，遇到合成事件绑定，并没有给元素做事件绑定，而是给元素设置对应的属性'合成事件属性'
    return <div className="outer"
      onClick={()=>{
        console.log('outer 冒泡 [合成]');
      }}
      onClickCapture={() => {
        console.log('outer 捕获 [合成]');
      }}
    >
      <div className="inner"
      onClick={(ev)=>{
        console.log('inner 冒泡 [合成]', ev);
        ev.stopPropagation() // 合成事件中的'阻止事件传播'
      }}
      onClickCapture={() => {
        console.log('inner 捕获 [合成]');
      }}
      ></div>
    </div>
  }

  componentDidMount () {
    document.body.addEventListener('click', () => {
      console.log('body 捕获');
    }, true)
    document.body.addEventListener('click', () => {
      console.log('body 冒泡');
    }, false)
    // 2. 给#root做事件绑定[捕获/冒泡],root上绑定的方法执行，把所有规划的路径中，有合成事件属性的都执行即可
    let root = document.querySelector('#root')
    root.addEventListener('click', (ev) => {
      console.log('root 捕获');
    }, true)
    root.addEventListener('click', () => {
      console.log('root 冒泡');
    }, false)
    // body 捕获 -> outer 捕获 -> inner 捕获 -> root 捕获 -> inner 冒泡 -> outer 冒泡 -> root 冒泡 -> body 冒泡
    // root是乱的

    let outer = document.querySelector('.outer')
    outer.addEventListener('click', () =>{
      console.log('outer 捕获 [原生]');
    }, true)
    outer.addEventListener('click', () =>{
      console.log('outer 冒泡 [原生]');
    }, false)

    let inner = document.querySelector('.inner')
    inner.addEventListener('click', () =>{
      console.log('inner 捕获 [原生]');
    }, true)
    inner.addEventListener('click', () =>{
      console.log('inner 冒泡 [原生]');
    }, false)
  }
}

export default Demo
