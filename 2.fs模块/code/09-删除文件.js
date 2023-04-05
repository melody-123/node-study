// 在node.js中，可以使用unlink()或者unlinkSync()方法来删除文件。
// 语法如下：
// fs.unlink(path, callback)
// fs.unlinkSync(path)
// 参数使用说明如下：
// path - 文件路径。
// callback - 回调函数，没有参数。
// 代码示例：
const fs = require('fs');
// 异步删除文件
// fs.unlink('./东风破copy2.txt', err => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('删除成功')
// })
// 同步删除文件
// fs.unlinkSync('./东风破copy2.txt')

// 方法三：使用rm()方法删除文件，该方法是Node.js 14.14.0版本新增的方法。
// 语法如下：
// fs.rm(path, options, callback)
// fs.rmSync(path, options)
// 参数使用说明如下：
// path - 文件路径。
// options - 选项，可以是一个对象或者整数。
// callback - 回调函数，没有参数。
// 代码示例：
fs.rm('./山居秋暝-副本.txt', err => {
    if (err) {
        console.log(err)
        return
    }
    console.log('删除成功')
})