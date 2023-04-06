// response.statusCode: 设置响应状态码
// response.setHeader('响应头名称', '响应头值'): 设置响应头
// response.statusMessage: 设置响应状态码对应的状态消息, 默认是'OK'(用得少)
// response.write('响应体'): 设置响应体
// response.end('响应体'): 设置响应体, 并结束响应
// write和end的两种使用情况：
// 1. write可以多次调用, end只能调用一次
// 2. write可以在end之前调用, end必须在write之后调用
// write和end结合使用，响应体相对分散
// response.write('hello');
// response.write('xxx');
// response.end(); // 结束响应，每一个请求在处理时必须要执行end方法
// response.end('hello'); // 单独使用end方法，响应体相对集中

// 1. 引入http模块
const http = require('http');

// 2. 创建服务器
const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.write('hello world')
    response.end()
})

// 3. 监听请求
server.listen(9000, () => {
    console.log('服务器启动成功了');
})