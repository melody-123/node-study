// json-server本身是一个JS编写的工具包，可以快速搭建RESTFUL API服务器
// 1.安装json-server: npm install json-server -g
// 2.创建一个json文件，里面写入数据，例：
// {
//     "posts": [
//         { "id": 1, "title": "json-server", "author": "typicode" }
//     ],
//     "comments": [
//         { "id": 1, "body": "some comment", "postId": 1 }
//     ],
//     "profile": { "name": "typicode" }
// }
// 3.启动json-server服务器: 以JSON文件所在文件夹作为工作目录，执行：json-server --watch db.json，此时会在本地3000(默认3000)端口启动一个服务器