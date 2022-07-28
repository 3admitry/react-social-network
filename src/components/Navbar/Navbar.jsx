import React from "react";
import style from "./Navbar.module.scss"
import {NavLink} from "react-router-dom";
import {AlignLeftOutlined, MessageOutlined, SoundOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';

export const Navbar = () => {
    return (
        <aside className={style.sidebar}>
            <nav className={style.menu}>
                <div>
                    <NavLink className={({isActive}) => style.navLink + (isActive ? ` ${style.active}` : "")}
                             to="/profile">
                        <UserOutlined/>
                        Profile
                    </NavLink>
                </div>
                <div>
                    <NavLink className={({isActive}) => style.navLink + (isActive ? ` ${style.active}` : "")}
                             to="/users">
                        <TeamOutlined/>
                        Users
                    </NavLink>
                </div>
                <div>
                    <NavLink className={({isActive}) => style.navLink + (isActive ? ` ${style.active}` : "")}
                             to="/dialogs">
                        <MessageOutlined/>
                        Messages
                    </NavLink>
                </div>
                <div>
                    <NavLink className={({isActive}) => style.navLink + (isActive ? ` ${style.active}` : "")}
                             to="/news">
                        <AlignLeftOutlined/>
                        News
                    </NavLink>
                </div>
                <div>
                    <NavLink className={({isActive}) => style.navLink + (isActive ? ` ${style.active}` : "")}
                             to="/music">
                        <SoundOutlined/>
                        Music
                    </NavLink>
                </div>
            </nav>
        </aside>

    )
}