import {API} from "../api/api";

const SET_AUTH_DATA = 'social-network/auth/SET_AUTH_DATA';
const SET_ERROR = 'social-network/auth/SET_ERROR';
const SET_CAPTCHA_URL = 'social-network/auth/SET_CAPTCHA_URL';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage: null,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case SET_CAPTCHA_URL:
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

//Actions creator
export const setAuthData = (payload, isAuth) => ({type: SET_AUTH_DATA, payload: {...payload, isAuth}});
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, payload: {captchaUrl}});
export const setError = (errorMessage) => ({type: SET_ERROR, errorMessage});

// Thunks
export const getAuth = () => dispatch => {
    return API.auth.getAuth()
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(setAuthData(response.data, true));
            }
        })
}
export const loginTC = (email, password, rememberMe, captcha=null) => async dispatch => {
    try {
        const response = await API.auth.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(setAuthData({email, password, rememberMe, captcha}, true));
            dispatch(getAuth());
            dispatch(setError(null))
            dispatch(setCaptchaUrl(null))
        } else {
            if(response.data.fieldsErrors[0]){
                dispatch(getCaptchaUrl());
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                dispatch(setError(message))
            }else{
                dispatch(setCaptchaUrl(null))
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                dispatch(setError(message))
            }
        }
    } catch (e) {
        console.error(e.message)
    }
}
export const logoutTC = () => async dispatch => {
    try {
        const response = await API.auth.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthData({email: null, password: null, rememberMe: null}, false));
        }
    } catch (e) {
        console.error(e.message)
    }
}
export const getCaptchaUrl = () => async dispatch => {
    try {
        const response = await API.security.getCaptcha();
        const captchaUrl = response.data.url;
        dispatch(setCaptchaUrl(captchaUrl))
    } catch (e) {
        console.error(e.message)
    }
}

export default authReducer;