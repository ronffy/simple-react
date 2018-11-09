import React from './react';
import ReactDOM from './react-dom';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className="btn">
        <span>{name}</span>：你好{name}
      </div>
    )
  }
}

let a = <App name="ronffy" />;

let b = <div><span>你好：</span>ronffy</div>

console.log('a:', a);
console.log('b:', b);


// ReactDOM.render
ReactDOM.render(
  a,
  document.getElementById('root')
);
