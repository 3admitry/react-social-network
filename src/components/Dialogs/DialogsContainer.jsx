import React from 'react';
import {addMessageActionCreator, changeTextAreaPostActionCreator} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../storeContext";

export const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store)=>{
                    let state = store.getState().dialogsPage;

                    const onChangeTextArea = (value) => {
                        store.dispatch(changeTextAreaPostActionCreator(value))
                    }
                    const addNewMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }
                    return (
                        <>
                            <Dialogs state={state} addNewMessage={addNewMessage} onChangeTextArea={onChangeTextArea}/>
                        </>
                    )
                }
            }
        </StoreContext.Consumer>
    );
};
