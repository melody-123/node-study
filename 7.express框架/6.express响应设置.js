// express封装了一个api来方便给客户端响应数据，并且兼容原生http模块的获取方式
app.get(':id.html', (req, res) => {
    // 1.兼容原生http模块的获取方式
    res.setHeader('Content-Type', 'text/html;charset=utf-8') // 设置响应头
    res.statusCode = 200 // 设置响应状态码
    res.setMessage = 'OK' // 设置响应状态消息
    res.write('<h1>你好</h1>') // 设置响应体
    res.end('你好') // 结束响应

    // 2.使用express提供的api获取参数
    res.status(200) // 设置响应状态码
    res.set('Content-Type', 'text/html;charset=utf-8') // 设置响应头
    res.send('<h1>你好</h1>') // 设置响应体(send响应中午不乱码),send()方法会自动设置响应头，所以不需要再设置响应头
    // 链式调用
    res.status(200).set('Content-Type', 'text/html;charset=utf-8').send('<h1>你好</h1>')

    // 3.其他api
    res.download('./xxxxxx') // 提示下载
    res.redirect('http://www.baidu.com') // 重定向
    res.json({ name: 'zs', age: 18 }) // 响应json数据
    res.sendfile(__dirname + './home.html') // 响应文件
})