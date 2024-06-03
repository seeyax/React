import React from 'react';
import ReactDOM from 'react-dom/client';
//  多ES6内置API做兼容处理
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import DemoOne from './views/components/DemoOne';
import Dialog from './views/components/Dialog';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <DemoOne title="title - react" x={10} className='box' style={{fontSize:'22px', color:'red'}}>
      <span slot="footer">我是页脚</span>
      <span slot="header">我是页眉</span>
    </DemoOne>
    <br />
    <br />
    <br />
    <Dialog title="友情提示" content="大家出门做好个人防护"/>
    <Dialog content="我们一定要好好学习React!!">
      <button slot="sure">确定</button>
      <button slot="cancel">取消</button>
    </Dialog>
  </div>
)

