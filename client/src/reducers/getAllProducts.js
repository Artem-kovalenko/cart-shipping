import {GET_ALL_PRODUCTS} from "../actions/types";

const initalState = {
    products: null
}

export default function (state = initalState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default:
            return state
    }
}