import {API} from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_ERROR = 'SET_ERROR';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage: null,
    //isFetching: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case SET_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage,
            }
        default:
            return state;
    }
}

//AC
export const setAuthData = (payload, isAuth) => ({type: SET_AUTH_DATA, payload: {...payload, isAuth}});
export const setError = (errorMessage) => ({type: SET_ERROR, errorMessage});

// Thunks
export const getAuth = () => (dispatch) => {
    API.auth.getAuth().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthData(data.data, true));
        }
    })
}
export const loginTC = (email, password, rememberMe) => (dispatch) => {
    API.auth.login(email, password, rememberMe).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthData({email, password, rememberMe}, true));
            dispatch(getAuth());
            dispatch(setError(null))
        }
        else {
            let message = res.data.messages.length>0 ? res.data.messages[0] : 'Some error';
            dispatch(setError(message))
        }
    })
}
export const logoutTC = () => (dispatch) => {
    API.auth.logout().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthData({email: null, password: null, rememberMe: null}, false));
        }
    })
}


export default authReducer;