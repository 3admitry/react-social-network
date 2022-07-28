import React from 'react';
import style from './Dialogs.module.scss'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Controller, useForm} from "react-hook-form";
import TextArea from "antd/es/input/TextArea";
import {Button} from "antd";

export const Dialogs = (props) => {

    const {handleSubmit, formState: {errors}, reset, control} = useForm();
    let dialogItems = props.dialogsPage.dialogsItems.map((d, i) => {
        return <DialogItem key={i} name={d.name} id={d.id} avatar={d.avaUrl}/>
    })
    let messagesItems = props.dialogsPage.messages.map((m, i) => <Message key={i} message={m.message}/>)

    const onSubmit = (data) => {
        props.addNewMessage(data.message);
        reset();
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                {dialogItems}
            </div>
            <div className={style.messages}>
                {messagesItems}
                <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                    <div>
                        <Controller
                            name="message"
                            control={control}
                            rules={{required: true}}
                            render={({field}) => <>
                                <div className={style.formItemContainer}>
                                    <TextArea className={style.formItemContainerTextArea} rows={4}
                                              placeholder="Type your message" maxLength={250} {...field}/>
                                    {errors.message && <div style={{color: 'red'}}>This field is required</div>}
                                </div>
                            </>
                            }
                        />
                    </div>
                    <div className={style.formSubmitButton}>
                        <Button type="primary" htmlType="submit">
                            Send message
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};