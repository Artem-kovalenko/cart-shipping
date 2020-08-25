const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Cart = require('../../models/Cart');
const Product = require('../../models/Product');

// @route   POST api/shipping
// @desc    Buy products from cart
// @access  Public
router.post('/', [
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('address', 'Address is required')
            .not()
            .isEmpty(),
        check('phone', 'Phone number must be valid')
            .isMobilePhone("uk-UA"),
        check('email', 'Email is required and must be valid')
            .isEmail()
    ], async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            // Get cart
            const cart = await Cart.find();

            // Get ids of products that are in cart
            const productsIdsInCart = cart.map(product => product.productId);

            // Get products that were added to cart
            const productsInCart = await Product.find().where('_id').in(productsIdsInCart).exec();

            for (let i = 0; i < cart.length; i++) {
                for (let j = 0; j < productsInCart.length; j++) {
                    // Check if product in cart and in shop is same
                    if (productsInCart[j]._id.toString() === cart[i].productId.toString()) {
                        // Decrease amount of products in shop
                        productsInCart[j].amount -= cart[i].amountInCart;
                        await productsInCart[j].save();
                    }
                }
            }

            // Clear cart
            await Cart.deleteMany();
            res.json(productsInCart);

        } catch (e) {
            console.error(e.message);
            res.status(500).send('Server error');
        }

    }
);

module.exports = router;
