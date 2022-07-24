import React from "react";
import style from "./Navbar.module.scss"
import {Link, NavLink} from "react-router-dom";
import {UserOutlined} from '@ant-design/icons';
import {Button} from "antd";

export const Navbar = () => {
    return (
        <nav className={style.sidebar}>
            <div>
                <Link className={navData => navData.isActive ? style.active : style.item} to="/profile">
                    <Button type="link" block icon={<UserOutlined />}>
                        Profile
                    </Button>
                    </Link>
            </div>
            <div>
                <NavLink className={navData => navData.isActive ? style.active : style.item} to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink className={navData => navData.isActive ? style.active : style.item} to="/users">Users</NavLink>
            </div>
            <div>
                <NavLink className={navData => navData.isActive ? style.active : style.item} to="/news">News</NavLink>
            </div>
            <div>
                <NavLink className={navData => navData.isActive ? style.active : style.item} to="/music">Music</NavLink>
            </div>
        </nav>
    )
}