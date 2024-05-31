import React from 'react';
import ReactDOM from 'react-dom/client';
//  多ES6内置API做兼容处理
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import DemoOne from './views/DemoOne';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    珠峰培训
    <DemoOne title="react" x={10} className='box' style={{fontSize:'22px'}}></DemoOne>
    <DemoOne title="哈哈哈哈哈哈" className='box' style={{fontSize:'22px'}}></DemoOne>
  </div>
)

