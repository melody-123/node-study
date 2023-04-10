// express框架封装了一些api，方便获取请求报文中的参数，并且兼容原生http模块的获取方式
// 导入express
const express = require('express')
// 创建应用对象
const app = express()
// 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/home', (request, response) => {
    // 1.兼容原生http模块的获取方式
    console.log(request)
    console.log(request.url)
    console.log(request.method)
    console.log(request.headers)
    console.log(request.httpVersion)
    // 2.使用express提供的api获取参数
    console.log(request.query) // 获取get请求参数
    // console.log(request.body) // 获取post请求参数
    console.log(request.get('host')) // 获取请求头
    console.log(request.path) // 获取请求路径
    response.end('HELLO EXPRESS')
})

app.listen(9000, () => {
    console.log("服务已经启动，9000端口监听中……")
})