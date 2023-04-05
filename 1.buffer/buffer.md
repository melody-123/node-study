# 一、概念：Buffer是nodejs的内置模块
## 1.Buffer：缓冲器，是一个类似于Array的对象，用于表示固定长度的字节序列。
## 2.本质是一段内存空间，用来存储二进制数据的。
# 二、特点：
## 1.Buffer大小固定且无法调整。
## 2.Buffer性能较好，因为可以直接对计算机内存进行操作。
## 3.每个元素的大小为1字节(byte)，8个bit为1byte。
# 三、使用：三种创建方式
## 1.alloc
<`
    let buf = Buffer.alloc(10) // 创建一个10字节的buffer
`>
## 2.allocUnsafe
## 3.from