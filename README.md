# Rikkei Academy - Da Nang - NodeJS Tutorial

## Khởi tạo project
```shell
npm init
```

## Cài đặt các thư viện

```shell
npm install express body-parser morgan mysql multer bcrypt
```

## Cấu trúc source

```
├───logs/                           # Lưu trữ nhật ký của ứng dụng
├───src/
    ├───application/
    │   ├───controllers/            # Xử lý điều hướng (request/response)
    │   ├───repositories/           # Xử lý truy vấn dữ liệu đến database (MySQL)
    │   ├───services/               # Xử lý logic nghiệp vụ
    │   └───routes.js               # Định tuyến request
    └───config/
        └───connection.database.js  # Kết nối database (MySQL)
└───index.js
└───package.json
```
