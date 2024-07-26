// import React, { useContext, useState, useEffect } from 'react'
// import VoteFooter from './VoteFooter'
// import VoteMain from './VoteMain'
// import '../index.less'
// import ThemeContext from '../ThemeContext'

// const Vote = function Vote () {
//   const { store } = useContext(ThemeContext)

//   // 获取容器中的公共状态
//   let { supNum, oppNum } = store.getState()

//   // 组件第一次渲染完毕后，把让组件更新的方法,放在store的事件池中
//   let [num, setNum] = useState(0)
//   const update = () => {
//     setNum(num + 1)
//   }
//   // 每一次组件更新，都把最新创建的update放入事件池中，保证update的上级上下文是最新的闭包[num是最新的状态信息]
//   useEffect(() => {
//     // let unsubscribe = store.subscribe（让组件更新的方法）
//     //  + 把让组件更新的方法放在STORE的事件池中
//     //  + 返回的unsubscribe方法执行，可以把刚才放入事件池中的方法移除掉
//     let unsubscribe = store.subscribe(update)
//     // 在上一次组件释放的时候，把上一次放在事件池中的方法移除掉
//     return () => {
//       unsubscribe()
//     }
//   },[num])
  
//   return <div className="vote-box">
//     <div className="header">
//       <h2 className="title">
//         React是很好的前端框架
//       </h2>
//       <span className="num">{supNum + oppNum}</span>
//       <img src="../assets/images/redux的逻辑.png" alt="redux的逻辑" />
//       <img src="../assets/images/redux基础工作流程.png" alt="redux基础工作流程" />
//     </div>
//     <VoteMain/>
//     <VoteFooter/>
//   </div>
// }

// export default Vote


// /**
//  * redux的流程
//  * 1.创建全局公共的容器，用来存储各组件需要的公共信息  const store = createStore([reducer])
//  * 
//  * 2.在组件内部，获取公共状态信息，然后渲染！  store.getState() -> {supNum:10, oppNum:5}
//  * 
//  * 3.把让组件可以更新的方法放在公共容器的事件池中！！ store.subscribe(函数)
//  *    + 后期公共状态改了，事件池中的方法会按照顺序，依次执行，也就是让对应的组件也更新，组件只要更新，就
//  *      可以从store容器中获取最新的状态进行渲染
//  * 
//  * 4.创建容器的时候，需要传递reducer
//  *  + let initial = {...} // 初始状态值
//  *  + const reducer = function reducer(state=initial, action) {
//  *      // state 容器中的状态
//  *      // action 派发的行为对象[必须具备type属性]
//  *    switch(action.type) {
//  *        // 根据传递的type值不同，修改不同的状态信息
//  *        ……
//  *      }
//  *    return state // 返回的信息会替换store容器中的公共状态
//  *  }
//  * 
//  * 5.派发任务，通知reducer执行修改状态 
//  *  + store.dispatch({
//  *      type: xxx,
//  *      ...
//  *    })
//  */


// /**
//  * 笔记
//  * 1.在创建的store容器中，存储两部分内容（各组件需要的公共信息）
//  *  + 公共状态：各组件需要共享/通信的信息
//  *  + 事件池：存放一些方法[让组件可以更新的方法]
//  * 
//  *  特点：当公共状态一但发生改变，会默认立即通知事件池中的方法执行！！
//  *  这些方法的执行，主要目的就是让指定的组件更新；而组件一更新，就可以获取最新的公共状态信息进行渲染！！
//  * 
//  * 2.修改公共容器中的状态，不能直接修改
//  *  + 基于dispatch派发，通知reducer执行
//  *  + 在reducer中去实现状态的更新
//  */ 

// /**
//  * 总结：
//  * redux具体的代码编写顺序
//  *  1.创建store，规划出reducer[当中的业务处理逻辑可以后续不断完善，但是最开始reducer这个架子需要先搭建起来]
//  *  2.在入口中，基于上下文对象，把store放入倒上下文中，需要用到的store的组件，从上下文中获取
//  *  3.在组件基于store，完成公共状态的获取和任务的派发
//  *    + 使用到公共状态的组件，必须像store的事件池中加入让组件更新的办法，只要这样，才可以确保公共状态改变，可以让组件更新，
//  *      才可以获取最新的状态进行绑定
//  * 
//  * 
//  */