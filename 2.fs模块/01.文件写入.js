/**
 * 需求：
 * 1.创建一个文件烟花易冷.txt
 * 2.写入内容：浮屠塔断了几层断了谁的魂
 */

// 1.引入fs模块，fs是node内置模块，不需要安装，直接引入即可，node使用CommonJS规范，所以使用require引入模块。
const fs = require('fs');

// 2.writeFile方法,该方法是异步写入文件的，writeFile方法有三个参数,该方法第三个参数是一个对象，对象中有一个属性是flag，该属性的值是a，表示追加写入，默认是覆盖。
/**
 * writeFile(), description: 写入文件
 * @param {string} path 文件路径
 * @param {string} data 文件内容
 * @param {function} callback 回调函数，回调函数有两个参数，第一个参数是err，第二个参数是data，如果写入成功，err为null，data为undefined，如果写入失败，err为错误对象，data为undefined。
 * @return {undefined}
 */
fs.writeFile('./烟花易冷.txt', '歌词：浮屠塔断了几层断了谁的魂', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log('异步', data)
    }
});
console.log('写入成功了');

// 3.同步写入方法fs.writeFileSync()，该方法有两个参数，第一个参数是文件路径，第二个参数是文件内容，如果写入成功，返回undefined，如果写入失败，会抛出错误。
const res = fs.writeFileSync('./东风破.txt', '歌词：谁在用琵琶弹奏一曲东风破');
console.log('同步', res);
console.log('写入成功了2');

// 4.fs.appendFile()，文件追加写入，该方法有三个参数，第一个参数是文件路径，第二个参数是文件内容，第三个参数是回调函数，回调函数有两个参数，第一个参数是err，第二个参数是data，如果写入成功，err为null，data为undefined，如果写入失败，err为错误对象，data为undefined。
/**
 * appendFile()/appendFileSync(), description: 追加写入文件
 * @param {string} path 文件路径
 * @param {string} data 文件内容
 * @param {function} callback 回调函数，回调函数有两个参数，第一个参数是err，第二个参数是data，如果写入成功，err为null，data为undefined，如果写入失败，err为错误对象，data为undefined。
 * @return {undefined}
 */