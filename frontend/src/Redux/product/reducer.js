import { GET_PRODUCT, GET_PRODUCT_LOADING, GET_PRODUCT_ERROR } from "./action";

const initialState = {
  error: false,
  loading: false,
  product: [],
};

export const productReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT:
      return {
        ...store,
        error: false,
        loading: false,
        product: [...payload],
      };
    case GET_PRODUCT_LOADING:
      return {
        ...store,
        loading: true,
      };

    case GET_PRODUCT_ERROR:
      return {
        ...store,
        error: true,
      };
    default:
      return store;
  }
};
