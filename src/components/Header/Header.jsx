import React from "react";
import style from "./Header.module.scss"
import {Link, NavLink} from "react-router-dom";
import {Button} from "antd";
import {LoginOutlined,LogoutOutlined} from '@ant-design/icons';

export const Header = (props) => {
    const logoutHandler = () => {
        props.logoutTC()
    }
    return (
        <header className={style.header}>
            <div className={style.headerWrapper}>
                <div>
                    <NavLink className={style.logoLink} to="/">
                        <div>
                            <div className={style.logoLinkTitle}>incubatorBook</div>
                            <div className={style.logoLinkDesc}>social JS network</div>
                        </div>
                    </NavLink>
                </div>
                <div className={style.login}>
                    {props.isAuth
                        ? <>
                            <span>{props.login}</span>
                            <Button onClick={logoutHandler} size="large" ghost icon={<LogoutOutlined />}>Sing Out</Button>
                        </>
                        : <Link to="/login"><Button size="large" ghost icon={<LoginOutlined/>}>Sing In</Button></Link>

                    }
                </div>
            </div>

        </header>
    )
}