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
    <DemoOne title="dhsj" x={10} data={[10,20]} className="box" style={{fontSize:'16px'}}></DemoOne>
  </div>
)
