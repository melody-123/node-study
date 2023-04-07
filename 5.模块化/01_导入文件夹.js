const obj = require('./module')
console.log(obj)
// require使用的注意事项：
// 1. require导入的文件路径必须是相对路径，不能是绝对路径，且不能省略./和../
// 2.js和json文件导入时可以不写后缀，但是node会自动补全后缀，但是如果是其他文件，必须写后缀。
// 3.如果导入的文件是一个文件夹，首先会检查该文件夹下是否有package.json文件，如果有，会读取package.json文件中的main属性，如果没有，会默认导入该文件夹下的index.js文件和index.json文件，如果都没有，会报错。
// 4.导入node_modules文件夹中的文件时，可以省略node_modules文件夹的名称，直接写模块名称，node会自动去node_modules文件夹中查找该模块。
// 5.导入node内置文件时，直接require('模块名称')即可，不需要写路径，node会自动去node内置文件中查找该模块。