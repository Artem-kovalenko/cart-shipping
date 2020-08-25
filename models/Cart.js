const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new mongoose.Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'products'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amountInCart: {
        type: Number,
        required: true,
        default: 1
    },
    totalPrice: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Cart = mongoose.model('cart', CartSchema);