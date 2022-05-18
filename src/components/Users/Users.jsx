import React from 'react';
import s from './Users.module.css';
import defaultUserPhoto from '../../assets/images/user.jpg';
import {Button, Pagination} from "antd";
import c from "../Navbar/Navbar.module.css";
import {NavLink} from "react-router-dom";

const Users = (props) => {
/*    let countPages = Math.ceil(props.totalPages / props.pageSize);
    let pages = [];
    for (let i = 1; i < countPages; i++) {
        pages.push(i)
    }*/
    console.log(props.pageSize);

    return (
        <div style={{padding: '1rem'}}>
            <Pagination current={props.currentPage}
                        pageSize={props.pageSize}
                        onChange={props.paginationClickHandler}
                        total={props.totalPages} />

{/*            <ul className={s.pagination}>
                {pages.map(el => {
                    return <li key={'paginationItem-' + el}
                               className={`${s.item} ` + (props.currentPage === el && s.selectedPage)}
                               onClick={() => (props.paginationClickHandler(el))}
                    >
                        {el}
                    </li>
                })}
            </ul>*/}
            {props.users.map(u => {
                return (
                    <div key={u.id} style={{padding: '1rem'}} className={s.userBox}>
                        <div style={{width: '100px'}}>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                <img className={s.ava}
                                     src={u.photos.small !== null ? u.photos.small : defaultUserPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {
                                    u.followed
                                        ? <Button type="primary" onClick={() => props.unfollowUser(u.id)}>Unfollow</Button>
                                        : <Button type="primary" onClick={() => props.followUser(u.id)}>Follow</Button>
                                }
                            </div>
                        </div>
                        <div style={{width: '244px'}}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.cityName'}</div>
                        </div>

                    </div>)
            })}
        </div>
    )

}

export default Users;