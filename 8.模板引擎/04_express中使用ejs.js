const express = require('express')

const ejs = require('ejs')
// 导入path
const path = require('path')

// 创建应用对象
const app = express()
// 设置模板引擎
app.set('view engine', 'ejs')

// 设置模板文件存放的目录, 模板文件：具有模板语法内容的文件
app.set('views', path.join(__dirname, './view'))

// 创建路由
app.get('/home', (req, res) => {
    // 渲染模板文件，res.render('模板的文件名', '模板的数据对象')
    let title = '这是返回的内容'
    res.render('home', { title })
    // 创建模板文件

})

app.listen(3000, () => {
    console.log('服务已启动')
})