const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_TEXTAREA_POST = 'CHANGE-TEXTAREA-POST';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            if (!state.messages) return false;
            let newpMessage = {id: 5, message: state.newMessage};
            state.messages.push(newpMessage);
            state.newMessage = '';
            return state;
        case CHANGE_TEXTAREA_POST:
            state.newMessage = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const changeTextAreaPostActionCreator = (text) => ({type: CHANGE_TEXTAREA_POST, newMessage: text})

export default dialogsReducer;