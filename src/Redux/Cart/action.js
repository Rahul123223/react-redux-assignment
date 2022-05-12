//write the action in the cart
export const CART_LOADING='CART_LOADING';
export const CART_ADDDATA="CART_ADDDATA";

export const CART_ERROR='CART_ERROR';
export const CART_GET='CART_GET'

//action creator that return the action 

export const cart_loading=()=>{
    return{
        type:CART_LOADING
    }
}
export const cart_addData=(payload)=>{
    return{
        type:CART_ADDDATA,
        payload
    }
}

export const cart_error=()=>{
    return{
        type:CART_ERROR
    }
}
export const cart_get=(payload)=>{
    return{
        type:CART_GET,
        payload
    }

}

export const cart_add=(payload)=>(dispatch)=>{
    dispatch(cart_loading());
    fetch(`http://localhost:8080/cart`,{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "Content-type":"Application/json"
        }
    })
    .then((res)=>res.json())
    .then(res=>{
        console.log("In the post data part")
        dispatch(cart_addData(res))})
    .catch(err=>dispatch(cart_error(err)))

    fetch(`http://localhost:8080/cart`)
    .then(res=>res.json())
    .then(res=>dispatch(cart_get(res)))
    .catch(err=>dispatch(cart_error(err)))
   


}