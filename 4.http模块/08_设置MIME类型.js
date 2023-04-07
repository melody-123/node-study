// 媒体类型(通常称为Multipurose Internet Mail Extensions或MIME类型)：是一种标准，用来标识文件的类型，以便于浏览器正确地处理文件。
// mime类型结构：主类型/子类型 [type] / [subtype]
// 例如：text/html、image/jpeg、application/json、audio/mpeg、video/mp4、application/octet-stream
// mime类型的作用：告诉浏览器，服务器返回的数据是什么类型的，浏览器根据不同的类型，采用不同的方式处理。
// http服务可以设置响应头Content-Type，来表明响应体的MIME类型，浏览器会根据响应头的Content-Type，来决定如何处理响应体。
// 下面是常见的mime类型：
// text/html：HTML文档
// text/plain：纯文本文档
// text/css：CSS文档
// text/javascript：JavaScript文档
// image/jpeg：JPEG图像
// image/gif：GIF图像
// image/png：PNG图像
// audio/mpeg：MPEG音频
// video/mp4：MP4视频
// application/json：JSON数据
// application/octet-stream：二进制流数据（如常见的文件下载）
// application/pdf：PDF文档
// application/zip：ZIP文档
// application/x-www-form-urlencoded：表单数据
// application/xml：XML数据
// application/xhtml+xml：XHTML文档
// application/vnd.ms-excel：Excel文档
// application/vnd.ms-powerpoint：PowerPoint文档
// application/msword：Word文档
// 对于未知的的MIME类型，浏览器会采用application/octet-stream作为默认类型。