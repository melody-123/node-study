// 1.引入express
const express = require('express')
// 2.创建应用对象
const app = express()
// 3.创建中间件检查请求头中的referer是否是127.0.0.1
app.use((req, res, next) => {
    // 获取请求头中的referer
    const referer = req.get('referer')
    console.log(referer)
    if (referer) {
        let url = new URL(referer)
        let hosetname = url.hostname
        if (hosetname !== '127.0.0.1') {
            res.send('非法请求')
            return
        }
    }
    next()
})
const index = require('./10.路由模块化.js')
app.use(index)

app.get('/login', (req, res) => {
    res.send('login')
})

app.listen(3000, () => {
    console.log('running...')
})