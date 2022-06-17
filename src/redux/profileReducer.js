import {API} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';


let initialState = {
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
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            if (!state.newPostText) return false;
            let newPost = {id: 7, message: state.newPostText, likeCount: 0};
            return {
                ...state,
                posts: [
                    ...state.posts,
                    newPost
                ],
                newPostText: ''
            };
        case CHANGE_TEXT_POST:
            return {
                ...state,
                newPostText: action.newText
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
        default:
            return state;
    }
}
//AC
export const addPostActionCreator = () => ({type: ADD_POST})
export const changeTextPostActionCreator = (text) => ({type: CHANGE_TEXT_POST, newText: text})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setUserProfileStatus = (newStatus) => ({type: SET_USER_PROFILE_STATUS, newStatus})

//TC
export const getUser = (userId) => (dispatch) => {
    API.profile.getUserInfo(userId)
        .then(response => {
            dispatch(setUserProfile(response));
        })
}

export const getProfileStatus = (userId) => (dispatch) => {
    API.profile.getStatusProfile(userId)
        .then(response => {
            dispatch(setUserProfileStatus(response));
        })
}

export const updateProfileStatus = (newStatus) => (dispatch) => {
    API.profile.updateStatusProfile(newStatus)
        .then(response => {
            if(response.resultCode===0){
                dispatch(setUserProfileStatus(newStatus));
            }
        })
}

export default profileReducer;