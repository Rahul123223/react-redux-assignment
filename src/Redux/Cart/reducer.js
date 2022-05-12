import { CART_LOADING, CART_ADDDATA, CART_ERROR,CART_GET } from "./action";

const initialState = {
    error: false,
    loading: false,
    cart: []
}
export const cartReducer = (store = initialState, { type, payload }) => {
    // console.log("the payload is",payload)
    switch (type) {
        case CART_LOADING:
            return {
                ...store,
                loading: true
            }

        case CART_ADDDATA:
            return {
                ...store,
                loading: true,
                cart: [...payload]
            }
        case CART_ERROR:
            return {
                ...store,
                loading: false,
                error: true
            }

        case CART_GET :
            return{
                ...store,
                loading:false,
                error:false,
                cart:[payload]
            }
        default:
            return store
    }

}