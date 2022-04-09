import React, {useRef} from 'react';
import m from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessageActionCreator, changeTextAreaPostActionCreator} from "../../redux/dialogsReducer";

export const Dialogs = (props) => {

    let dialogItems = props.dialogs.dialogsItems.map((d, i) => <DialogItem key={i} name={d.name} id={d.id}
                                                                           avatar={d.avaUrl}/>)
    let messagesItems = props.dialogs.messages.map((m, i) => <Message key={i} message={m.message}/>)

    return (
        <div className={m.dialogs}>
            <div className={m.dialog}>
                {dialogItems}
            </div>
            <div className={m.messages}>
                {messagesItems}
                <AddNewMessage dispatch={props.dispatch} message={props.dialogs.newMessage}/>
            </div>

        </div>
    );
};

const AddNewMessage = (props) => {
    let changedMessage = useRef(null);

    const onChangeTextAreaHandler = () => {
        props.dispatch(changeTextAreaPostActionCreator(changedMessage.current.value))
    }
    const onClickButtonHandler = () => {
        props.dispatch(addMessageActionCreator())
    }

    return (
        <div>
            <textarea onChange={onChangeTextAreaHandler}
                      ref={changedMessage}
                      value={props.message}/>
            <button onClick={onClickButtonHandler}>Add</button>
        </div>
    )
}
