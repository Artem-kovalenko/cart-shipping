import axios from 'axios';
import { MINUS_PRODUCT } from './types';

export const minusProduct = (productId) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ changeAmountInCart: "REMOVE" });

    try{
        const res = await axios.put(`/api/cart/${productId}`, body, config);
        const { amountInCart, totalPrice, price } = res.data;
        dispatch({
            type: MINUS_PRODUCT,
            payload: { amountInCart, totalPrice, price, productId }
        })
    } catch (e) {
        console.error(e)
    }

};
