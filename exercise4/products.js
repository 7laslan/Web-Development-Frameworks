const express = require('express');
const router = express.Router();

// All the information about the products
let productInfo = {
    products: [{
        id: 1,
        name: "Yakuza 0",
        manufacturer: "Sega",
        category: "Video games",
        description: "Action-adventure gem set in Japan's bubble era",
        price: 19.99
    },
    {
        id: 2,
        name: "Lenovo ThinkPad",
        manufacturer: "Lenovo",
        category: "Computers",
        description: "Business laptop",
        price: 1.169
    },
    {
        id: 3,
        name: "Razer Barracuda",
        manufacturer: "Razer",
        category: "Headset",
        description: "Wireless headset for gaming",
        price: 99.99
    }]
}

// Gets all products
router.get('/', (req, res) => {res.json(productInfo)});

// Gets a single product based on id
router.get('/:productId', (req, res) => {
    const resProd = productInfo.products.find(p => {
        if (p.id == req.params.productId){
            return true;
        } else {
            return false;
        }
    });
    if (resProd === undefined){
        res.sendStatus(404)
    } else {
        res.json(resProd);
    }
})

//Modifying a product
router.put('/products/:id', (req, res) => {
    console.log(req.params);
    res.send('Modifying');
})

//Searches a product based on name
router.get('/:productName', (req, res) => {
    const resProd = productInfo.products.find(p => {
        if (p.name == req.params.productName){
            return true;
        } else {
            return false;
        }
    });
    if (resProd === undefined){
        res.sendStatus(404)
    } else {
        res.json(resProd);
    }
})

//Searches products based on manufacturer
router.get('/:productManufacturer', (req, res) => {
    const resProd = productInfo.products.find(p => {
        if (p.manufacturer == req.params.productManufacturer){
            return true;
        } else {
            return false;
        }
    });
    if (resProd === undefined){
        res.sendStatus(404)
    } else {
        res.json(resProd);
    }
})

//Searches products based on category
router.get('/:productCategory', (req, res) => {
    const resProd = productInfo.products.find(p => {
        if (p.category == req.params.productCategory){
            return true;
        } else {
            return false;
        }
    });
    if (resProd === undefined){
        res.sendStatus(404)
    } else {
        res.json(resProd);
    }
})