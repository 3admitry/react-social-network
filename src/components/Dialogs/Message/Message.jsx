import React from 'react';
import m from './../Dialogs.module.css'

export const Message = (props) => {
    return (
        <div className={m.message}>
            <div>{props.message}</div>
        </div>
    )
}

