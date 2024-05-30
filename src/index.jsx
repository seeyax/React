import React from 'react';
import ReactDOM from 'react-dom/client';
//  多ES6内置API做兼容处理
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import { createElement } from './jsxHandle';


const root = ReactDOM.createRoot(document.getElementById('root'));

let styObj = {
  color:'red',
  fontSize: '16px'
}

let x = 10;
let y = 20;

root.render(
  <div>
    <h2 className="title" style={styObj}>珠峰培训</h2>
    <div className="box">
      <span>{x}</span>
      <span>{y}</span>
    </div>
  </div>
)
console.log(
  createElement(
    React.Fragment,
    null,
    createElement(
      'h2',
      {className: 'title', style: styObj},
      'u73E0...'
    ),
    createElement(
      'div',
      { className: 'box'},
      createElement('span',null,x),
      createElement('span',null,y)
    )
  )
)
