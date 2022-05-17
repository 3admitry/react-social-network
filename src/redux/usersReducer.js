const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 10,
    totalPages: 0,
    isFetching: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
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
        default:
            return state;
    }
}

export const followAC = (id) => ({type: FOLLOW, userID: id});
export const unfollowAC = (id) => ({type: UNFOLLOW, userID: id});
export const setUsersAC = (usersArr) => ({type: SET_USERS, users: usersArr});
export const setCurrentPageAC = (currentPage) => ({type: SET_PAGE, currentPage});
export const setPageSizeAC = (pageSize) => ({type: SET_PAGE_SIZE, pageSize});
export const setTotalPagesAC = (totalPages) => ({type: SET_TOTAL_PAGES, totalPages});
export const toogleIsFetchingAC = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching});

export default usersReducer;