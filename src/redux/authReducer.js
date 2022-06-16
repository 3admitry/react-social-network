import {API} from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    //isFetching: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

//AC
export const setAuthData = (data) => ({type: SET_AUTH_DATA, data});

// Thunks
export const getAuth = () => (dispatch) => {
    API.getAuth().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthData(data.data));
        }
    })
}
export default authReducer;