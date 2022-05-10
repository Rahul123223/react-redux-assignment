import { ActionTypes } from "../action/productActions";

const initialState = {
  products: [
    {
      id: 1,
      title: "Rahul",
      category: "programmer",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
