import {API} from "../api/api";
import {setError} from "./authReducer";

const ADD_POST = 'social-network/profile/ADD-POST';
const DELETE_POST = 'social-network/profile/DELETE_POST';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'social-network/profile/SET_USER_PROFILE_STATUS';
const SET_NEW_PROFILE_PHOTO = 'social-network/profile/SET_NEW_PROFILE_PHOTO';
const SET_ERROR = 'social-network/profile/SET_ERROR';

export let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hello', likeCount: 5},
        {id: 2, message: 'Hi there', likeCount: 6},
        {id: 3, message: 'Nice to meet u', likeCount: 3},
        {id: 4, message: 'mee too', likeCount: 23},
        {id: 5, message: 'My first post', likeCount: 56},
        {id: 6, message: 'Hello Wolrd', likeCount: 47},
    ],
    userProfile: null,
    status: '',
    errorMessage: null,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 7, message: action.newText, likeCount: 0}],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            };
        case SET_USER_PROFILE_STATUS:
            return {
                ...state,
                status: action.newStatus,
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId),
            };
        case SET_NEW_PROFILE_PHOTO:
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos}
            };
        case SET_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage,
            }
        default:
            return state;
    }
}

// Actions creator
export const addPostAC = (text) => ({type: ADD_POST, newText: text})
export const deletePostAC = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setUserProfileStatus = (newStatus) => ({type: SET_USER_PROFILE_STATUS, newStatus})
export const updatePhotoSuccess = (photos) => ({type: SET_NEW_PROFILE_PHOTO, photos})

// Thunks
export const getUser = (userId) => async dispatch => {
    try {
        const response = await API.profile.getUserInfo(userId)
        dispatch(setUserProfile(response));
    } catch (e) {
        console.error(e.message)
    }
}
export const getProfileStatus = (userId) => async dispatch => {
    try {
        const response = await API.profile.getStatusProfile(userId)
        dispatch(setUserProfileStatus(response));
    } catch (e) {
        console.error(e.message)
    }
}
export const updateProfileStatus = (newStatus) => async dispatch => {
    try {
        const response = await API.profile.updateStatusProfile(newStatus)
        if (response.resultCode === 0) {
            dispatch(setUserProfileStatus(newStatus));
        }
    } catch (e) {
        console.error(e.message)
    }
}
export const savePhoto = (file) => async dispatch => {
    try {
        const response = await API.profile.updatePhotoProfile(file)
        if (response.data.resultCode === 0) {
            dispatch(updatePhotoSuccess(response.data.data.photos));
        }
    } catch (e) {
        console.error(e.message)
    }
}
export const saveProfile = (formData) => async (dispatch, getState) => {
    let userId = getState().auth.id;
    try {
        const response = await API.profile.updateProfile(formData)
        if (response.data.resultCode === 0) {
            dispatch(getUser(userId));
            dispatch(setError(null))
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0].replace('(Contacts->','').replace(')','') : 'Some error';
            dispatch(setError(message))
            return Promise.reject(message)
        }
    } catch (e) {
        return Promise.reject(e.message)
    }
}

export default profileReducer;