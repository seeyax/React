import React, { useReducer } from 'react'

// 在组件中创建一个局部的store容器
// 初始状态
const initialState = {
  num: 1
}
// 修改状态的管理方法：state:原始状态，action: 派发的行为对象，必须具备type属性，派发的行为标识；reducer中可以基于不同的行为标识，修改不同的状态信息
const reducer = function reducer(state,action) {
  state={...state}
  switch(action.type) {
    case 'plus':
      state.num++
      break
    case 'minus':
      state.num--
      break
    default:
  }
  return state
}
const A1 = function A () {
  // let [num, setNum] = useState(0)
  // return <div className="box" style={{marginTop: '5px', fontSize: '18px'}}>
  //   <span>{num}</span>
  //   <button onClick={()=>{
  //     setNum(num+1)
  //   }}>增加</button>
  //   <button onClick={() => {
  //     setNum(num-1)
  //   }}>减少</button>
  // </div>

  let [state, dispatch] = useReducer(reducer, initialState)
  return <div className="box" style={{marginTop: '5px', fontSize: '18px'}}>
    <span>{state.num}</span>
    <button onClick={()=>{dispatch({
      type: 'plus'
    })}}>增加</button>
    <button onClick={() => {
      dispatch({
        type: 'minus'
      })
    }}>减少</button>
  </div>
}

export default A1

/**
 * useReducer是对useState的升级处理
 *  + 普通需求处理的时候，基本都是useState直接处理，不会使用useReducer
 *  + 但是如果一个组件的逻辑很复杂，需要大量的状态/大量修改状态的逻辑，此时使用useReducer管理这些状态会更好一些
 *    @1 不需要再基于useState一个个的创建状态了
 *    @2 所有状态修改的逻辑，全部统一化处理了
 */