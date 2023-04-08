// 路由参数是指url路径中的参数
// 获取方式：req.params
app.get(':id.html', (req, res) => {
    res.send(req.params.id)
})