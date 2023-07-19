const fs = require('fs');

const students = [
    {
        name: 'Thái',
        age: 28,
        hometown: 'Hòa Vang, Đà Nẵng'
    },
    {
        name: 'Tín',
        age: 29,
        hometown: 'Đại Lộc, Quảng Nam'
    }
]

for (let student of students) {
    // Xuống dòng với mỗi hệ điều hành:
    // Unix/Linux: LF (\n)
    // Windows: CRLF (\r\n)
    // Mac: (\r)
    const content = 'Tên: ' + student.name + '\n' + 'Tuổi: ' + student.age + '\n' + 'Quê quán: ' + student.hometown;
    fs.writeFileSync(student.name + '.txt', content, 'utf-8')
}
