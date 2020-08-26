import axios from 'axios';
import {GET_PRODUCTS_IN_CART} from './types';


export const getProductsInCart = () => async dispatch => {
    try{
        const res = await axios.get('/api/cart');

        let totalCartPrice = null;
        res.data.map(item => totalCartPrice += item.totalPrice);

        dispatch({
            type: GET_PRODUCTS_IN_CART,
            payload: {cart: res.data, totalCartPrice}
        })
    } catch (e) {
        console.error(e)
    }
}
