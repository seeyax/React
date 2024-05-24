import React from 'react';
import ReactDOM from 'react-dom/client';
//  多ES6内置API做兼容处理
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'


const root = ReactDOM.createRoot(document.getElementById('root'));

class Count extends React.Component {
  state = {
    num: 0
  }
  render() {
    let { num } = this.state
    return <>
      <span>{num}</span>
      <br />
      <button onClick={() => {
        num++
        this.setState({
          num
        })
      }}>累加</button>
      <p>vsd</p>
    </>

  }
}
root.render(
  <Count></Count>
);
