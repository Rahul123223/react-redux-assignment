//want to crate action type
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCT_LOADING = "GET_PRODUCT_LOADING"
export const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR"
//action creator which return the action object

export const getProduct = (payload) => {
    return {
        type: GET_PRODUCT,
        payload
    }
}

export const getProductLoading = () => {
    return {
        type: GET_PRODUCT_LOADING
    }
}

export const getProductError = () => {
    return {
        type: GET_PRODUCT_ERROR
    }
}
//this is also one type of action creator but instead of return the action object it will return
//the function this is possible because of the redux-thunks
export const getProductData = (sort, type, category) => (dispatch) => {
    console.log("the category is ", category.length);
    if (category.length == 0) {
        dispatch(getProductLoading());
        fetch(`http://localhost:8080/products?_sort=${type}&_order=${sort}`)
            .then((res) => res.json())
            .then(res => dispatch(getProduct(res)))
            .catch((err) => dispatch(getProductError(err)));

    } else {
        dispatch(getProductLoading());
        fetch(` http://localhost:8080/products?category=${category}&_sort=${type}&_order=${sort}`)
            .then((res) => res.json())
            .then(res => dispatch(getProduct(res)))
            .catch((err) => dispatch(getProductError(err)));
    }


}
