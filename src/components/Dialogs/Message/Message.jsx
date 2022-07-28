import React from 'react';
import style from '../Dialogs.module.scss'

export const Message = (props) => {
    return (
        <div className={style.message}>
            <div>{props.message}</div>
        </div>
    )
}

