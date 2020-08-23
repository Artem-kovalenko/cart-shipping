const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new mongoose.Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'products'
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Cart = mongoose.model('cart', CartSchema);