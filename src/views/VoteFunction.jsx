
// 函数组件：静态组件
const Vote = function Vote (props) {
  let { title } = props
  let supNum = 10, oppNum = 5
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
        supNum++
        console.log(supNum)
      }}>支持</button>
      <button onClick={()=>{
        oppNum++
        console.log(oppNum)
      }}>反对</button>
    </div>
  </div>
}

export default Vote