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
    <DemoOne title="title - react" x={10} className='box' style={{fontSize:'22px', color:'red'}}>
      <span slot="footer">我是页脚</span>
      <span slot="header">我是页眉</span>
    </DemoOne>
    {/* <DemoOne title="title-哈哈哈哈哈哈" className='box' style={{fontSize:'16px', color:'red'}} x={59}>
      <span>我有children</span>
    </DemoOne>
    <DemoOne title="title-demo3" className="jkc" x={56} style={{fontSize:'16px', color:'red'}}/> */}
  </div>
)

