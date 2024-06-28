import React from 'react'

class Demo  extends React.Component{

  touchstart = (ev) => {
    // 手指按下：记录手指的起始坐标
    console.log(ev);
    let finger = ev.changedTouches[0] // 记录了操作手指的相关信息
    this.touch = {
      startX: finger.pageX,
      startY: finger.pageY,
      isMove: false
    }
  }
  // 手指移动：记录手指偏移值，和误差值做对比，分析出是否发生移动
  touchmove = (ev) => {
    let finger = ev.changedTouches[0]
    let { startX, startY } = this.touch
    let changeX = finger.pageX - startX,
        changeY = finger.pageY - startY

    if (Math.abs(changeX) > 10 || Math.abs(changeY) > 10) {
      this.touch.isMove = true
    }
  }
  // 手指离开：根据isMove判断是否是点击
  touchend = (ev) => {
    let { isMove } = this.touch
    if (isMove) return
    // 说明触发了点击操作
    console.log('点击了');
  }
  render() {
    return <div style={{border: '1px solid', height: '500px', display: 'flex', alignItems:'center', justifyContent: 'center'}}>
      <button style={{display: 'flex', alignItems:'center', justifyContent: 'center',width: '50px',height: '50px'}} onTouchStart={this.touchstart} onTouchMove = {this.touchmove} onTouchEnd = {this.touchend}>提交</button>
    </div>
  }
}

export default Demo

  /**
   * 移动端和PC端
      + 移动端的click会存在300ms的延迟
      原因：
        + 移动端的click是单击事件
        + PC端的click是点击事件
      点击事件：第一次点击后，检测300ms,看是否有第二次点击操作，如果没有就是单机，如果有就是双击
    连着点击两下：
      + 移动端：不会触发click，只会触发dblclick
      + PC端：会触发2次click，一次dblclick
    单手指事件模型：touch
      + touchstart
      + touchmove
      + touchend
   */