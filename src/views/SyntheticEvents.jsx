
import React from 'react'
class Demo extends React.Component {
  /* 
  基于React内部的处理，如果我们结合合成事件绑定一个普通函数，当事件行为触发，绑定的函数执行，方法中的this是undefined
  handle() { // 相当于加在了Demo的原型上 Demo.prototype.handle = function handle(){}
    console.log(this); // undefined
  }
  解决办法：this->实例
    + 我们可以基于JS中的bind方法：预先处理函数中的this和实参的
    + 推荐：当然也可以把绑定的函数设置为'箭头函数'，让其使用上下文中的this[也就是我们的实例]
  */
  
  handle1 = (ev) => { // 给实例.handle1 = () => {...}
    console.log(this); // 实例
    console.log(ev); // SyntheticBaseEvent 合成事件对象
    // 合成事件对象[React内部经过特殊处理，把各个浏览器的事件对象统一化后，构建的一个事件对象]
  }
  handle2 () {
    console.log(this); // undefined
  }

  handle3(x,y) {
    console.log(this, x, y); // 实例,10,20
  }
  render() {
    return <div>
      <button onClick={this.handle1}>按钮1</button>
      <button onClick={this.handle2}>按钮2</button>
      <button onClick={this.handle3.bind(this, 10, 20)}>按钮3</button>
    </div>
  }

}

export default Demo
