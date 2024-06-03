import PropTypes from 'prop-types'
const DemoOne = function (props) {
  // console.log(Object.isFrozen(props)) ==>true
  let { className, style, title, x } = props
  console.log(x)
  return <div className={`demo-box ${className}`} style={style}>
    <h2 className="title">{title}</h2>
  </div>
}
// 通过函数当作对象，设置静态的私有属性方法[把函数当作对象]，来给其设置属性的校验规则
DemoOne.defaultProps = {
  x:0
}

DemoOne.propTypes = {
  title: PropTypes.string.isRequired,
  x:PropTypes.number,
  y: PropTypes.oneOffType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default DemoOne