import { createStore } from 'redux';
import '../assets/images/dispatch派发跟reducer的关系.png'
/**
 * 管理员：修改store容器中的公共状态
 * 
 */

let initial = {
  supNum: 10,
  oppNum: 5
}
/**
 * 第一次派发，state没有值，会把initial的值赋值给state，第一次派发实是redux内部派发的
 *  目的：给state赋初始值
 * 第二次，是我们基于业务逻辑，实现的手动派发
 */
const reducer = function reducer(state = initial, action) {
  // state：存储store容器中的公共状态[最开始没有的时候，赋值初始值initial]
  // action：每一次基于dispatch派发的时候，传递进来的行为对象[要求必须具备type属性，存储派发的行为标识]
  // 为了接下来的操作中，我们操作state，不会直接修改容器中的状态[要等到最后return的时候]，我们需要先克隆
  state = { ...state }

  //接下来我们要基于派发的行为标识，修改store容器中的公共状态信息
  switch (action.type) {
    case 'VOTE_SUP':
      state.supNum++
      break;
    case 'vote_OPP':
      state.oppNum++
      break;
    default:
  }
  // return的内容，会整体替换store容器中的状态信息
  return state
}


const store = createStore(reducer)

export default store