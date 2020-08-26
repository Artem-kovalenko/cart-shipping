import {
    GET_PRODUCTS_IN_CART,
    PLUS_PRODUCT,
    MINUS_PRODUCT,
    DELETE_FROM_CART
} from "../actions/types";

const initalState = {
    cart: [],
    totalCartPrice: null
};

export default function (state = initalState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_PRODUCTS_IN_CART:
            return {
                ...state,
                cart: payload.cart,
                totalCartPrice: payload.totalCartPrice
            };

        case PLUS_PRODUCT:
            return {
                ...state,
                totalCartPrice: state.totalCartPrice + payload.price,
                cart: state.cart.map(cartItem => {
                    if (cartItem.productId === payload.productId) {
                        return {
                            ...cartItem,
                            amountInCart: cartItem.amountInCart + 1,
                            totalPrice: payload.totalPrice
                        };
                    }
                    return cartItem;
                })
            };

        case MINUS_PRODUCT:
            return {
                ...state,
                totalCartPrice: state.totalCartPrice - payload.price,
                cart: state.cart.map(cartItem => {
                    if (cartItem.productId === payload.productId) {
                        return {
                            ...cartItem,
                            amountInCart: cartItem.amountInCart - 1,
                            totalPrice: payload.totalPrice
                        };
                    }
                    return cartItem;
                })
            };

        case DELETE_FROM_CART:
            return {
                ...state,
                totalCartPrice: state.totalCartPrice - payload.totalPrice,
                cart: state.cart.filter(item => item.productId !== payload.productId)
            };

        default:
            return state
    }
}
