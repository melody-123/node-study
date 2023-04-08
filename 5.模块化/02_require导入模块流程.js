// require导入自定义模块的基本流程
// 1.将相对路径转换为绝对路径
// 2.缓存检查
// 3.读取目标文件代码
// 4.包裹为一个函数并执行(自执行函数)。通过arguments.callee.toString()可以查看自执行函数的代码
// 5.缓存目标文件的module.exports对象(缓存模块的值)
// 6.返回目标文件的module.exports对象