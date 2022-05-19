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
export const getProductData =
  (sort, type, category, page, limit) => (dispatch) => {
    console.log("the category is ", category.length);
    if (category.length == 0) {
      dispatch(getProductLoading());
      fetch(
        `http://localhost:8080/products?_sort=${type}&_order=${sort}&_page=${page}&_limit=${limit}`
      )
        .then((res) => res.json())
        .then((res) => dispatch(getProduct(res)))
        .catch((err) => dispatch(getProductError(err)));
    } else {
      dispatch(getProductLoading());
      fetch(
        ` http://localhost:8080/products?category=${category}&_sort=${type}&_order=${sort}&_page=${page}&_limit=${limit}`
      )
        .then((res) => res.json())
        .then((res) => dispatch(getProduct(res)))
        .catch((err) => dispatch(getProductError(err)));
    }
  };
