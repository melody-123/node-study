var express = require('express');
var router = express.Router();

// 导入lowdb
const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../data/db.json')
// 获取db对象
const db = lowdb(adapter)
// 引入shortid
const shortid = require('shortid')

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
  // shortid生成id
  const id = shortid.generate()
  // 将数据保存到db.json中
  db.get('account').unshift({ id: id, ...req.body }).write()
  res.send('新增记录')
})

module.exports = router;
