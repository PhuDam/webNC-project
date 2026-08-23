const express = require('express');
const { testFunc, testFunc3, divide } = require('./testHello');

const app = express();
const PORT = 5000; 

app.get('/', (req, res) => {
    res.send('Hello from server!'); 
});

app.get('/api/data', (req, res) => {
    res.json({
        message: 'Hello',
        testFunc: testFunc(2, 3),
        testFunc3: testFunc3(1, 2, 3),
        divide: divide(10, 2)
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
