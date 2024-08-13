import { Navigate } from 'react-router-dom'
import { lazy } from 'react'
import A from '../views/router v6/A.jsx'

const routes = [{
  path: '/',
  component: () => <Navigate to='/a' />
}, {
  path: '/a',
  name: 'a',
  component: A,
  meta: {},
  children: [{
    path: '/a/a1',
    name: 'a1',
    component: lazy(() => import(/* webpackChunkName: "Achild" */'../views/a/A1.jsx')),
    meta: {}
  }, {
    path: '/a/a2',
    name: 'a2',
    component: lazy(() => import(/* webpackChunkName: "Achild" */'../views/a/A2.jsx')),
    meta: {}
  }, {
    path: '/a/a3',
    name: 'a3',
    component: lazy(() => import(/* webpackChunkName: "Achild" */'../views/a/A3.jsx')),
    meta: {}
  }]
}, {
  path: '/b',
  name: 'b',
  component: lazy(() => import('../views/router v6/B.jsx')),
  meta: {}
}, {
  path: '/c/:id?/:name?',
  name: 'c',
  component: lazy(() => import('../views/router v6/C.jsx')),
  meta: {}
}, {
  path: '*',
  component: () => {
    return <Navigate to={{
      pathname: '/a',
      search: '?from=404'
    }} />
  }
}]

export default routes