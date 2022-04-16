import React, {useRef} from 'react';
import m from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {

    let dialogItems = props.state.dialogsItems.map((d, i) => {
        return <DialogItem key={i} name={d.name} id={d.id} avatar={d.avaUrl}/>
    })
    let messagesItems = props.state.messages.map((m, i) => <Message key={i} message={m.message}/>)
    let newMessage = props.state.newMessage
    let changedMessage = useRef(null);

    const onChangeTextAreaHandler = () => {
        props.onChangeTextArea(changedMessage.current.value);
    }
    const onClickButtonHandler = () => {
        props.addNewMessage();
    }

    return (
        <div className={m.dialogs}>
            <div className={m.dialog}>
                {dialogItems}
            </div>
            <div className={m.messages}>
                {messagesItems}
                <div>
                    <textarea onChange={onChangeTextAreaHandler}
                              ref={changedMessage}
                              value={newMessage}/>
                    <button onClick={onClickButtonHandler}>Add</button>
                </div>
            </div>
        </div>
    );
};