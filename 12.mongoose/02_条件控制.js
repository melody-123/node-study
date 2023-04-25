// 条件控制--运算符
// 1.在mongoose中不能使用原生的js对象作为查询条件，因为原生的js对象中的属性值可能是undefined，而mongoose中的查询条件必须是一个对象，不能是undefined，所以在mongoose中提供了一些条件控制的方法，用于生成查询条件。
// 2.不能使用> < >= <= !==等运算符，需要使用替代符号$gt $lt $gte $lte $ne等。
// 使用$gt替代>，$lt替代<，$gte替代>=，$lte替代<=，$ne替代!==。
// 例：db.students.find({id:{$gt:3}})，id大于3的文档。

// 条件控制--逻辑运算符
// $or逻辑或，$and逻辑与，$not逻辑非，$nor逻辑或非。
// 例：db.students.find({$or:[{id:1},{id:2}]}),id等于1或者id等于2的文档。
// 例：db.students.find({$and:[{id:1},{name:'jack'}]}),id等于1并且name等于jack的文档。

// 条件控制--正则匹配
// 条件中可以使用js的正则语法，通过正则进行模糊查询
// db.students.find({name:/^j/}),name以j开头的文档。