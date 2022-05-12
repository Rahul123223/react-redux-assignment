//action is object and object has 2 property 1st one is the action type what action need to be perform
//and another is the payload means what payload is to be need
//this are know as the action type
export const LOGIN_LOADING='LOGIN_LOADING';

export const LOGIN_SUCESS='LOGIN_SUCEESS';

export const LOGIN_FAILURE='LOGIN_FAILURE'



//so action can be created using the action creator that return the action object
//awk action is object which has action type and the payload

//so this is know as the action creator
export const login_loading=()=>{
    return{
        type:LOGIN_LOADING
    }

}

// this is payload for the token in which once user is succesufully login
//then use get the token
export const login_success=(payload)=>{
    return{
        type:LOGIN_SUCESS,
        payload
    }
}

export const login_failure=()=>{
    return{
        type:LOGIN_FAILURE
    }
}