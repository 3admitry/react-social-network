import React from "react";
import c from "./Header.module.css"
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    const logoutHandler = () => {
        props.logoutTC()
    }
    return (
        <header className={c.header}>
            <NavLink to="/">
                <img
                    src="https://toppng.com/public/uploads/thumbnail/marketing-wolf-logo-wolf-head-logo-11562912326iggh3h7nby.png"
                    alt=""/>
            </NavLink>

            {props.isAuth
                ? <>
                    <span>{props.login}</span> | <button onClick={logoutHandler}>logout</button>
                </>
                : <NavLink to="/login">Login</NavLink>}
        </header>
    )
}