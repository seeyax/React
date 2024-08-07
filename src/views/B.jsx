import React from 'react'
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

const B = function A (props) {
  // 1.通过props获取
  // 2.在函数组件中通过react内部提供的Hook函数获取,这样就不需要基于属性处理了
  // console.log(props); // => {history, location, match}
  let history = useHistory()
  let location = useLocation()
  let match = useRouteMatch()
  console.log(history,location,match);
  
  return <div className="box">
    B组件的内容
    <img src="../assets/images/route的传递的私有属性.png" alt="" />
  </div>
}

export default B