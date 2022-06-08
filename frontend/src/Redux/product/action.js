export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCT_LOADING = "GET_PRODUCT_LOADING";
export const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR";

export const getProduct = (payload) => {
  return {
    type: GET_PRODUCT,
    payload,
  };
};

export const getProductLoading = () => {
  return {
    type: GET_PRODUCT_LOADING,
  };
};

export const getProductError = () => {
  return {
    type: GET_PRODUCT_ERROR,
  };
};
export const getProductData = (sort, category, page) => (dispatch) => {
  console.log("the category is ", category.length);
  if (category.length == 0) {
    dispatch(getProductLoading());
    fetch(`https://ecom-app-herok.herokuapp.com/products?&order=${sort}&page=${page}`)
      .then((res) => res.json())
      .then((res) => dispatch(getProduct(res)))
      .catch((err) => dispatch(getProductError(err)));
  } else {
    dispatch(getProductLoading());
    fetch(
      `https://ecom-app-herok.herokuapp.com/products?category=${category}&order=${sort}&page=${page}`
    )
      .then((res) => res.json())
      .then((res) => dispatch(getProduct(res)))
      .catch((err) => dispatch(getProductError(err)));
  }
};
