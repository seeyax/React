
/**封装一个对象迭代的方法
 * 基于传统的for/in循环，会存在一些弊端[性能较差(既可以迭代私有的、也可以迭代公有的);只能迭代“可枚举、非symbol类型的属性”...]
 * 解决思路：获取对象所有的私有属性[私有的：不论是否可枚举、不论类型] 
 *  + -->Object.getOwnPropertyNames(arr): 获取对象非Symbol类型的私有属性[无关是否可枚举]
 *  + -->Object.getOwnPropertySymbols(arr): 获取Symbol类型的私有属性
 *  + 获取所有的私有属性 --> let keys = Object.getOwnPropertyNames(arr).concat(Object.getOwnPropertySymbol(arr))
 *  + 可以基于ES6中的Reflect.ownKeys(arr) 代替上述操作[弊端： 不兼容IE]
*/

/**
 * 补充： 一般来讲：内置的属性都是不可枚举的[枚举：可以被列举，例如被for/in,Object.keys()等列举出来的]。自定义属性都是可枚举的
 * 但是我们可以设定成员的枚举型 -->Object.defineProperty()
 */

const each = function (obj, callback) {
  if (obj === null || typeof obj !== "object") throw new TypeError('obj is not a object')
  if (typeof callback !== 'function') throw new TypeError('callback is not a function')
  let keys = Reflect.ownKeys(obj)
  keys.forEach(key => {
    let value = obj[key]
    // 每一次迭代，都把回调函数执行
    callback(value, key)
  })
}


// eslint-disable-next-line no-extend-native
Array.prototype.BB = 200
let arr = [10, 20]
arr[Symbol('AA')] = 100

// let keys = Object.getOwnPropertyNames(arr).concat(Object.getOwnPropertySymbol(arr))
// console.log(keys) // ['0','1','length','Symbol(AA)']

// 获取当前对象所有的私有属性
// let keys = Reflect.ownkeys(arr)
// // console.log(keys) // ['0','1','length','Symbol(AA)']
// keys.forEach(key => {
//   console.log(key, arr[key])
// })

each(arr, (value, key) => {
  console.log(value, key)
})

// createElement: 创建虚拟DOM对象

export function createElement(ele, props, ...children) {
  let virtualDOM = {
    $$typeof: Symbol('react.element'),
    ref: null,
    key: null,
    type: null,
    props: {}
  }
  let len = children.length
  virtualDOM.type = ele
  if (props !== null) {
    virtualDOM.props = {
      ...props
    }
  }
  if (len === 1) virtualDOM.props.children = children[0]
  if (len > 1) virtualDOM.props.children = children
  return virtualDOM
}

/**
 * 为元素设置属性[自定义/内置]的两种方式：
 * @1 元素.属性 = 属性值
 *  + 原理：对于内置属性，是设置在元素的标签上，对于自定义属性来讲，是给对象的堆内存空间中新增成员[不会设置在标签上]
 *  + 获取：元素.属性
 *  + 删除：delete 元素.属性
 * @2 元素.setAttribute(属性，属性值)
 *  + 原理：直接写在元素的标签上
 *  + 获取：getAttribute
 *  + 删除：removeAttribute
 *  二者不能混淆  排除内置属性的特殊性
 * @param {*} virtualDOM a
 * @param {*} container 
 */
/**
 * const root = ReactDOM.createRoot(document.getElementById('root'));

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
 * 
 * @param {
 * } virtualDOM 
 * @param {*} container 
 */

// render：把虚拟DOM变为真实DOM
export function render(virtualDOM, container) {
  let { type, props } = virtualDOM
  if (typeof type === 'string') {
    // 说明存储的是标签名：动态创建这样一个标签
    let ele = document.createElement(type)
    // 为标签设置相关的属性 & 子节点
    each(props, (value, key) => {
      // className的处理，value存储的是样式类名
      if (key === 'calssName') {
        ele.className = value
        return;
      }
      // style的处理,value存储的是样式对象
      if (key === 'style') {
        each(value, (val, attr) => {
          ele.style[attr] = val
        })
        return;
      }
      // 子节点的处理,value 存储的是children对象
      if (key === 'children') {
        let children = value
        if (!Array.isArray(children)) children = [children]
        children.forEach(child => {
          // 子节点是文本节点：直接插入即可
          if (/^(string|number)$/.test(typeof child)) {
            ele.appendChild(document.createTextNode(child))
          }
          // 子节点又是一个virtualDOM：递归处理
          render(child, ele)
        })
        return
      }
      ele.setAttribute(key, value)
    })

    // 把新增的标签，增加到指定容器中
    container.appleChild(ele)
  }
}