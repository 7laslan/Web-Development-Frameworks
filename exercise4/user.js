const express = require('express');
const router = express.Router();

// User information
let userInfo = {
    user: [{
        name: "John Doe",
        address: "Fictionroad 420",
        number: 555-5656
    }]
}

router.get('/', (req, res) => {res.json(userInfo)});

