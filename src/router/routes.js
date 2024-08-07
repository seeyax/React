
/**
 * 配置路由表：数组，数组中每一项就是每一个需要配置的路由规则
 *  + Redirect：true 此配置是重定向
 *  + from：来源的地址
 *  + to: 重定向的地址
 *  + exact：是否精准匹配
 *  + path: 匹配的路径
 *  + component：渲染的组件
 *  + name: 路由名称（命名路由）
 *  + meta: {} 路由元信息 [包含当前路由的一些信息，当路由匹配后，我们可以拿这些信息做一些事情...]
 *  + children: [] 子路由
 * 
 */
import A from '../views/A'
import A1 from '../views/a/A1'

import { lazy } from 'react'
const routes = [
  {
    redirect: true,
    from: '/',
    to: '/a',
    exact: true
  },
  {
    path: '/a',
    component: A,
    name: 'a',
    meta: {},
    children: [
      {
        redirect: true,
        from: '/a',
        to: '/a/a1',
        exact: true
      },
      {
        path: '/a/a1',
        component: A1,
        name: 'a1',
        meta: {},
      },
      {
        path: '/a/a2',
        ///* webpackChunkName: "AChild" */ 是让A2和A3一起打包
        // 基于这个注释，告诉webpack打包后文件的名字，名字相同的组件，会合并打包到一个JS中
        component: lazy(() => import(/* webpackChunkName: "AChild" */'../views/a/A2')),
        name: 'a2',
        meta: {},
      },
      {
        path: '/a/a3',
        component: lazy(() => import(/* webpackChunkName: "AChild" */'../views/a/A3')),
        name: 'a3',
        meta: {},
      }
    ]
  },
  {
    path: '/b',
    component: lazy(() => import('../views/B')),
    name: 'b',
    meta: {}
  },
  {
    path: '/c',
    component: lazy(() => import('../views/C')),
    name: 'c',
    meta: {}
  },
  {
    redirect: true,
    to: '/a'
  }
]

export default routes

