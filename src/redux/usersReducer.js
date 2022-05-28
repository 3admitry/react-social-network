const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOW_HANDLER = 'TOOGLE_IS_FOLLOW_HANDLER';

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 10,
    totalPages: 0,
    isFetching: false,
    isLoadingFollowHandler: false,
    followHandlerArrayOfUsers: [],
}

const usersReducer = (state = initialState, action) => {
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
        case TOOGLE_IS_FETCHING:
            return {

                ...state,
                isFetching: action.isFetching,
            }
        case TOOGLE_IS_FOLLOW_HANDLER:

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
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching});
export const toogleIsFollowHandler = (isFetching, id) => ({type: TOOGLE_IS_FOLLOW_HANDLER, isFetching, id});
//export const toogleIsFollowHandler = (isFetching) => ({type: TOOGLE_IS_FOLLOW_HANDLER, isFetching});

export default usersReducer;