import React from 'react'

class Demo extends React.Component{
  state = {
    arr: [
      {
        id:1,
        title: '新闻'
      },
      {
        id:2,
        title: '体育'
      },
      {
        id:3,
        title: '电影'
      },
    ]
  }
  handle=(item) => {
    console.log(item);
  }
  render() {
    let { arr } = this.state
    return <div>
      {arr.map(item=>{
       let { id, title }= item
        return <span onClick={this.handle.bind(this, item)} 
        style={{
          padding: '5px 10px', 
          marginRight: '10px', 
          border: '1px solid'}} 
          key={id}>
            {title}
          </span>
      })}
    </div>
      
  }
}

export default Demo

/**
  在React中，我们给循环[创建]的元素做'循坏事件绑定'，好还是不好？
    按照常理来讲，此类需求用事件委托处理是最好的
    在React中，我们循环给元素绑定的合成事件，本身就是基于事件委托处理的！！所以无需我们自己单独的设置事件委托的处理机制
 */