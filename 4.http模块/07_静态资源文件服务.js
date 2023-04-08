const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    const { pathname } = new URL(request.url, 'http://localhost:9000')
    const filePath = __dirname + pathname

    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.setHeader('Content-Type', 'text/html;charset=utf-8')
            response.end('文件读取出错了')
            return
        }
        response.end(data)
    })
})

server.listen(9000, () => {
    console.log('服务器启动成功！')
})