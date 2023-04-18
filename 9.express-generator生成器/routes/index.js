var express = require('express');
var router = express.Router();
// 导入formidable
const formidable = require('formidable');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 显示网页表单
router.get('/head', (req, res) => {
  res.render('head');
})

// 处理文件上传
router.post('/head', (req, res) => {
  // 创建form对象
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + '/../public/images', // 上传文件保存的路径
    keepExtensions: true // 保留上传文件的后缀
  });
  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err)
      return
    }
    console.log(files);
    // 服务器保存该图片的访问URL
    const url = '/images' + files.head.newFilename  // 将该路径保存在数据库中
    res.json({ fields, files })
  })
})

module.exports = router;
