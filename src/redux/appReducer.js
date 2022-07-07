import {API} from "../api/api";
import {getAuth} from "./authReducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';

let initialState = {
    initialize: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialize: true,
            }
        default:
            return state;
    }
}

//AC
export const setInitialize = () => ({type: INITIALIZE_SUCCESS});

// Thunks
export const initializeApp = () => async dispatch => {
    await dispatch(getAuth())
    dispatch(setInitialize())
}
