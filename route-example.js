const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    const {pathname} = url.parse(request.url);

    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    if (pathname === '/products') {
        response.write('<h1>Danh sách sản phẩm</h1>');
    } else if (pathname === '/users') {
        response.write('<h1>Danh sách người dùng</h1>');
    } else if (pathname === '/orders') {
        response.write('<h1>Danh sách đơn hàng</h1>');
    } else {
        response.write('<h1>Đường dẫn không tồn tại</h1>');
    }

    response.end();
})

server.listen(8080, '127.0.0.1', () => {
    console.log('Máy chủ đã chạy. Vui lòng truy cập http://127.0.0.1:8080/')
})
