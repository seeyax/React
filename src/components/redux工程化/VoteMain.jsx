// import React from 'react'
// import '../index.less'
// import ThemeContext from '../ThemeContext'


// class VoteMain extends React.Component {

//   static contextType = ThemeContext
//   // this.props
//   render () {
//     const { store } = this.context
//     // 获取公共状态信息做绑定
//     let {supNum, oppNum} = store.getState()
//     return <div className="main">
//       <p>支持人数：{supNum}人</p>
//       <p>反对人数：{oppNum}人</p>
//     </div> 
//   }

//   // 第一次渲染完毕，把让组件更新的办法，基于store.subscribe放到事件池中！！
//   // 类组件，让组件更新，有更简单的操作：
//   // 直接基于forceUpdate强制更新即可！！
//   componentDidMount() {
//     const {store} = this.context
//     store.subscribe(() => {
//       this.forceUpdate()
//     })
//   }
  
// }


// export default VoteMain