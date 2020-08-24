const express = require('express');
const router = express.Router();
const Cart = require('../../models/Cart');
const Product = require('../../models/Product');

// @route   GET api/cart
// @desc    Get All Products In Cart
// @access  Public
router.get('/', async (req, res) => {
    try {
        // Get products ids that were added to cart
        const products = await Cart.find();
        // const productsIds = products.map(product => product.productId);

        // Get products that were added to cart
        // const productsInCart = await Product.find().where('_id').in(productsIds).exec();

        // res.json(productsInCart);
        res.json(products);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server error');
    }
});

// @route   POST api/cart/:productId
// @desc    Add Product To Cart
// @access  Public
router.post('/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        // Get product price
        const { price } = await Product.findOne({ _id: productId });
        let productInCart = await Cart.findOne({ productId });

        // Check product in cart
        if (productInCart) {
            return res.status(400).json({ errors: [{ msg: 'Product already in cart' }] });
        }

        productInCart = new Cart({
            productId,
            totalPrice: price
        });

        await productInCart.save();

        res.json(productInCart);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/cart/:productId
// @desc    Change amount and total price of products in cart
// @access  Public
router.put('/:productId', async (req, res) => {
    const { productId } = req.params;
    const { changeAmountInCart } = req.body;
    try {
        const { price } = await Product.findById({ _id: productId })
        let productInCart = await Cart.findOne({ productId });

        // Check product
        if (!productInCart) {
            return res.status(404).json({ msg: 'Product not found' })
        }

        // Change amount & total price
        if (changeAmountInCart === 'ADD') {
            productInCart.amountInCart += 1;
            productInCart.totalPrice += price;
        } else {
            productInCart.amountInCart -= 1;
            productInCart.totalPrice -= price;
        }

        await productInCart.save();
        res.json(productInCart);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server error');
    }
});

// @route   DELETE api/cart/:productId
// @desc    Delete product from cart
// @access  Public
router.delete('/:productId', async (req, res) => {
    const { productId } = req.params;
    try {
        const productInCart = await Cart.findOne({ productId });
        const product = await Product.findById({ _id: productId });

        // Check product in the cart
        if (!productInCart) {
            return res.status(404).json({ msg: 'Product not found in cart' })
        }

        await productInCart.remove();
        product.amount -= productInCart.amountInCart;
        await product.save();

        res.json({ msg: 'Product removed from card' });
    } catch (e) {
        console.error(e.message);
        if (e.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Product not found in cart' });
        }
        res.status(500).send('Server error');
    }
});


module.exports = router;