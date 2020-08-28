import axios from 'axios';
import {
    DELETE_FROM_CART,
    GET_PRODUCTS_IN_CART,
    MINUS_PRODUCT,
    PLUS_PRODUCT,
    ADD_TO_CART_SUCCESS
} from '../actions/types';

export const addToCart = (productId) => async dispatch => {
    try{
        const result = await axios.post(`/api/cart/${productId}`);

        dispatch({
            type: ADD_TO_CART_SUCCESS,
        });

        return result;
    } catch (e) {
        return e.response.data.errors.msg;
    }
};

export const getProductsInCart = () => async dispatch => {
    try{
        const res = await axios.get('/api/cart');

        let totalCartPrice = 0;
        res.data.map(item => totalCartPrice += item.totalPrice);

        dispatch({
            type: GET_PRODUCTS_IN_CART,
            payload: {cart: res.data, totalCartPrice}
        })
    } catch (e) {
        console.error(e)
    }
};

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

export const plusProduct = (productId) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

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
};

export const deleteFromCart = (productId, totalPrice) => async dispatch => {

    try {
        await axios.delete(`/api/cart/${productId}`);
        dispatch({
            type: DELETE_FROM_CART,
            payload: {productId, totalPrice}
        })
    } catch (e) {
        console.error(e);
    }

};
