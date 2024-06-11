// 类组件：动态组件
/** 创建类组件
 *   创建一个构造函数(类)，要求必须继承React.Component/PureComponent这个类
 *    + 我们习惯于使用ES6中的class创建类
 *    + 必须给当前类设置一个render的方法[放在其原型上]:在render方法中，返回需要渲染的视图
 * 
 */

/** 从调用类组件[new NewVotes({...})]开始，类组件内部发生的事情：
 *    1. 初始化属性 & 规则校验
 *       先规则校验，校验完毕后，再处理属性的其他操作
 *      方案一：
 *      constructor (props) {
          super(props) // 会把传递进来的属性挂载在this实例上
          console.log(this.props);
        }
        方案二： 即便我们自己不再constructor中处理[或者constructor都没写]，在constructor处理完毕后，
                React内部也会把传递的props挂载在实例上，所以在其他的函数中，只要保证this是实例，就可
                以基于this.props获取传递的属性！
                  +同样this.props获取的属性对象也是被冻结的{只读的} Object.isFrozen(this.props) ->true
        设置规则校验
      2. 初始化状态
        状态：后期修改状态，可以触发视图的更新
        需要手动初始化，如果我们没有去做相关的处理，则默认会往实例上挂载一个state，初始值是null =》this.state = null
        手动处理：
          state = {
            supNum: 10,
            oppNum: 5
          }
        修改状态，控制视图更新
          this.state.xxx = xxx: 这种操作仅仅是修改了状态值，但是无法让视图更新
        想让视图更新，我们需要基于React.Component.prototype提供的方法操作：
          @1 this.setState(partialState, callback) 既可以修改状态，也可以让视图更新
            partialState: 部分状态
            this.setState({
              xxx:xxx
            })
          @2 this.forceUpdate() 强制更新
      3.触发周期函数 componentWillMount()[钩子函数]：组件第一次渲染之前
        钩子函数：在程序运行到某个阶段，我们可以基于一个处理函数，让开发者在这个阶段做一些自定义的事情
          + 此周期函数，目前是不安全的[虽然可以用，但是未来可能要被移除了，所以不建议使用]
        + 如果开启了React.StrictMode[React的严格模式]，则我们使用UNSAFE_componentWillMount 这样的周期函数，控制台会直接抛出红色警告错误
        React.StrictMode VS use strict
          + use strict: JS的严格模式
          + React.StrictMode: React的严格模式，它会去检查React中一些不规范的语法，或者是一些不建议使用的API等
      ４.触发render周期函数：渲染
      5.触发componentDidMount周期函数: 第一次渲染完毕
        + 已经把virtualDOM变为真实DOM了[所以我们可以获取真实DOM了]
 * 
 */
import React from 'react'
import PropTypes from 'prop-types'
class NewVotes extends React.Component {
  // 属性规则校验
  static defaultProps = {
    num:0
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    num: PropTypes.number
  }
  constructor (props) {
    super(props)
    // console.log(this.props)
  }
  // 初始化状态
  state = {
    supNum: 10,
    oppNum: 5
  }
  render () {
    console.log(this.props)
    let { title } = this.props,
    { supNum, oppNum } = this.state
    return <div className="vote-box">
    <div className="header">
      <div className="title">{title}</div>
      <span>10人</span>
    </div>
    <div className="main">
      <p>支持人数：{supNum}人</p>
      <p>反对人数：{oppNum}人</p>
    </div>
    <div className="footer">
      <button onClick={()=>{
        this.setState({
          supNum: supNum + 1
        })
      }}>支持</button>
      <button onClick={()=>{
        this.state.oppNum++
        this.forceUpdate()
      }}>反对</button>
    </div>
  </div>
  }

  componentWillMount() {
    console.log('第一次渲染之前')
  }

  componentDidMount() {
    console.log('第一次渲染完毕');
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
// let p = new Parent(10,20)

export default NewVotes