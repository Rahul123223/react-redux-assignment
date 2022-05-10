export const ActionTypes = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SELECTED_PRODUCTS: "SELECTED_PRODUCTS",
  REMOVE_SELECTED_PRODUCTS: "REMOVE_SELECTED_PRODUCTS",
};

const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
