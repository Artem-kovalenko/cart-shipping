import { GET_PRODUCTS_IN_CART } from "../actions/types";

const initalState = {
    cart: null
}

export default function (state = initalState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PRODUCTS_IN_CART:
            return {
                ...state,
                cart: payload
            }
        default:
            return state
    }
}
