/**
 * createComponent方法用来创建组件实例，
 * 将函数定义组件扩展为类定义组件，统一后续处理方式
 */
import Component from './Component'

export default function createComponent(component, props) {
  let inis;

  // 如果是类定义组件，则直接返回实例
  if (component.prototype && component.prototype.render) {
    inis = new component(props);
  } else {
    // 如果是函数定义组件，则将其扩展为类定义组件
    inis = new Component(props);
    inis.constructor = component;
    inis.render = function() {
      return this.constructor(props);
    }
  }

  return inis;

}