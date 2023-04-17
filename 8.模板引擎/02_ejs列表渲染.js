const ejs = require('ejs')

const list = ['张三', '李四', '王五', '赵六']

const str = ejs.render('<ul><% list.forEach(item => { %><li><%= item %></li><% }) %></ul>', { list })

console.log(str)