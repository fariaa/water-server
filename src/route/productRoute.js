const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    const products = [];
    const product = { "id": 1, "nome": "produto 1", "description": "produto muito bom" }
    products.push(product);
    res.json(products);
})

module.exports = router;