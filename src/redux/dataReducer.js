
const initialState = {
    items: {},
    tasks: [],
    userid: null,
    firstname: '',
    lastname: '',
    admin: '',
    loading: false
}

const GET_INVENTORY = "GET_INVENTORY";
const GET_TASKS = "GET_TASKS";
const UPDATE_TASKS = "UPDATE_TASKS";

export function readTasks(taskObj) {
    return {
        type: GET_TASKS,
        payload: taskObj
    }
}

export function editTasks(taskObj) {
    return {
        type: UPDATE_TASKS,
        payload: taskObj
    }
}



function dataReducer(state = initialState, action){
    switch(action.type){
        case GET_INVENTORY:
            return {
                loading: false,
                items: action.payload
            }
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case UPDATE_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
            default:
                return state

    }
}

export default dataReducer