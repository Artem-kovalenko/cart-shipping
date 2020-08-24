const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Product = require('../../models/Product');

// @route   GET api/products
// @desc    Get All Products
// @access  Public
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server error');
    }
});



// @route   POST api/products/addNewProduct
// @desc    Add New Product (for admin to add new products)
// @access  Public
router.post('/addNewProduct', [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('description', 'Description is required')
        .not()
        .isEmpty(),
    check('price', 'Price is required')
        .not()
        .isEmpty(),
    check('amount', 'Amount is required')
        .not()
        .isEmpty(),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, description, price, amount  } = req.body;

    try {
        // See if product is already exists
        let product = await Product.findOne({name})

        if(product) {
            return res.status(400).json({msg: "Product is already in shop"})
        }

        product = new Product({
            name,
            description,
            price,
            amount
        });

        await product.save();

        res.json(product);

    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server error');
    }

});

module.exports = router;