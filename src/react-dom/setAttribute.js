export default function setAttribute(dom, key, value) {
  if (!dom) {
    return;
  }

  // 类名
  if (key === 'className') {
    key = 'class'
  }

  // 事件
  if (/^on\w+/.test(key)) {
    key = key.toLowerCase();
    dom[key] = value;
    return;
  }

  // 样式
  if (key === 'style') {
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || '';
    } else if (value && typeof value === 'object') {
      for (const cssname in value) {
        if (value.hasOwnProperty(cssname)) {
          const cssvalue = value[cssname];
          dom.style[cssname] = typeof cssvalue === 'number' ? `${cssvalue}px` : cssvalue;
        }
      }
    }
    return;
  }

  // ? 这一步的目的是什么
  if (key in dom) {
    dom[key] = value || ''
  }

  // 更新属性
  if (typeof value === 'undefined') {
    dom.removeAttribute(key);
  } else {
    dom.setAttribute(key, value);
  }

}