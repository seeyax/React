import React from 'react';
import ReactDOM from 'react-dom/client';
//  多ES6内置API做兼容处理
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
// import DemoOne from './views/components/DemoOne';
// import Dialog from './views/components/Dialog';
// import Vote from './views/components/Vote'
import NewVote from './views/components/NewVotes'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    {/* <DemoOne title="title - react" x={10} className='box' style={{fontSize:'22px', color:'red'}}>
      <span slot="footer">我是页脚</span>
      <span slot="header">我是页眉</span>
    </DemoOne>
    <br />
    <br />
    <br />
    <Dialog title="友情提示" content="大家出门做好个人防护"/>
    <Dialog content="我们一定要好好学习React!!">
      <button slot="sure">确定</button>
      <button slot="cancel">取消</button>
    </Dialog> */}
    <br />
    <br />
    <br />
    {/* <Vote title="react还是很好学的"></Vote> */}
    <br />
    <br />
    <br />
    <NewVote title="珠峰React"></NewVote>
  </div>
)

/** render函数在渲染的时候, 如果type是：
 *  + 字符串：创建一个标签
 *  + 普通函数，把函数执行，并且把props传递给函数
 *  + 构造函数：把构造函数基于new执行[也就是创建类的一个实例],也会把解析出来的props传递过去
 *    + 每调用一次类组件都会创建一个单独的实例
 *    + 把在类组件中编写的render函数执行，把返回的jsx[virtualDOM]当作组件的视图进行渲染
 *  例如：
 *  new Vote({
 *    title="react还是很好学的"
 *  })
 * 
 * 
 */

