const ejs = require('ejs');

// 字符串
let china = '中国';
let name = '张三';
// 1.模板字符串
let str = `我是${name},我来自${china}`;
console.log(str); // 我是张三,我来自中国

// 2.ejs模板引擎
let str2 = ejs.render('<%= name %>来自<%= china %>', { name, china });
console.log(str2)