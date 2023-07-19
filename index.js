const fs = require('fs');

// Các định dạng file thường sử dụng:
// 1) .CSV
// 2) .TSV
// 3) .dat
// 4) .xls, .xlsx (Excel)
// 5) .zip / .rar / .7z / .gzip (Nén)
// 6) .png / .jpg / .gif / .mp4 / .mp3 (Media)

// Ghi file đồng bộ
// const content = 'Đây là nội dung file test.txt';
// fs.writeFileSync('test.txt', content);

console.log('Phía dưới xử lý ghi file');

// Đọc file đồng bộ
// const data = fs.readFileSync('test.txt', 'utf-8');
// console.log('data', data);


// Xóa file
// fs.unlink('test.txt', (error) => {
//     if (error) {
//         console.log('error', error.message)
//     } else {
//         console.log('Xóa file thành công')
//     }
// });

// Ghi file bất đồng bộ
// const content2 = 'Đây là nội dung file test2.txt';
// fs.writeFile('test2.txt', content2, 'utf8', (error) => {
//     if (error) {
//         console.log('Error: ', error.message)
//     } else {
//         console.log('Ghi file thành công')
//     }
// });
// // trả kết quả
// console.log('Phía dưới hàm writeFile()');

// Đọc file bất đồng bộ
// fs.readFile('test2.txt', 'utf-8', (error, data) => {
//     if (error) {
//         console.log('Error: ', error.message);
//     } else {
//         console.log('Data: ', data)
//     }
// });

// console.log('Phía dưới hàm readFile()');

fs.chmod('index2.js', 0o444, (error) => {
    if (error) {
        console.log("error: ", error.message)
    }
});
