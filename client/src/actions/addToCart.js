import axios from 'axios';
import {ADD_TO_CART} from './types';


export const addToCart = (productId) => async dispatch => {
    try{
        const res = await axios.post(`/api/cart/${productId}`);
        console.log(res.data)
        dispatch({
            type: ADD_TO_CART,
            payload: res.data
        });
    } catch (e) {
        const errors = e.response.data.errors.msg;
        console.log(errors)
    }
}