// 在Node.js中，可以使用rename或renameSync方法来重命名文件或目录。
// 语法如下：
// fs.rename(oldPath, newPath, callback)
// fs.renameSync(oldPath, newPath)
// 参数
// 参数使用说明如下：
// oldPath - 要重命名的文件路径。
// newPath - 文件重命名后的路径。
// callback - 回调函数，没有参数。
// 以下实例演示了如何重命名文件：
// 引入fs模块
const fs = require("fs");
// 异步重命名
fs.rename('./东风破-副本.txt', './东风破copy.txt', err => {
    if (err) {
        console.log(err.code)
        return
    }
    console.log('重命名成功');
})
// 同步重命名
// fs.renameSync('./东风破copy.txt', './东风破copy2.txt');