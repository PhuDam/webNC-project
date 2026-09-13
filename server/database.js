const mysql = require('mysql2');
require('dotenv').config({ quiet: true }); 

const connection = mysql.createConnection({
    host: 'mysql-22862ebb-st-b044.c.aivencloud.com',
    port: 26138,
    user: 'avnadmin',
    password: 'AVNS_E9h0ZzTSczKnkdm0PKE',
    database: 'STUDENTSREG',
    ssl: {
        rejectUnauthorized: false // Quan trọng: Cho phép Codespaces kết nối
    }
});

connection.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối: ' + err.stack);
        return;
    }
    console.log('Đã kết nối Aiven MySQL... Connection ID: ' + connection.threadId);
});

const query = (sql) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

module.exports = {
    connection,
    query
};