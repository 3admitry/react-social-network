import React from "react";
import c from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={c.sidebar}>
            <div>
                <NavLink className={navData => navData.isActive ? c.active : c.item} to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink className={navData => navData.isActive ? c.active : c.item} to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink className={navData => navData.isActive ? c.active : c.item} to="/users">Users</NavLink>
            </div>
            <div>
                <NavLink className={navData => navData.isActive ? c.active : c.item} to="/#">News</NavLink>
            </div>
            <div>
                <NavLink className={navData => navData.isActive ? c.active : c.item} to="/#">Music</NavLink>
            </div>
        </nav>
    )
}