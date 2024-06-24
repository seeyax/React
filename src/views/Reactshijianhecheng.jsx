
import React from 'react'

class Demo extends React.Component {
  render() {
    // onClickCapture: 捕获阶段触发
    return <div className="outer"
      onClick={()=>{
        console.log('outer 冒泡');
      }}
      onClickCapture={() => {
        console.log('outer 捕获');
      }}
    >
      <div className="inner"
      onClick={()=>{
        console.log('inner 冒泡');
      }}
      onClickCapture={() => {
        console.log('inner 捕获');
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

    let root = document.querySelector('#root')
    root.addEventListener('click', () => {
      console.log('root 捕获');
    }, true)
    root.addEventListener('click', () => {
      console.log('root 冒泡');
    }, false)
    // body 捕获 -> outer 捕获 -> inner 捕获 -> root 捕获 -> inner 冒泡 -> outer 冒泡 -> root 冒泡 -> body 冒泡
    // root是乱的
  }
}

export default Demo

/**
 * React中合成事件的处理原理
  绝对不是给当前元素基于addEventListener单独做的事件绑定，React中的合成事件，都是基于'事件委托'处理的
    + 在React17及以后版本，都是委托给#root这个容器[捕获和冒泡都做了委托]
    + 在React17版本以前，都是委托给document这个容器的[而且只做了冒泡阶段的委托]
    + 对于没有实现事件传播机制的，才是单独做的单独绑定[例如：onMouseEnter/onMounseLeave]
  
  在组件渲染的时候，如果发现JSX元素属性中有onXxx/onXxxCapture这样的属性，不会给当前元素直接做事件绑定，只是把绑定的方法
  赋值给元素的相关属性！！

  然后对#root这个容器做了事件绑定[捕获和冒泡都做了]
    原因：因为组件中所渲染的内容，最后都会插入到#root这个容器中，这样点击页面中任何一个元素，最后都会把#root的点击行为触发

 *  
 * 
 */
