
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
const UPDATE_TASK = "UPDATE_TASK";
const DELETE_TASK = "DELETE_TASK";

export function readTasks(taskObj) {
    return {
        type: GET_TASKS,
        payload: taskObj
    }
}

export function editTask(taskObj) {
    return {
        type: UPDATE_TASK,
        payload: taskObj
    }
}

export function deleteTask(taskObj) {
    return {
        type: DELETE_TASK,
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
        case UPDATE_TASK:
            return {
                ...state,
                tasks: action.payload
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: action.payload
            }
            default:
                return state

    }
}

export default dataReducer