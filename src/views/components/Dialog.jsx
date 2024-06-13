import PropTypes from 'prop-types'
import React from 'react'
// 函数组件
const Dialog = function (props) {
  let { title,content,children} = props
  children = React.Children.toArray(children)
  let sureSlot = [], cancelSlot = []
  children.forEach(child => {
    // 传递进来的插槽信息，都是编译为virtualDOM后传递进来的[而不是传递的标签]
    console.log(child)
    let { slot } = child.props
    if(slot === 'sure') {
      sureSlot.push(child)
    } else if (slot === 'cancel') {
      cancelSlot.push(child)
    }
  })
  return <div className="dialog-box">
    <div className="dialog-box">
      <div className="header">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </div>
      {children.length > 0 ?<div className="footer">
        {sureSlot}
        {cancelSlot}
      </div>: null}
      
    </div>

  </div>
}
/**属性规则校验 */
Dialog.defaultProps = {
  title: '温馨提示'
}
Dialog.propTypes = {
  title:PropTypes.string,
  content: PropTypes.string.isRequired
}

export default Dialog