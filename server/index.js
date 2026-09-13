const express = require('express');
const { query } = require('./database'); // Nhúng file kết nối DB
const { sql } = require('./query');       // Nhúng câu lệnh SQL

const app = express();
const PORT = 5000;

// API cũ của bạn
app.get('/', (req, res) => {
    res.send('Hello from Node.js server!');
});

app.post('/api/post', (req, res) => {
    console.log(`id là: ${req.query.id}`);
    res.json({
        id: req.query.id,
        message: 'This is a POST request!'
    });
});

// API MỚI: Lấy dữ liệu từ Database
app.get('/api/dbconnection', (req, res) => {
    query(sql).then(results => {
        res.json({ query: results }); // Trả về định dạng JSON giống ảnh giảng viên
    }).catch(error => {
        console.error('Query error: ' + error.stack);
        res.status(500).json({ error: 'Database query failed' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});