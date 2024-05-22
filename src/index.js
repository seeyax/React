import React from 'react';
import ReactDOM from 'react-dom/client';
//  多ES6内置API做兼容处理
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>珠峰培训</div>
);
