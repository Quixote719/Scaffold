项目技术栈:

服务器: Koa

客户端: React, React-Router, Mobx, antd

语言: es6, less

打包工具: Webpack

语言规范校正: eslint

测试框架: Jest


安装:
1. 拷贝静态资源到build目录中 (无需重复执行若res文件不变化)
```
npm run setup
```

2. 启动node服务器, 动态打包
```javascript
npm run start
```

3. 若需要修改服务器文件, 则启动下面脚本监听. 若不修改服务器文件, 则无需执行
```javascript
npm run watch:server
```
