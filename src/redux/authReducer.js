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
                ...action.payload,
            }
        default:
            return state;
    }
}

//AC
export const setAuthData = (payload, isAuth) => ({type: SET_AUTH_DATA, payload: {...payload, isAuth}});

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