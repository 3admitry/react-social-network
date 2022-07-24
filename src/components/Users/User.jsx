import React from 'react';
import s from './Users.module.css';
import defaultUserPhoto from '../../assets/images/user.jpg';
import {Button} from "antd";
import {NavLink} from "react-router-dom";

const User = React.memo(({user, followHandlerArrayOfUsers, follow, unFollow}) => {
    return (
        <div style={{padding: '1rem'}} className={s.userBox}>
            <div style={{width: '100px'}}>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={s.ava} alt=''
                             src={user.photos.small !== null ? user.photos.small : defaultUserPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <Button disabled={followHandlerArrayOfUsers.some(id => id === user.id)}
                                      type="primary" onClick={() => {
                                unFollow(user.id)
                            }}>Unfollow</Button>
                            : <Button disabled={followHandlerArrayOfUsers.some(id => id === user.id)}
                                      type="primary" onClick={() => {
                                follow(user.id);
                            }}>Follow</Button>
                    }
                </div>
            </div>
            <div style={{width: '244px'}}>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
            <div>
                <div>{'u.location.country'}</div>
                <div>{'u.location.cityName'}</div>
            </div>
        </div>
    )
});

export default User;