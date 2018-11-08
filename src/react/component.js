/**
 * React库的基类
 * 初始化state、props
 * 定义setState方法
 */
import renderComponent from './renderComponent';

export default class Component {
  constructor(props) {
    this.props = props;
    this.state = {}
  }
  setState(stateChange) {
    Object.assign(this.state, stateChange);
    // 修改state后，执行重新渲染
    renderComponent(this);
  }
}