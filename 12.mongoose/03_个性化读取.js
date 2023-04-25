
const mongoose = require('mongoose');
// 连接数据库: mongodb://ip:port/数据库名
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')
// 监听数据库连接状态
// 设置数据库连接成功的回调
mongoose.connection.once('open', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('数据库连接成功');
    // 操作数据库,连接成功后创建文档的结构
    const BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
    })
    let BookModel = mongoose.model('books', BookSchema);
    // 字段筛选：0---不要的字段，1---要的字段,默认都要,select()方法中的参数是一个对象，对象中的属性名是要筛选的字段，属性值是1或0，1表示要，0表示不要,如果要筛选多个字段，需要在对象中添加多个属性; 如果要筛选的字段中有_id字段，需要在_id字段前面加上_，如：_id: 0
    // exec()方法中的回调函数中的参数data是一个数组，数组中的每一项是一个文档对象，文档对象中只有筛选的字段
    // BookModel.find().select({ name: 1, author: 1, _id: 0 }).exec(function (err, data) {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(data);
    //     mongoose.connection.close();
    // })

    // 字段排序：1---升序，-1---降序,默认升序,如果要降序，需要在字段前面加上-
    // BookModel.find().sort({ price: -1 }).exec(function (err, data) {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(data);
    //     mongoose.connection.close();
    // })

    // 字段分页(数据截取)：skip---跳过多少条，limit---限制多少条
    BookModel.find().skip(1).limit(2).exec(function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
        mongoose.connection.close();
    })
})