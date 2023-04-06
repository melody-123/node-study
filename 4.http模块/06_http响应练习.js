// 需求：搭建http服务器，响应一个4行3列的表格，并且要求表格隔行换色，且点击单元格能够高亮显示。
// 1. 加载http模块
const http = require('http')
// 2. 创建服务器
// const server = http.createServer((request, response) => {
//     // 3. 设置响应头
//     response.setHeader('Content-Type', 'text/html;charset=utf-8')
//     // 4.读取文件
//     const fs = require('fs')
//     fs.readFile(__dirname + '/table.html', (err, data) => {
//         if (err) {
//             return console.log('读取文件失败！')
//         }
//         // 5. 响应结束
//         response.end(data)
//     })
// })


// 引入外部资源
const server = http.createServer((request, response) => {
    const fs = require('fs')
    const { pathname } = new URL(request.url, 'http://localhost:9000')
    if (pathname === '/') {
        const html = fs.readFileSync(__dirname + '/table.html')
        response.end(html) // 5. 设置响应体，响应结束
    } else if (pathname === '/table.css') {
        const css = fs.readFileSync(__dirname + '/table.css')
        response.end(css) // 5. 设置响应体，响应结束
    } else {
        response.statusCode = 404
        response.end('<h1>404 Not Found</h1>') // 5. 设置响应体，响应结束
    }
})

// 6. 监听端口http://localhost:9000
server.listen(9000, () => {
    console.log('服务器启动成功！')
})