// const express = require('express');
import express from 'express'; // Phải thêm "type": "module" ở package.json

const application = express();

application.use(express.json())
application.use(express.urlencoded());

// GET:  Khi lấy dữ liệu
// application.get();

// POST: Khi thêm mới dữ liệu, hoặc truyền lên dữ liệu nhạy cảm (ví dụ: mật khẩu, thông tin mật, ...)
// application.post();

// PUT: Thường sử dụng khi cập nhập dữ liệu
// application.put();

// DELETE: Dùng khi xóa dữ liệu
// application.delete();


// Ví dụ trả về HTML
application.get('/', (request, response) => {
    // Dùng thuần
    // response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8;' })
    // response.write('<h1>Đây là trang chủ<h1>');
    // response.end();

    // Trả về với hàm send() của express
    response.send('<h1>Đây là trang chủ<h1>');
});

// Ví dụ: trả về JSON
application.get('/users', (req, res) => {
    const users = [
        {
            id: 1,
            name: 'Thái'
        },
        {
            id: 2,
            name: 'Sáng'
        }
    ];

    res.send(users);
});

// Ví dụ: đường dẫn tương đối
application.get('/about/*', function (req, res) {
    res.send('Trang đường dẫn tương đối')
});

// Ví dụ: về param
application.get('/users/:id', (req, res) => {
    const users = [{ id: 1, name: 'Thái' }, { id: 2, name: 'Sáng' }];
    const id = req.params.id;

    const user = users.find(u => u.id == id)

    if (user) {
        res.send(user)
    } else {
        res.send({
            error: 'Người dùng không tồn tại'
        })
    }
});

// Ví dụ: lấy query string
application.get('/products', (req, res) => {
    const products = [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Tablet' }]
    // const keyword = req.query.keyword;
    // const id = req.query.id;

    // Cách viết ngắn gọn hơn
    const { keyword, id } = req.query;

    const searchResult = products.filter(product => {
        return (keyword && product.name.toLowerCase().includes(keyword.toLowerCase()))
            || product.id == id;
    })

    res.send(searchResult);
})


// Ví dụ: tạo form POST
application.get('/products/add', (req, res) => {
    res.send(`
        <form action="http://localhost:8000/products" method="POST">
            <input name="name" placeholder="Name"/>
            <input name="description" placeholder="Description"/>
            <input name="unit_price" placeholder="Unit price"/>
            <button type="submit">Add</button>
        </form>
    `);
});

// Với method GET: Khi submit thì sẽ nhận dữ liệu payload sẽ lấy thông qua res.query
// Với method POST: Khi submit thì sẽ nhận dữ liệu payload sẽ lấy thông qua res.body
// Ví dụ: POST method
application.post('/products', (req, res) => {
    res.send({
        body: req.body
    });
});

application.listen(8000, () => {
    console.log('Server started');
});
