var express = require('express');
var router = express.Router();

// 记账本列表
router.get('/account', function (req, res, next) {
  res.render('list');
});

// 添加记录
router.get('/account/create', (req, res, next) => {
  res.send('添加记录')
})

// 新增记录
router.post('/account', (req, res, next) => {
  // 获取请求体的数据
  console.log(req.body)
  res.send('新增记录')
})

module.exports = router;
