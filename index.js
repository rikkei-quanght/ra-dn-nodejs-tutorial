const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    response.write('<h1>Hello Trung</h1>')

    response.end();
})

server.listen(8080, '127.0.0.1', () => {
    console.log('Máy chủ đã chạy. Vui lòng truy cập http://127.0.0.1:8080/')
})
