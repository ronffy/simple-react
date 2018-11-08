## 吾言

### fork过来做什么？

- 作者原项目的一些实现，尤其是模块分组我不能苟同，所以需要修改
- 作者原项目是实现到 react16 以前，我想实现到 react16

### 特别说明

作者原项目是配合讲解文档的，但是因为我会对项目有较大的改动，跟原文档会有不少的出入，所以此处将原文档的 README 删掉


# simple-react

实现到 react16

一个极简的React框架，用于说明React实现原理，请不要用于生产环境

实现了 ReactDOM.render ，组件，生命周期，diff，setState 等核心功能


## 介绍

### v1.0分支

基础组件、生命周期、基本render方法等

### v2.0分支

diff算法

### v3.0分支

setState异步更新

## 运行
```bash
git clone https://github.com/ronffy/simple-react.git
cd simple-react
npm install
npm run dev
```

## 使用
为了简单起见，并没有分开库代码和应用代码，可以直接修改`src/index.js`来使用
```jsx
// src/index.js
import React from './react'
import ReactDOM from './react-dom'

class App extends React.Component {
    render() {
        return <h1>Hello,World!</h1>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);
```


## 遗留问题

- diff 算法

- state 更新的延迟

- 无 shouldComponentUpdate 的实现

- componentDidMount 理应在组件生成原声DOM后触发，但目前是生成虚拟DOM后触发的

- 无 refs 的实现

- 无 componentWillUnMount 的实现


## LISCENSE
MIT
