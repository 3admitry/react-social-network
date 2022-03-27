import React from 'react';
import m from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {NavLink} from "react-router-dom";



export const Dialogs = (props) => {
/*    let dialogs = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Dmitry'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Peter'},
    ]
    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Fine, thanks'},
        {id: 4, message: 'Bye'},
    ]*/

    let dialogItems = props.dialogs.dialogsItems.map((d,i) => <DialogItem key={i} name={d.name} id={d.id} avatar={d.avaUrl}/>)
    let messagesItems =  props.dialogs.messages.map((m,i) => <Message key={i} message={m.message} />)


    return (
        <div className={m.dialogs}>
            <div className={m.dialog}>
                {dialogItems}
            </div>
            <div className={m.messages}>
                {messagesItems}
            </div>

        </div>
    );
};
