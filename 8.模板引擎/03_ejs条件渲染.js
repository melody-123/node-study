/**
 * 需求：在页面上显示一个用户的信息，如果用户存在，显示用户的信息，如果用户不存在，显示用户不存在
 */

const flag = false

const ejs = require('ejs')

const result = ejs.render(`
    <% if(flag) { %>
        <span>用户名：zhangsan</span>
    <% }else{ %>
        <span>用户不存在</span>
    <% } %>
`, { flag })

console.log(result)