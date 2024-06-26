
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
      onClick={()=>{
        console.log('inner 冒泡 [合成]');
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
      // console.log(ev);
      // console.log(ev.path)
      // 在这里把绑定的合成事件方法执行
        // + 如果不经过处理，方法中的this是undefined[如果绑定的方法是箭头函数，则在函数上找上下文中的this]
        // + 在执行这些方法之前，把原生的事件对象ev做特殊处理，返回合成事件对象，传递给函数
      // let path = ev.path //path: [事件源-> ... -> window] 所有祖先元素
      // [...path].reverse().forEach(ele => {
      //   let handle = ele.onClickCapture;
      //   if (handle) handle()
      // })
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
    // 顺序是乱的 -->原因看：assets中React合成事件views中的输出原因
    // body 捕获 -> outer 捕获 [合成] -> inner 捕获 [合成] -> root 捕获 -> outer 捕获 [原生] ->inner 捕获 [原生] 
    // -> inner 冒泡 [原生] -> outer 冒泡 [原生] -> inner 冒泡 [合成] -> outer 冒泡 [合成] -> root 冒泡 ->body 冒泡
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
    而在给#root绑定的方法中，把之前给元素设置的onXxx/onXxxCapture属性，在相应的阶段执行

 *  
 * 
 */

  /**
   * 合成事件原理
   *  其实并没有给元素本身做事件绑定，而是给元素设置onXxx/onXxxCapture这样的合成事件属性！！
   *  当事件行为触发，根据原生事件传播的机制，都会传播到#root容器上，React内部给#root容器做了事件绑定[捕获&冒泡]
   *  当React内部绑定的方法执行的时候，会根据ev.path中分析的路径，依次把对应阶段的onXxx/onXxxCapture等事件合成属性触发执行
   * 
   *  总结：合成事件是利用事件委托（事件传播机制）完成的
   */
