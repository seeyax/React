import PropTypes from 'prop-types'
import React from 'react'
console.log(React)
const DemoOne = function (props) {
  // console.log(Object.isFrozen(props)) ==>true
  let { className, style, title, x, children } = props
  // 要对children的类型做处理
  // if (children === undefined) {
  //   children = []
  // } else if (!Array.isArray(children)) {
  //   children = [children]
  // }
  /** 可以基于React.Children对象中提供的方法，对props.children做处理
   * count/forEach/map/only/toArray
   * 优势：在这些方法的内部，已经对children的各种形式做了处理
  */
  
  children = React.Children.toArray(children)
  let headerSlot = [], footSlot = [], defaultSlot = []
  children.forEach(child => {
    // 传递进来的插槽信息，都是编译为virtualDOM后传递进来的[而不是传递的标签]
    console.log(child)
    let { slot } = child.props
    if(slot === 'header') {
      headerSlot.push(child)
    } else if (slot === 'footer') {
      footSlot.push(child)
    } else {
      defaultSlot.push(child)
    }
  })
  return <div className={`demo-box ${className}`}>
    <h2 style={style}>{title}</h2>
    {headerSlot}
    <br />
    <span style={style}>x的值: {x}</span>
    <br />
    {footSlot}
  </div>
}
// 通过函数当作对象，设置静态的私有属性方法[把函数当作对象]，来给其设置属性的校验规则
DemoOne.defaultProps = {
  x:0
}

DemoOne.propTypes = {
  title: PropTypes.string.isRequired,
  x:PropTypes.number,
  y: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default DemoOne