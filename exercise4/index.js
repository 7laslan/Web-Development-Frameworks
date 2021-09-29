const express = require('express');
const app = express();
const port = 3000;

const products = require('./products.js');
const user = require('./user.js');

app.get('/products', (req, res) => {
    console.log(req.params);
    res.send(products);
});

app.get('/user', (req, res) => {
    console.log(req.params);
    res.send(user);
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
});
