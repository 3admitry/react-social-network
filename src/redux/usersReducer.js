const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 100,
    totalPages: 100,
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
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.totalPages,
            }
        default:
            return state;
    }
}

export const followAC = (id) => ({type: FOLLOW, userID: id});
export const unfollowAC = (id) => ({type: UNFOLLOW, userID: id});
export const setUsersAC = (usersArr) => ({type: SET_USERS, users: usersArr});
export const setCurrentPageAC = (currentPage) => ({type: SET_PAGE, currentPage});
export const setTotalPagesAC = (totalPages) => ({type: SET_TOTAL_PAGES, totalPages});

export default usersReducer;