// 1.创建文件夹,make directory
// fs.mkdir(path[, options], callback)异步创建
// fs.mkdirSync(path[, options])同步创建
// 参数说明：
/**
 * description: 异步创建文件夹。
 * @param {string} path - 文件夹路径。
 * @param {Object} options - 选项，可以是一个对象或者整数。
 * @param {Function} callback - 回调函数，没有参数。
 * @returns {undefined}
 */
// 代码示例：
const fs = require('fs');
// 异步创建文件夹
// fs.mkdir('../测试创建文件', err => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('创建成功')
// })

// 递归创建文件夹
// fs.mkdir('./a/b/c', { recursive: true }, err => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('创建成功')
// })

// 读取文件夹，readdir，readdirSync，read directory
// fs.readdir('../', (err, files) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(files)
// })

// 删除文件夹，rmdir，rmdirSync，remove directory
// 参数说明：
/**
 * description: 异步删除文件夹。
 * @param {string} path - 文件夹路径。
 * @param {Function} callback - 回调函数，没有参数。
 * @returns {undefined}
 * @returns {undefined}
 */
// 代码示例：
// fs.rmdir('../测试创建文件', err => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('删除成功')
// })

// 递归删除文件夹
// fs.rmdir('./a', { recursive: true }, err => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('删除成功')
// })

// 推荐使用rm，rmSync递归删除文件夹
// fs.rm('./a', { recursive: true }, err => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('删除成功')
// })