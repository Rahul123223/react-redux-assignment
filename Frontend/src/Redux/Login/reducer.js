//this is reducer awk reducer takes the initial state and action object

import { LOGIN_FAILURE,LOGIN_SUCESS,LOGIN_LOADING } from "./action"

const initialstate={
    isAuth:false,
    loading:false,
    error:false,
    token:''
}
// we are getting the token once the use is succesfully login in our app.
//so here write the reducer (loginreducer) so reducer is for updating the store
//or we also said that reducer takes the initial state and action object and depending upon the action object
//it will update the store 
export const loginReducer=(store=initialstate,{type,payload})=>{
    switch(type){
        case LOGIN_FAILURE:
            return {
                ...store,
                isAuth:false,
                loading:false,
            }
        case LOGIN_SUCESS:
            return{
                ...store,
                isAuth:true,
                token:payload,
                error:false,

            }
        case LOGIN_LOADING:
            return{
                ...store,
                isAuth:false,
                error:false,
                loading:true
            }
        default:
            return store;
    }

}
