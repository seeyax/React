// createElement: 创建虚拟DOM对象

export function createElement(ele, props, ...children) {
  let virtualDOM = {
    $$typeof: Symbol('react.element'),
    ref: null,
    key: null,
    type: null,
    props: {}
  }
  let len = children.length
  virtualDOM.type = ele
  if (props !== null) {
    virtualDOM.props = {
      ...props
    }
  }
  if (len === 1) virtualDOM.props.children = children[0]
  if (len > 1) virtualDOM.props.children = children
  return virtualDOM
}