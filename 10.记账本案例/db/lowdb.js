// lowdb的使用
// 安装1.0.0版本 npm i lowdb@1.0.0
// 导入lowdb
const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
// 获取db对象
const db = lowdb(adapter)
// 初始化数据
// db.defaults({ account: [] }).write()

// 写入数据
// db.get('account').push({ id: 2, name: '张三', money: 100 }).write()

// 获取单条数据
// const data = db.get('account').find({ id: 2 }).value()
// console.log(data)

// 获取数据
// const data = db.get('account').value()
// console.log(data)

// 删除数据
// const res = db.get('account').remove({ id: 2 }).write()
// console.log(res)

// 更新数据
// const res = db.get('account').find({ id: 1 }).assign({ name: '李四' }).write()
// console.log(res)