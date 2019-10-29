## SSR template
a ssr project template，关于这个项目的架构思路，可参考文章：[初探SSR，React + Koa + Dva-Core](https://github.com/closertb/closertb.github.io/issues/35)

## 使用步骤
1. npm install // 安装依赖

2. npm start // 开启本地在线调试

3. npm run server // 开启本地服务端渲染调试

## 关于doddle/http
用户名：dom  
密码：123456  

测试步骤:   
 - 点击action菜单, 点击loginFail按钮，请求响应错误处理
 - 测试菜单，点击loginSuccess按钮,响应成功
 - 点击获取数据， 查看请求，query字段处理，获取数据成功
 - 网络调到offline，离线测试, 错误处理

## 关于doddle-build
详情请查看[README][1]

## 关于部署
采用docker，默认使用pm2开启多线程, 如果你本地安装了docker，可本地尝试部署
```sh
docker image build ./ -t ssr

docker run -p 80:8080 ssr // 将docker 8080端口暴露在外部80端口
```
[1]: https://github.com/closertb/doddle/tree/master/packages/doddle-build
