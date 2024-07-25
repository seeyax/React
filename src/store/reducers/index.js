
/**
 * 合并各个模块的reducer,最后创建出一个总的reducer
 *  + reducer是最后合并总的reducer
 *  + 此时容器中的公共状态，会按照我们设置的成员名字，分模块进行管理
 *  state = {
 *    vote: {
 *      supNum: 15,
        oppNum: 5,
        num: 0
 *    },
      personal: {
        num: 100,
        info: null
      }
 *  }
 * 派发的操作  不需要改动，每一次派发后，都会去所有的reducer中进行逐一匹配[用派发的行为标识和每一个模块reducer中判断的行为标识进行比较]，
 * 和谁匹配成功，就执行谁的逻辑
 */

import { combineReducers } from 'redux'
import voteReducer from './voteReducer'
import personalReducer from './personalReducer'

const reducer = combineReducers({
  vote: voteReducer,
  personal: personalReducer
})

export default reducer