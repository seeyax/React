import React from 'react';
import ReactDOM from 'react-dom/client';
//  多ES6内置API做兼容处理
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import App from './App'
import './index.less'
import { Provider } from 'react-redux'

// 使用ANTD组件库
import { ConfigProvider } from 'antd'

import zhCN from 'antd/locale/zh_CN'

// 使用FastClick解决了移动端使用click事件的300ms延迟问题
import FastClick from 'fastclick'
// redux
import store from './store'


FastClick.attach(document.body)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App></App>
    </Provider>
  </ConfigProvider>
)

