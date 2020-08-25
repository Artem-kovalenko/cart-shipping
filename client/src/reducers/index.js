import {combineReducers} from "redux";
import getAllProducts from "./getAllProducts";
import addToCart from "./addToCart";

export default combineReducers({
    productsInShop: getAllProducts,
    productsInCart: addToCart
});