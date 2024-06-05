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

class Parent {
  // new的时候，执行的构造函数[可写可不写：需要接收传递进来的实参信息，才需要设置constructor]
  constructor (x,y) {
    // this ->创建的实例
    console.log(x, y);
    // total 是私有属性
    this.total = x + y
    // 私有属性
    this.getNum = function () {}
  }
  num = 200; //等价于this.num = 2000 给实例设置私有属性
  sum1 =  () => {} // 这是加私有属性
  sum2 () {
    // 类似于sum = function sum() {} 不是箭头函数
    // 它是给parent.prototype上设置公共的方法[sum2函数是不可枚举的]
  }
  // 把构造函数当做一个普通对象，为其设置静态的私有属性方法 Parent.xxx 也是不可枚举的
  static average () {

  }
}
Parent.prototype.y = 2000 // 在外部手动给构造函数原生上设置公共的属性
let p = new Parent(10,20)
console.log(p);

export default NewVotes