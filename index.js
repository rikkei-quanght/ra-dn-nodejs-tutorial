const http = require('http');
const url = require('url')

const server = http.createServer((request, response) => {
    const {pathname, query} = url.parse(request.url, true)
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8'
    });

    console.log(query)

    let html = '';

    html += `
        <form action="http://127.0.0.1:8080/" method="GET">
            <input type="text" name="keyword" placeholder="Từ khóa"/>
            <input type="text" name="course"  placeholder="Khóa học"/>
            <button type="submit">Tìm kiếm</button>
        </form>
        <p>Từ khóa: ${query.keyword}<p>
        <p>Khóa học: ${query.course}<p>
    `

    response.write(html)

    response.end();
})

server.listen(8080, '127.0.0.1', () => {
    console.log('Máy chủ đã chạy. Vui lòng truy cập http://127.0.0.1:8080/')
})
