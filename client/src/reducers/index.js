import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
import alert from './alert';

export default combineReducers({
    productsInShop: products,
    productsInCart: cart,
    alert
});
