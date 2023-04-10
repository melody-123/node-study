
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const urlencoded = bodyParser.urlencoded({ extended: false })
const json = bodyParser.json()

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// 当中间件urlencoded执行完后，会往req对象上添加一个body属性，属性值是一个对象，对象中包含了请求体数据，所以可以通过req.body获取请求体数据。
app.post('/login', urlencoded, (req, res) => {
    console.log(req.body) // 打印用户数据
    res.send(`用户名：${req.body.username}，密码：${req.body.password}`)
})

app.listen(3000, () => {
    console.log('服务启动了')
})