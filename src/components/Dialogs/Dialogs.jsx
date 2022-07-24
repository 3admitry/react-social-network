import React from 'react';
import m from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {useForm} from "react-hook-form";

export const Dialogs = (props) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    let dialogItems = props.dialogsPage.dialogsItems.map((d, i) => {
        return <DialogItem key={i} name={d.name} id={d.id} avatar={d.avaUrl}/>
    })
    let messagesItems = props.dialogsPage.messages.map((m, i) => <Message key={i} message={m.message}/>)

    const onSubmit = (data) => {
        props.addNewMessage(data.message);
        reset();
    }

    return (
        <div className={m.dialogs}>
            <div className={m.dialog}>
                {dialogItems}
            </div>
            <div className={m.messages}>
                {messagesItems}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <textarea placeholder={'Type your message'} {...register("message", {required: true})} />
                        {errors.post && <span>This field is required</span>}
                    </div>
                    <div>
                        <input type="submit" value={'Send message'}/>
                    </div>
                </form>
            </div>
        </div>
    );
};