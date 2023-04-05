// 复制一个文件
// 1.引入fs文件系统模块
const fs = require('fs')

// 2.调用fs模块的copyFile方法
// 3.监听copyFile方法的执行结果
// 4.如果出错，打印错误信息
// 5.如果成功，打印成功信息

/**
 * 方式一：readFileSync + writeFileSync
 */
// const rs = fs.readFileSync('./山居秋暝.txt') // 读取文件
// console.log(rs.toString())
// fs.writeFileSync('./山居秋暝-副本.txt', rs) // 写入文件

/**
 * 方式二：流式操作，这种方法效率更高，更节约内存空间
 */
// // 1.创建一个可读流对象
// const rs = fs.createReadStream('./烟花易冷.txt')
// // 2.创建一个可写流对象
// const ws = fs.createWriteStream('./烟花易冷-副本.txt')
// // 3.监听可读流对象的data事件
// rs.on('data', (chunk) => {
//     // 4.将读取到的数据写入到可写流对象中
//     ws.write(chunk)
// })

/**
 * 方式三：copyFile
 */
fs.copyFile('./东风破.txt', './东风破-副本.txt', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('文件复制成功')
    }
})