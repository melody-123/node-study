// node.js的path模块提供了操作路径的功能，以下为几个常用的api：
// 1. path.resolve()：将路径或路径片段的序列解析为绝对路径。
// 2. path.sep()：返回操作系统的路径分隔符。
// 3. path.parse()：解析路径并返回对象。
// 4. path.basename()：返回路径的基础名称。
// 5. path.dirname()：返回路径的目录名。
// 6. path.extname()：返回路径的扩展名。

// 示例：
const path = require('path');

console.log(path.resolve(__dirname, './index.html')) // D:\node.js\3.path模块\index.html
console.log(path.sep) // \,返回操作系统的路径分隔符,window下为\,linux下为/
// __filename: 当前文件的绝对路径
console.log(__filename) // E:\node-study\3.path模块\1.常用api.js
console.log(path.parse(__filename)) // { root: 'E:\\', dir: 'E:\\node-study\\3.path模块', base: '1.常用api.js', ext: '.js', name: '1.常用api' }

const str = 'E:\\node-study\\3.path模块\\1.常用api.js'
console.log(path.basename(str)) // 1.常用api.js
console.log(path.dirname(str)) // E:\node-study\3.path模块
console.log(path.extname(str)) // .js