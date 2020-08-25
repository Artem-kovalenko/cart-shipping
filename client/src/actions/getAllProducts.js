import axios from 'axios';
import {GET_ALL_PRODUCTS} from './types';


export const getAllProducts = () => async dispatch => {
    try{
        const res = await axios.get('/api/products');

        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res.data
        })
    } catch (e) {

    }
}