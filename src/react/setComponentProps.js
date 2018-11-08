/**
 * 更新props，
 * 执行 componentWillMount，componentWillReceiveProps两个生命周期方法
 * 调用 renderComponent 方法，执行重新渲染
 */
import renderComponent from './renderComponent';

export default function setComponentProps(componentInst, props) {
  if (!componentInst._dom) { // 第一次生命周期流程
    if (componentInst.componentWillMount) componentInst.componentWillMount();
  } else {
    // 问题：何时能进到这里面来 ？
    if (componentInst.componentWillReceiveProps) componentInst.componentWillReceiveProps(props);
  }
  componentInst.props = props;

  // 问题：
  // 未实现 shouldComponentUpdate

  renderComponent(componentInst);
}