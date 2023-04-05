// 我们可以借助toString()方法将Buffer转化为字符串，这个方法默认按照utf-8编码的方式转换
let buf_4 = Buffer.from('hello')
console.log(buf_4.toString()) // hello
// 我们可以借助from()方法将字符串转化为Buffer
let buf_5 = Buffer.from('hello')
console.log(buf_5) // <Buffer 68 65 6c 6c 6f>

// buffer的读写，buffer的读写是通过索引来进行的，索引从0开始，最大值为buffer的长度减1
let buf_6 = Buffer.from('hello')
console.log(buf_6[0]) // 104
console.log(buf_6[0].toString(2)) // 这个toString()方法可以将数字转化为二进制，八进制，十六进制

// buffer的写入
let buf_7 = Buffer.alloc(10)
buf_7[0] = 0x61
console.log(buf_7) // <Buffer 61 00 00 00 00 00 00 00 00 00>