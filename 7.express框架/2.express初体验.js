// 1.引入express
const express = require('express')
// 2.创建应用对象
const app = express()
// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/home', (request, response) => {
    // 设置响应
    response.send('HELLO EXPRESS')
})
app.post('/login', (req, res) => {
    res.end('login')
})
app.all('*', (req, res) => {
    res.end('404')
})
// 4.监听端口启动服务
app.listen(9000, () => {
    console.log("服务已经启动，9000端口监听中……")
})