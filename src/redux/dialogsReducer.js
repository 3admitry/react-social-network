const ADD_MESSAGE = 'social-network/dialogs/ADD-MESSAGE';
const CHANGE_TEXTAREA_POST = 'social-network/dialogs/CHANGE-TEXTAREA-POST';

export const initialState = {
    dialogsItems: [
        {
            id: 1,
            name: 'July',
            avaUrl: 'https://html5css.ru/howto/img_avatar2.png'
        },
        {
            id: 2,
            name: 'Dmitry',
            avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLg7YYue_VyRsQLCwmguYP8nSLBwe24G8WgqJr8i_YxHwyHXbn9wqkZXAwdAvSGF9kVMk&usqp=CAU'
        },
        {
            id: 3,
            name: 'Alex',
            avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHK_xd4GHWvzXkA3DygGiU3---JdQdHXbA_uTguFvckcwsMDakFodlYlaQMv4p6fWM5I&usqp=CAU'
        },
        {
            id: 4,
            name: 'Ann',
            avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuCwSGCSFDd2fiwEJIivTZMtyi_C-rJviL6eaNYj_D6JSCsqGeNKxGSikjn8QcPqPvWQ&usqp=CAU'
        },
        {
            id: 5,
            name: 'Peter',
            avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrUy8qKYQiQSOCcDsL9Nic0IPiny796P9ug&usqp=CAU'
        },
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Fine, thanks'},
        {id: 4, message: 'Bye'},
    ],
    newMessage: '',
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: action.newMessage}],
                newMessage: ''
            };
        case CHANGE_TEXTAREA_POST:
            return {
                ...state,
                newMessage: action.newMessage
            };
        default:
            return state;
    }
}

export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE, newMessage})
export const changeTextAreaPostAC = (text) => ({type: CHANGE_TEXTAREA_POST, newMessage: text})

export default dialogsReducer;