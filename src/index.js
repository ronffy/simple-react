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

// ReactDOM.render
ReactDOM.render(
  <App name="ronffy" />,
  document.getElementById('root')
);
