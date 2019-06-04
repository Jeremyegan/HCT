import axios from 'axios';

const initialState = {
    items: {}
}

const GET_INVENTORY = "GET_INVENTORY";



function dataReducer(state = initialState, action){
    switch(action.type){
        case GET_INVENTORY + '_PENDING':
            return {
                ...state,
                loading: true
            }
        case GET_INVENTORY + '_FULFILLED':
            return {
                loading: false,
                items: action.payload
            }

    }
}