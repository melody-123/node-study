// 1.中间件概念：本质是一个回调函数，接受三个参数：request、response、next，可以像路由回调一样访问请求对象request和响应对象response。
// 2.中间件作用：使用函数封装公共操作，简化代码，提高开发效率。
// 3.中间件分类：全局中间件、局部中间件、内置中间件、第三方中间件、错误处理中间件、自定义中间件等。
// 4.中间件使用：app.use()，app.use()可以使用多次，中间件按照顺序执行。
// 5.中间件执行顺序：全局中间件 -> 路由中间件 -> 错误处理中间件。

const express = require('express');
// 创建应用对象
const app = express();

// 定义全局中间件
const func1 = (request, response, next) => {
    // 实现代码功能
    console.log('全局中间件1');
    // 执行next()函数，执行完中间件后希望执行下一个回调函数或者中间件，必须调用next()，如果没有next()函数，后面的中间件不会执行，请求也不会响应，浏览器会一直处于加载状态。
    next();
};
// 使用全局中间件
app.use(func1)

// 定义路由中间件
const func2 = (request, response, next) => {
    // 实现代码功能
    console.log('路由中间件2');
    next();
};
// 使用路由中间件：将路由中间件作为第二个参数传入路由回调函数
app.get('/index', func2, (request, response) => {
    // 实现代码功能
    console.log('路由回调函数');
    response.send('路由回调函数');
});

// 静态资源中间件的设置，使用内置中间件express.static()，将静态资源文件夹路径作为参数传入，可以访问静态资源文件夹中的文件。
app.use(express.static(__dirname + '/public'));

// 静态资源注意事项：
// 1.index.html文件为默认打开的文件，如果访问的是文件夹，会自动打开index.html文件，不需要写index.html。
// 2.如果静态资源与路由冲突，谁写在前面谁就响应。
// 3.如果静态资源文件夹中有index.html文件，访问文件夹时会自动打开index.html文件，不需要写index.html。
// 4.路由响应动态资源，静态资源中间件响应静态资源。

// 获取请求体数据body-parser中间件的设置，使用第三方中间件body-parser，需要安装body-parser模块。
// 1.安装body-parser模块：npm install body-parser
// 2.引入body-parser模块：const bodyParser = require('body-parser');
// 3.获取中间件函数：
// 3.1处理querystring格式的请求体数据：const urlencoded = bodyParser.urlencoded({ extended: false });
// 3.2处理json格式的请求体数据：const json = bodyParser.json();
// 4.使用中间件函数：设置路由中间件，然后使用request.body获取请求体数据。
app.post('/login', urlencoded, (request, response) => {
    // 获取请求体数据
    console.log(request.body);
    response.send('请求体数据');
});