// 文件读取方法：
// 1.异步读取，readFile()
/**
 * 读取文件
 * @param {string} path 文件路径
 * @param {string} options 读取选项
 * @param {function} callback 回调函数
 * @return {undefined}
 * @api public
 * @example
 * fs.readFile('path', 'utf8', function(err, data) {
 *    if (err) throw err;
 *   console.log(data);
 * });
 */
const fs = require('fs');
// fs.readFile('./东风破.txt', (err, res) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(res.toString())
// })

// 2.同步读取，readFileSync(),该方法有一个参数，参数是文件路径，返回值是读取的内容。
// const res = fs.readFileSync('./山居秋暝.txt')
// console.log(res.toString())

// 3.流式读取，createReadStream(),该方法有两个参数，第一个参数是文件路径，第二个参数是一个对象，对象中有两个属性，一个是flags，一个是encoding，flags的值是r，表示读取，encoding的值是utf8，表示编码格式。

const rs = fs.createReadStream('./山居秋暝.txt', { flags: 'r', encoding: 'utf8' })
// 绑定data事件，当读取到数据的时候，会触发data事件，data事件的回调函数有一个参数，参数就是读取到的数据，每次读取到的数据长度最长为65536字节 => 64kb。
rs.on('data', (chunk) => {
    console.log(chunk.length)
    console.log('文件打开了')
})

rs.on('end', () => {
    console.log('文件读取完毕了')
})