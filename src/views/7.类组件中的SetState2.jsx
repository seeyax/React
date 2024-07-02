
import React from 'react'
// import { flushSync } from 'react-dom'

/**
  this.setState((prevState)=>{
    // prevState：存储之前的状态值
    // return的对象，就是我们想要修改的新状态值[支持修改部分状态]
    return {
      xxx: xxx
    }
  })
 */

class Demo extends React.Component {

  state = {
    x: 0
  }
  

  handle = () => {
    for(let i = 0; i < 20; i++) {
      // 更新一次，最后结果是20
      this.setState(prevState => {
        return {
          x: prevState.x + 1
        }
      })

      // 更新一次，结果是1
      // this.setState({
      //   x: this.state.x + 1
      // })

      // 更新20次，最后结果是20
      // flushSync(()=> {
      //   this.setState({
      //     x: this.state.x + 1
      //   })
      // })
      // this.setState({
      //   x: this.state.x + 1
      // })
      // flushSync()
    }
  }
  render() {
    console.log('视图渲染： render');
    let { x } = this.state
    return <div>
      x:{x}
      <br />
      <button onClick={this.handle}>按钮</button>
    </div>
  }

}

export default Demo
