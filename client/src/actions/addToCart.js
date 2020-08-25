import axios from 'axios';


export const addToCart = (productId) => async dispatch => {
    try{
        const res = await axios.post(`/api/cart/${productId}`);
        console.log(res.data)
    } catch (e) {
        const errors = e.response.data.errors.msg;
        console.log(errors)
    }
}
