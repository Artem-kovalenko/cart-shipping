import axios from 'axios';
import {GET_PRODUCTS_IN_CART} from './types';


export const getProductsInCart = () => async dispatch => {
    try{
        const res = await axios.get('/api/cart');
        console.log(res);
        dispatch({
            type: GET_PRODUCTS_IN_CART,
            payload: res.data
        })
    } catch (e) {
        console.error(e)
    }
}
