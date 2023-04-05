// 1.appendFile()，文件追加写入，该方法有三个参数，第一个参数是文件路径，第二个参数是文件内容，第三个参数是回调函数，回调函数有两个参数，第一个参数是err，第二个参数是data，如果写入成功，err为null，data为undefined，如果写入失败，err为错误对象，data为undefined。

/**
 * appendFile()/appendFileSync(), description: 追加写入文件
 * @param {string} path 文件路径
 * @param {string} data 文件内容
 * @param {function} callback 回调函数，回调函数有两个参数，第一个参数是err，第二个参数是data，如果写入成功，err为null，data为undefined，如果写入失败，err为错误对象，data为undefined。
 * @return {undefined}
 */

// 1.引入fs模块
const fs = require('fs')
// 2.调用appendFile()方法，\r是回车符，\n是换行符，\r\n是回车换行符
fs.appendFile('./烟花易冷.txt', '\r\n~~~我听闻，你仍守着孤城', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('异步', data)
    }
})

// 3.使用writeFile()方法追加写入。该方法第三个参数是一个对象，对象中有一个属性是flag，该属性的值是a，表示追加写入，默认是覆盖。
fs.writeFile('./烟花易冷.txt', '\r\n~~~城郊牧笛声，落在那座野村', { flag: 'a' }, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('异步', data)
    }
})