// 练习: 创建一个http服务器,监听9000端口。
// 1.请求类型get，请求地址/login，相应结果：登录成功
// 2.请求类型get，请求地址/register，相应结果：注册成功

// 1.导入http模块
const http = require('http');

// 2.创建http服务器
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    // 判断请求类型是否为get
    let method = request.method
    // 判断请求地址是否为/login
    // 判断请求地址是否为/register

    // let pathname = new URL(request.url, 'http://localhost:9000').pathname;
    let pathname = request.url
    if (method === 'GET' && pathname === '/login') {
        response.end('登录成功')
    } else if (method === 'GET' && pathname === '/register') {
        response.end('注册成功')
    } else {
        response.end('hello world')
    }
})

// 3.监听9000端口
server.listen(9000, () => {
    console.log('服务器启动成功,9000端口监听中...');
})