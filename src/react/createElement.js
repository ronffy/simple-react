/**
 * jsx片段会被转译成用React.createElement方法包裹的代码
 * 
 * @param {*} tag 如果渲染的是组件，tag的值将是一个函数；否则tag是字符串
 * @param {*} attrs 
 * @param  {...any} children 
 */
export default function createElement(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children,
  }
}