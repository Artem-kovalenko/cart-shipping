import axios from 'axios';
import {
    DELETE_FROM_CART
} from "../actions/types";

export const deleteFromCart = (productId, totalPrice) => async dispatch => {

    try {
        const res = await axios.delete(`/api/cart/${productId}`);
        console.log(res.data.msg);
        dispatch({
            type: DELETE_FROM_CART,
            payload: {productId, totalPrice}
        })
    } catch (e) {
        console.error(e);
    }

};
