// 1.导入http模块
const http = require('http');
// console.log(http);
// 2.创建http服务,返回一个http.Server实例,可以理解为一个web服务器,可以监听客户端的请求,并且可以给客户端响应.
// createServer方法接收一个回调函数,该回调函数有两个参数,分别是request和response，分别代表客户端的请求和服务端的响应，回调函数会在每次客户端请求的时候执行,并且会把请求对象和响应对象传递给回调函数,通过这两个对象,我们就可以获取客户端的请求信息,也可以给客户端响应内容.
// request:客户端请求对象,可以获取客户端的请求信息---response:服务端响应对象，给客户端的响应内容。
const server = http.createServer((request, response) => {
    // response.end()方法用来给客户端响应内容,并且结束响应,如果不调用该方法,客户端会一直处于等待状态.
    response.setHeader('content-type', 'text/html;charset=utf-8')
    console.log(request.method)
    console.log(request.url)
    console.log(request.httpVersion)
    response.end('你好');
})

// 3.监听端口号,启动服务,默认情况下,http服务会监听80端口,如果80端口被占用了,可以监听其他端口号,但是一般不会这样做.
// listen方法参数：端口号，回调函数，回调函数会在服务启动成功之后执行.
server.listen(9000, () => {
    console.log('服务启动成功了')
})

// 4.注意事项
// 4.1.命令行ctrl+c可以停止服务
// 4.2.当服务启动后，更新代码必须重启服务才能生效
// 4.3.响应内容乱码解决方案：response.setHeader('content-type', 'text/html;charset=utf-8')
// 4.4.端口号被占用：Error：listen EADDRINUSE：address already in use :::9000
//     1）关闭当前正在运行监听端口的服务(使用较多)
//     2）修改其他端口号
// 4.5.HTTP协议默认端口是80，https默认端口是443,HTTP服务开发常用端口有3000，8080，8090,9000等。
// 4.6.如果端口被其他程序占用，可以使用‘资源监视器’找到占用端口的程序，然后使用‘任务管理器’关闭对应的程序。