import { GET_PRODUCTS_IN_CART, PLUS_PRODUCT } from "../actions/types";

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
        case PLUS_PRODUCT:

                return state.cart.map(cartItem => {

                    if (cartItem.productId === payload.productId) {
                        return {

                            ...cartItem, amountInCart: cartItem.amountInCart + 1
                        };
                    }
                    return cartItem;
                });

        default:
            return state
    }
}
