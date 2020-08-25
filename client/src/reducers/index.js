import {combineReducers} from "redux";
import getProducts from "./getProducts";
import getProductsInCart from "./getProductsInCart";

export default combineReducers({
    productsInShop: getProducts,
    productsInCart: getProductsInCart
});
