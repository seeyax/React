import { createStore } from 'redux'
import { combineReducers } from 'redux'
import voteReducer from './reducers/voteReducer'
import personalReducer from './reducers/personalReducer'

const reducer = combineReducers({
  vote: voteReducer,
  personal: personalReducer
})

// 创建store公共容器
const store = createStore(reducer)

export default store