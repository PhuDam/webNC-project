const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000; 

app.get('/', (req, res) => {
    res.send('Hello from Node.js server!'); 
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
