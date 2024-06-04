// 类组件：动态组件
/** 创建类组件
 *   创建一个构造函数(类)，要求必须继承React.Component/PureComponent这个类
 *    + 我们习惯于使用ES6中的class创建类
 *    + 必须给当前类设置一个render的方法[放在其原型上]:在render方法中，返回需要渲染的视图
 * 
 */

import React from 'react'
let supNum = 10, oppNum = 5
class NewVotes extends React.Component {
  
  render () {
    return <div className="vote-box">
    <div className="header">
      <div className="title">标题</div>
      <span>10人</span>
    </div>
    <div className="main">
      <p>支持人数：{supNum}人</p>
      <p>反对人数：{oppNum}人</p>
    </div>
    <div className="footer">
      <button onClick={()=>{
        supNum++
        console.log(supNum)
      }}>支持</button>
      <button onClick={()=>{
        oppNum++
        console.log(oppNum)
      }}>反对</button>
    </div>
  </div>
  }
}

export default NewVotes