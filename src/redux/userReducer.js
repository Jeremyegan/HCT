import axios from "axios";

const initialState = {
    loading: false,
    user: {}
}

const GET_USER = "GET_USER";
const SET_USER = "SET_USER";


export function getData() {      // on this line just type export to utilize this function in other areas of this project.
    const user = axios
    .get('/user/user-data')
    .then((res) => res.data.results[0]) // returns just the object so it can be manipulated as an object on our front end
    return {
        type: GET_USER,
        payload: user
    }
}


function userReducer(state = initialState, action){
    switch(action.type){
        case GET_USER + '_PENDING':
            return {
                ...state,
                loading: true
            }
        case GET_USER + '_FULFILLED':
            return {
                ...state,
                loading: false,
                user: action.payload   //getting user object from payload property from function getData above
            }
        case GET_USER + '_REJECTED':
            return {
                ...state,
                loading: false
            }
        case SET_USER + '_FULFILLED':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}


export default userReducer