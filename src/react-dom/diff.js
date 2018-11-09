/**
 * diff 算法原则
 * - 对比当前真实的DOM和虚拟DOM，在对比过程中直接更新真实DOM
 * - 只对比同一层级的变化
 */

import isSameNodeType from './isSameNodeType'

/**
 * @param {HTMLElement} dom 真实DOM
 * @param {vnode} vnode 虚拟DOM
 * @param {HTMLElement} container 容器
 * @returns {HTMLElement} 更新后的DOM
 */
export function diff(dom, vnode, container) {

  const ret = diffNode(dom, vnode);

  if (container && ret.parentNode !== container) {
    container.appendChild(ret);
  }

  return ret;

}

/**
 * diff 算法的实现
 * @param {HTMLElement} dom 真实DOM
 * @param {vnode} vnode 虚拟DOM
 * @returns {HTMLElement} 更新后的DOM
 */
function diffNode(dom, vnode) {

  let out = dom;

  // 文本节点
  if (typeof vnode === 'string' || typeof vnode === 'number') {

    // 如果当前的DOM就是文本节点，则直接更新内容
    if (dom && dom.nodeType === 3) {
      if (dom.textContent !== vnode) {
        dom.textContent = vnode;
      }
    } else {
      // 如果DOM不是文本节点，则新建一个文本节点DOM，并移除掉原来的
      const out = document.createTextNode(vnode);
      if (dom && dom.parentNode) {
        dom.parentNode.replaceChild(out, dom);
      }
    }

    return out;
  }

  if (typeof vnode.tag === 'function') {
    return diffComponent(dom, vnode);
  }

  // 原生 dom - 非文本节点

  // - 如果 vnode 对应真实 DOM 不存在
  if (!dom || !isSameNodeType(dom, vonde)) {
    const out = document.createElement(vnode.tag);
    if (dom) {
      if (dom.childNodes && dom.childNodes.length) {
        [...dom.childNodes].map(out.replaceChild); // 将原来的子节点移到新节点下
      }

      if (dom.parentNode) {
        dom.parentNode.replaceChild(out, dom); // 移除掉原来的DOM对象
      }
    }
  }

  // 对比子节点
  if (vnode.children && vnode.children.length > 0 || (out.childNodes && out.childNodes.length > 0)) {
    diffChildren(out, vnode.children);
  }

  diffAttributes(out, vnode);
  
  // 1，设置属性
  const attrs = vnode.attrs;
  if (attrs) {
    for (const key in attrs) {
      if (attrs.hasOwnProperty(key)) {
        const value = attrs[key];
        setAttribute(out, key, value);
      }
    }
  }

  return out;
}