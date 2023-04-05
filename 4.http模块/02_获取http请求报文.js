// 想要获取请求的数据，需要使用http模块的request对象
// request.method---获取请求方式
// request.url---获取请求地址
// request.headers---获取请求头
// request.httpVersion---获取http协议版本
// request('url').on('data', function(chunk){})---获取请求体
// request('url').on('end', function(){})---获取请求体
// request('url').parse(request.url).pathname---获取url请求路径
// request('url').parse(request.url, true).query---获取url参数

// 注意事项：
// 1.request.url只能获取到url中的请求路径及查询字符串，不能获取到url中的域名及协议内容。
// 2.request.headers将请求信息转化成一个对象，并将属性名转成小写。
// 3.关于路径，如果访问网站时，只填写了IP地址或者是域名信息，此时请求的路径为/
// 4.关于favicon.ico：这个请求时属于浏览器自动发送的请求。

// 1.导入http模块
const http = require('http')

// 2.创建http服务,返回一个http.Server实例,可以理解为一个web服务器,可以监听客户端的请求,并且可以给客户端响应.
const server = http.createServer((request, response) => {
    let body = '' // 用来存储请求体
    request.on('data', chunk => {
        body += chunk // 拼接请求体
    })

    request.on('end', () => {
        console.log('请求体', body)
        response.end('Hello World')
    })
})

server.listen(9000, () => {
    console.log('服务启动成功了')
})