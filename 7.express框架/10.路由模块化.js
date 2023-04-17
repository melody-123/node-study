// 引入express框架
const express = require('express');
// 创建路由对象
const router = express.Router();
// 创建路由规则
// 创建路由
router.get('/admin', (req, res) => {
    res.send('前台首页')
})

router.get('/list', (req, res) => {
    res.send('前台列表页')
})


// 导出路由对象
module.exports = router

// 在需要的文件夹里引入后，通过app.use()调用，如：app.use(router)