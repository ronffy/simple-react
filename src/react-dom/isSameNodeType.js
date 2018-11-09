/**
 * 判断原生 dom 和虚拟 dom 是否是同一种类型的 node 节点
 * @param {*} dom 
 * @param {*} vnode 
 */
export default function isSameNodeType(dom, vnode) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return dom.nodeType === 3;
  }

  if (typeof vnode.tag === 'string') {
    return dom.nodeName.toLowerCase() === vnode.tag.toLowerCase();
  }

  return dom && dom._component && dom._component.constructor === vnode.tag;
}