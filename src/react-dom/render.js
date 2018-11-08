/**
 * render方法的作用就是将虚拟DOM渲染成真实的DOM
 */
import setAttribute from './setAttribute';
import createComponent from '../react/createComponent';
import setComponentProps from '../react/setComponentProps';

const _render = (vnode) => {
  if (vnode === undefined) return;

  // 文本节点
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    const textNode = document.createTextNode(vnode);
    return textNode
  }
  // 组件节点
  if (typeof vnode.tag === 'function') {
    const component = createComponent(vnode.tag, vnode.attrs);
    component._render = _render;
    setComponentProps(component, vnode.attrs);
    return component._dom;
  }

  // 原生dom节点
  const out = document.createElement(vnode.tag);
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
  // 2，设置子节点
  vnode.children.forEach(child => render(child, out));
  return out;
}

const render = (vnode, container) => {
  container.appendChild(_render(vnode))
}

export {
  _render
};

export default render