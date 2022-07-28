import React from 'react';
import m from '../Dialogs.module.scss'
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={m.dialogBox}>
            <NavLink to={path} className={m.dialogLink}>
                <img className={m.avatar} src={props.avatar} alt=""/>
                <span>{props.name}</span>
            </NavLink>
        </div>
    )
}


