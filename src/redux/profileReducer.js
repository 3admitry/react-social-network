const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';

let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hello', likeCount: 5},
        {id: 2, message: 'Hi there', likeCount: 6},
        {id: 3, message: 'Nice to meet u', likeCount: 3},
        {id: 4, message: 'mee too', likeCount: 23},
        {id: 5, message: 'My first post', likeCount: 56},
        {id: 6, message: 'Hello Wolrd', likeCount: 47},
    ]
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const changeTextPostActionCreator = (text) => ({type: CHANGE_TEXT_POST, newText: text})

export default profileReducer;