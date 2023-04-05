// fs模块在对资源进行操作时，有两种路径写法：
// 1.绝对路径：从盘符开始写起，写到文件的完整路径
// windows：C:\Users\lenovo\Desktop\Node.js\2.fs模块\12.路径问题.js
// linux：/home/lenovo/Desktop/Node.js/2.fs模块/12.路径问题.js
// 2.相对路径：相对于当前文件的路径
// ./test.txt：当前目录，等价于 test.txt
// ../：上一级目录
// ../../：上两级目录
// ...：以此类推

// __dirname：保存着当前文件所在目录的绝对路径，类似于一个全局变量
console.log(__dirname);