import {API} from "../api/api";

const FOLLOW = 'social-network/users/FOLLOW';
const UNFOLLOW = 'social-network/users/UNFOLLOW';
const SET_USERS = 'social-network/users/SET_USERS';
const SET_PAGE = 'social-network/users/SET_PAGE';
const SET_PAGE_SIZE = 'social-network/users/SET_PAGE_SIZE';
const SET_TOTAL_PAGES = 'social-network/users/SET_TOTAL_PAGES';
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOW_HANDLER = 'social-network/users/TOGGLE_IS_FOLLOW_HANDLER';

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 10,
    totalPages: 0,
    isFetching: false,
    isLoadingFollowHandler: false,
    followHandlerArrayOfUsers: [],
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.pageSize,
            }
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.totalPages,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_FOLLOW_HANDLER:
            return {
                ...state,
                isLoadingFollowHandler: action.isFetching,
                followHandlerArrayOfUsers: action.isFetching ? [...state.followHandlerArrayOfUsers, action.id] : state.followHandlerArrayOfUsers.filter(id => id !== action.id),
            }
        default:
            return state;
    }
}

export const followUser = (id) => ({type: FOLLOW, userID: id});
export const unfollowUser = (id) => ({type: UNFOLLOW, userID: id});
export const setUsers = (usersArr) => ({type: SET_USERS, users: usersArr});
export const setCurrentPage = (currentPage) => ({type: SET_PAGE, currentPage});
export const setPageSize = (pageSize) => ({type: SET_PAGE_SIZE, pageSize});
export const setTotalPages = (totalPages) => ({type: SET_TOTAL_PAGES, totalPages});
export const toogleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toogleIsFollowHandler = (isFetching, id) => ({type: TOGGLE_IS_FOLLOW_HANDLER, isFetching, id});

export const fetchUsers = (pageSize, currentPage) => async dispatch => {
    dispatch(toogleIsFetching(true));
    try {
        const data = await API.users.getAllUsers(pageSize, currentPage)
        dispatch(setUsers(data.items));
        dispatch(setTotalPages(data.totalCount));
    } catch (error) {
        console.error(error.message)
    } finally {
        dispatch(toogleIsFetching(false));
    }
}

const setUserFollowUnfollow = async (dispatch, userId, methodAPI, actionCreator) => {
    dispatch(toogleIsFollowHandler(true, userId));
    try {
        const data = await methodAPI(userId)
        if (data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
    } catch (e) {
        console.error(e.message)
    } finally {
        dispatch(toogleIsFollowHandler(false, userId));
    }
}

export const unFollow = (userId) => (dispatch) => {
    setUserFollowUnfollow(dispatch, userId, API.users.unfollowUser, unfollowUser)
}
export const follow = (userId) => (dispatch) => {
    setUserFollowUnfollow(dispatch, userId, API.users.followUser, followUser)
}

export default usersReducer;