
### 创建项目
1. 通过脚手架创建项目的时候采用下面的方式
```
create-react-app my-app --typescript
```
2. 通过官网给出的步骤引入 [antd](https://ant.design/docs/react/use-in-typescript-cn)，然后一步步实现按需引入。
* 注意必要要安装下面几个包
```
npm i react-app-rewired --save
npm i less --save
npm i less-loader --save
```

3. 执行到这一步，如果通过 `npm run eject` 将包显示出来，那么再次 `npm run start` 会报错
```
Cannot find module 'react-scripts/package.json'
```

* 解决方法：安装新的eract-scripts
```
npm install react-scripts --save-dev
```

4. 模块化处理（css in js）
`styled-components`
* 采用css module的方式没有成功

### 引入组件
- 引入 react 组件的时候不能在后面加上.tsx 后缀

### 解决报错
#### `Useless constructor no-useless-constructor`
构造函数缺少state，加上state就好了
```
constructor () {
  this.state = {};
}
```

#### 设置代理
1. 如果是字符串，那么直接在pakage.json里面设置
```
"proxy": "http://localhost:3001"
```
2. 如果是obj，那么按照下面步骤依次执行：
* npm install http-proxy-middleware
* src文件夹根目录下创建 setupProxy.js 文件
* 代码如下
```
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:5000/' }));
  app.use(proxy('/*.svg', { target: 'http://localhost:5000/' }));
};
```