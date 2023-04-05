// 1.alloc
let buf = Buffer.alloc(10) // 创建一个10字节的buffer
console.log(buf) // <Buffer 00 00 00 00 00 00 00 00 00 00>
// 用alloc创建的buffer，每个二进制字节都会被初始化为0
// 2.allocUnsafe
let buf_1 = Buffer.allocUnsafe(10) // 创建一个10字节的buffer
console.log(buf_1) // <Buffer 00 00 00 00 00 00 00 00 00 00>
// 用allocUnsafe创建的buffer，每个二进制字节都不会被初始化为0,可能包含敏感数据,但是它比alloc更快，因为它不会初始化内存，所以如果你知道你要写入的数据，它可以提高性能，但是如果你不知道你要写入的数据，它可能会导致安全问题，所以要谨慎使用。
// 3.from
let buf_2 = Buffer.from('hello') // 创建一个buffer，内容为hello
console.log(buf_2) // <Buffer 68 65 6c 6c 6f>
// 4.allocUnsafeSlow
let buf_3 = Buffer.allocUnsafeSlow(10) // 创建一个10字节的buffer
console.log(buf_3) // <Buffer 00 00 00 00 00 00 00 00 00 00>