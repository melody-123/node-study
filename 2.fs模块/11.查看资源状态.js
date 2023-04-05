// 在node.js中，我们可以使用stat或statSync方法来查看资源的详细信息
// 参数
/**
 * description: 查看资源状态
 * @param {string} path 资源路径
 * @param {object} options 配置项
 * @param {function} callback 回调函数,参数为err和stats,stats是一个对象，包含资源的详细信息。
 * @return {object} 返回一个对象，包含资源的详细信息
 */
// 代码示例：
// 异步查看资源状态，获取文件类型，isFile()判断是否是文件，isDirectory()判断是否是文件夹
const fs = require('fs')
fs.stat('./东风破.txt', (err, stats) => {
    if (err) {
        console.log(err)
        return
    }
    // console.log('查看成功', stats)
    console.log('文件类型', stats.isFile())
    console.log('文件夹类型', stats.isDirectory())
})