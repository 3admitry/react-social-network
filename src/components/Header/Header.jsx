import React from "react";
import c from "./Header.module.css"
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className={c.header}>
            <div>
                <NavLink to="/">
                    <img
                        src="https://toppng.com/public/uploads/thumbnail/marketing-wolf-logo-wolf-head-logo-11562912326iggh3h7nby.png"
                        alt=""/>
                </NavLink>
            </div>
            {/*<h1>Header</h1>*/}
        </header>
    )
}