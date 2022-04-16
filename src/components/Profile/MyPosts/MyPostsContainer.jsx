import React from "react";
import {addPostActionCreator, changeTextPostActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../storeContext";

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().profilePage;

                    const addNewPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    const onChangeTextArea = (value) => {
                        //props.dispatch({type: 'CHANGE-TEXT-POST', newText: postMessage.current.value})
                        store.dispatch(changeTextPostActionCreator(value));
                    }

                    return (
                        <>
                            <MyPosts onChangeTextArea={onChangeTextArea}
                                     addNewPost={addNewPost}
                                     newPostText={state.newPostText}
                                     posts={state.posts}
                            />
                        </>
                    )
                }
            }
        </StoreContext.Consumer>

    )
}