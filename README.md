# vue+express+mysql
>Vue 2.0全家桶套餐，包含vue-router2.0和vuex2.0，集成express作为web server

## 技术栈
``` bash
 MVVM框架： Vue 2.0

源码：es6

代码风格检查：eslint

构建工具：webpack

前端路由：vue-router

状态管理：vuex

服务端通讯：vue-axios
```
## 项目构建

``` bash
进入根目录下
# 安装相关包依赖
$ npm install     
若安装失败，请使用淘宝镜像
$ npm install cnpm -g --registry=https://registry.npm.taobao.org
cnpm跟npm用法完全一致，只是在执行命令时将npm改为cnpm

# 启动开发模式 
$ npm run dev

# 构建打包环境
$ npm run build

# 构建带日志的打包环境
$ npm run build --report

# run unit tests
$ npm run unit

# run e2e tests
$ npm run e2e

# run all tests
$ npm test
```
如果你的8080端口被占用，请修改`/config/index.js`文件。
## 目录结构
<pre>
├─.idea               # 编译器配置文件，忽略
├─build
│     │  webpack.base.config.js         # webpack 基础配置
│     │  webpack.dev.config.js          # webpack 开发配置
│     └─ webpack.prod.config.js         # webpack 生产配置
│
├─config
│     │  dev.env.js         
│     │  index.js         #webpack 基础配置
│     │  prod.env.js
│     └─ test.env.js
│
├─node_modules
│
├─server                 #服务端
│     │  api             #相关接口
│     │  index.js        #服务端配置
│     │  server.js       #数据库连接
│     └─ sqlMap.js     #操作数据库汇总
│
├─src                   #前端
│    │  app.vue         # 主vue
│    │  main.js         # 启动配置
│    ├─ route           
│    │     │       
│    │     └─ index.js     # 路由
│    │
│    ├─components       # 组件
│    │      │    
│    │      │ Home.vue   
│    │      │ Login.vue  
│    │      └─User.vue 
│    │
│    └─assets             
│         │            
│         ├─ css                # 公共css
│    	  │
│    	  ├─ font 		# 字体
│    	  │
│    	  │
│         ├─ js 		# 外部导入JS
│    	  │
│    	  │
│    	  └─ img 		# 图片资源
│
│
├── static 
│
├── test 
│  readme.md           # 项目说明
│  index.html          # 首页
└─package.json         # 项目配置
</pre>

## 在dev中和express通讯
请在`config/index.js`的proxyTable中设置代理，比如
```js
proxyTable: {
  '/customer': 'http://localhost:3000'
}