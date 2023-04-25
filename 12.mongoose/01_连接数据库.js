// 1.安装mongoose:npm i mongoose -S
// 2.导入mongoose
const mongoose = require('mongoose');
// 设置strictQuery: true, 严格模式
// mongoose.set('strictQuery', true);

// 3.连接数据库: mongodb://ip:port/数据库名
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')
// 4.监听数据库连接状态
// 设置数据库连接成功的回调
mongoose.connection.once('open', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('数据库连接成功');
    // 5.操作数据库,连接成功后创建文档的结构对象
    // 设置集合中文档的属性以及属性值的类型
    const BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
    })
    // 6.创建模型对象(对文档操作的封装对象)，可以用于对集合中的文档进行增删改查
    // 参数1: 集合的名称，会自动转换为复数形式的集合名称，如: Book -> books，如果集合名称已经存在，则不会创建，如果集合名称不存在，则会创建，但是不会创建索引，也不会创建id，也不会创建文档结构，只会创建集合。
    // 参数2: 模型对象的结构对象，用于指定集合中文档的属性以及属性值的类型，类似于表结构，但是没有约束，只是用于指定文档的结构，不会自动创建集合，也不会自动创建索引，也不会自动创建id。
    let BookModel = mongoose.model('books', BookSchema);
    // 7.新增
    // 参数1: 文档对象，用于指定文档的属性以及属性值
    // 参数2: 回调函数，用于接收新增文档的结果
    BookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 100
    }).then(res => console.log(res)).catch(err => console.log(err));
    // 8.删除
    // 删除一条,参数：条件，回调函数
    BookModel.deleteOne({}, (err, data) => { })
    // 删除多条,参数：条件，回调函数
    BookModel.deleteMany({}, (err, data) => { })
    // 9.修改
    // 修改一条,参数：条件，修改的内容，回调函数
    BookModel.updateOne({}, {}, (err, data) => { })
    // 修改多条,参数：条件，修改的内容，回调函数
    BookModel.updateMany({}, {}, (err, data) => { })
    // 10.查询
    // 根据id查询一条,参数：id，回调函数
    BookModel.findById('id', (err, data) => { })
    // 查询一条,参数：条件，回调函数
    BookModel.findOne({}, (err, data) => { })
    // 指定条件查询多条,参数：条件，回调函数
    BookModel.find({}, (err, data) => { })
    // 查询所有,参数：回调函数
    BookModel.find((err, data) => { })
})
// 设置数据库连接失败的回调
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('数据库连接失败');
})
// 设置数据库断开连接的回调
mongoose.connection.on('close', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('数据库断开连接');
})

// 关闭数据库连接
setTimeout(() => {
    // 项目运行中，一般不会关闭数据库连接，因为数据库连接是一个非常耗时的操作，如果每次操作数据库都关闭连接，会导致数据库连接的频繁开启和关闭，会影响数据库的性能，所以一般不会关闭数据库连接，除非项目运行结束，才会关闭数据库连接。
    mongoose.disconnect();
}, 2000)