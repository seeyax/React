import React from 'react'
import '../index.less'
import ThemeContext from '../ThemeContext'


class VoteMain extends React.Component {

  static contextType = ThemeContext
  // this.props
  render () {
    const { store } = this.context
    console.log(store);
    return <div className="main">
      <p>支持人数：0人</p>
      <p>反对人数：0人</p>
    </div> 
  }
  
}


export default VoteMain