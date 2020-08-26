import axios from 'axios';
import { PLUS_PRODUCT } from './types';

export const plusProduct = (productId) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ changeAmountInCart: "ADD" });

    try{
        const res = await axios.put(`/api/cart/${productId}`, body, config);
        const { amountInCart, totalPrice, price } = res.data;
        dispatch({
            type: PLUS_PRODUCT,
            payload: { amountInCart, totalPrice, price, productId }
        })
    } catch (e) {
        console.error(e)
    }
}
