// createWriteStream流式写入，适合大文件，一次性写入会占用大量内存，而流式写入会分批写入，不会占用大量内存，但是速度会慢一些，适合大文件，小文件还是一次性写入比较好，因为速度快，不会占用内存。
// 语法：fs.createWriteStream(path[, options])
/**
 * createWriteStream(), description: 创建一个可写流
 * @param {string} path 文件路径
 * @param {object} options 可选参数，是一个对象，对象中有两个属性，一个是flags，一个是encoding，flags的值是w，表示写入，encoding的值是utf8，表示编码格式。
 * @return {object} 返回一个可写流对象
 * @example
 * const fs = require('fs')
 * const ws = fs.createWriteStream('./烟花易冷.txt', { flags: 'w', encoding: 'utf8' })
 * ws.write('~~~我听闻，你仍守着孤城')
 * ws.write('~~~城郊牧笛声，落在那座野村')
 * ws.end()
 * ws.on('finish', () => {
 *    console.log('写入完成')
 * })
 * ws.on('error', (err) => {
 *   console.log(err)
 * })
 */

// 需求：创建一个文件山居秋暝.txt，写入内容：空山新雨后，天气晚来秋;明月松间照，清泉石上流。
// 1.引入fs模块，fs是node内置模块，不需要安装，直接引入即可，node使用CommonJS规范，所以使用require引入模块。
const fs = require('fs');

// 2.创建一个可写流对象，该对象有两个参数，第一个参数是文件路径，第二个参数是一个对象，对象中有两个属性，一个是flags，一个是encoding，flags的值是w，表示写入，encoding的值是utf8，表示编码格式。
const ws = fs.createWriteStream('./山居秋暝.txt')

// 3.调用write方法，该方法有一个参数，参数是写入的内容，该方法返回一个布尔值，如果返回true，表示缓存区已满，如果返回false，表示缓存区未满。
ws.write('空山新雨后，天气晚来秋;\r\n')
ws.write('明月松间照，清泉石上流。')

ws.close() // 关闭可写流，关闭后会触发finish事件，如果不关闭，不会触发finish事件。
