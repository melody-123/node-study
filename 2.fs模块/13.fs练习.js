// 为1-9的文件补0，比如1.txt -> 01.txt
// 1.获取当前目录下的所有文件
const fs = require('fs');
const dirList = fs.readdirSync('./code');
dirList.forEach((item) => {
    let data = item.split('-')
    let [num, name] = data
    if (Number(num) < 10) {
        num = '0' + num
    }
    // 创建新的文件名
    let newName = num + '-' + name
    console.log(newName)
    // 重命名
    fs.renameSync(`./code/${item}`, `./code/${newName}`)
})