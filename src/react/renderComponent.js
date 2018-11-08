/**
 * renderComponent方法用来渲染组件
 * setState方法中会直接调用这个方法进行重新渲染
 * 按序执行 componentWillUpdate，componentDidUpdate，componentDidMount几个生命周期方法
 */

export default function renderComponent(componentInst) {
  let _dom;
  const renderer = componentInst.render();

  if (componentInst._dom && componentInst.componentWillUpdate) {
    componentInst.componentWillUpdate();
  }

  _dom = componentInst._render(renderer);

  if (componentInst._dom) {
    if (componentInst.componentDidUpdate) componentInst.componentDidUpdate();
  } else {
    if (componentInst.componentDidMount) componentInst.componentDidMount();
  }

  const parentNode = componentInst._dom && componentInst._dom.parentNode;
  if (parentNode) {
    parentNode.replaceChild(_dom, componentInst._dom)
  }

  _dom._component = componentInst;
  componentInst._dom = _dom;

}