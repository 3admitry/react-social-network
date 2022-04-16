import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

export let store = {
    _callSubscribe() {
        console.log('Subscriber is empty');
    },
    _state: {
        sidebarPage: [
            {},
            {},
            {},
        ],
        dialogsPage: {
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
        },
        profilePage: {
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
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscribe(this._state);
    }
}

window.store = store;
//store - OPP



