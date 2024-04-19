# taro-boot

taro 项目模板（同时支持 h5 + 小程序 + rn）

### 特性

- 基于 React Navigation 路由管理 + 拦截鉴权
- 基于 Redux Toolkit 状态管理 + 持久化
- 基于 axios 的 HTTP 请求库
- 基于 AsyncStorage 的本地存储

### 安装

- vscode 安装工作区推荐的插件
- .vscode/settings.json 为工作区设置，不建议覆盖已有配置（可添加其他配置）

### 环境变量

用于整个项目的参数，包括编译阶段+运行时用到的参数

在运行时使用环境变量：process.env.xxx

- .env 通用
- .env.development 本地开发环境
- .env.production 生产环境
- .env.test 预发布环境

### HTTP 请求库

utils/http/axios -> Requester

- 初始化配置：index -> createRequester 中传入 RequestOptions，所有配置参考 config 文件
- 发起请求单独配置（优先级最高）：get/post/put/delete 第二个参数传入 RequestOptions

配置优先级：发起请求配置 > createRequester 配置 > config 文件配置 > axios 配置

### 路由拦截

请在 router/routes 中配置页面

### 一些特殊文件夹含义

- enums：TS 枚举值
- logics：与业务和框架耦合的全局逻辑代码
- settings：运行时的参数设置
- utils：完全通用的工具代码（可直接拖到其他项目也能使用）
- hooks：React Hooks
