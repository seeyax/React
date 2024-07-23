//lodash中isPlainObject：检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 [[Prototype]] 为 null 
const isPlainObject = function isPlainObject() { }

// 实现redux的部分源码
export const createStore = function createStore(reducer) {
  let state, // 存放公共状态
    listeners = [] //事件池 
  // 获取公共状态
  const getState = function getState() {
    // 返回公共状态信息即可
    return state
  }

  // 向事件池中加入让组件更新的方法
  const subscribe = function subscribe(listener) {
    if (typeof listener !== 'function') throw new TypeError('listener is not a function')
    // 把传入的方法(让组件更新的办法)加入到事件池中[需要做去重处理]
    if (!listener.includes(listener)) {
      listener.push(listener)
    }
    // 返回一个从事件池中移除方法的函数
    return function unsubscribe() {
      let index = listener.indexOf(listener)
      listener.split(index, 1)
    }
  }

  // 派发任务通知reducer执行
  const dispatch = function dispatch(action) {
    // 规则校验
    if (!_.isPlainObject(action)) throw new TypeError('actions must be plain objects')
    if (typeof action.type === 'undefined') throw new TypeError('actions may not have an undefined type')

    // 把reducer执行、传递：公共状态、行为对象；接受执行的返回值,替换公共状态；
    state = reducer(state, action)

    // 当状态更新，我们还需要事件池中的方法执行
    listeners.forEach(listener => {
      listener()
    })

    return action
  }


  const randomString = () => Math.random().toString(36)
  /**redux内部会默认进行一次dispatch派发，目的：给公共容器中的状态赋值初始值 */
  dispatch({
    // type: Symbol()
    type: '@redux' + randomString()
  })

  // 返回创建是store对象
  return {
    getState,
    subscribe,
    dispatch
  }
}
