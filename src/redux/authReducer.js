import {API} from "../api/api";
import {setInitialize} from "./appReducer";

const SET_AUTH_DATA = 'social-network/auth/SET_AUTH_DATA';
const SET_ERROR = 'social-network/auth/SET_ERROR';

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
export const getAuth = () => dispatch => {
    return API.auth.getAuth()
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setAuthData(data.data, true));
            }
        })
}
export const loginTC = (email, password, rememberMe) => async dispatch => {
    try {
        const res = await API.auth.login(email, password, rememberMe)
        if (res.data.resultCode === 0) {
            dispatch(setAuthData({email, password, rememberMe}, true));
            dispatch(getAuth());
            dispatch(setError(null))
        } else {
            let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error';
            dispatch(setError(message))
        }
    } catch (e) {
        console.error(e.message)
    }
}
export const logoutTC = () => async dispatch => {
    try {
        const res = await API.auth.logout()
        if (res.data.resultCode === 0) {
            dispatch(setAuthData({email: null, password: null, rememberMe: null}, false));
        }
    } catch (e) {
        console.error(e.message)
    }
}

export default authReducer;