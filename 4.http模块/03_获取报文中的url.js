
// 1.导入http模块
const http = require('http')
const url = require('url')

// 2.创建http服务,返回一个http.Server实例,可以理解为一个web服务器,可以监听客户端的请求,并且可以给客户端响应.
const server = http.createServer((request, response) => {
    // .parse()方法可以将一个url字符串转换成一个url对象,参数1是url字符串,参数2是一个布尔值,如果为true,则会把url中的查询字符串转换成一个对象,如果为false,则不会转换，默认为false
    let res = url.parse(request.url)
    console.log(res)
    response.end('Hello World')
})

server.listen(9000, () => {
    console.log('服务启动成功了')
})