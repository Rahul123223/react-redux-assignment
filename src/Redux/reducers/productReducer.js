const initialState = {
  products: [],
};
export const productReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
