import { createStore } from 'redux'
import reducer from './reducers'

// 创建store公共容器
const store = createStore(reducer)

export default store