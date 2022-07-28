import React from 'react';
import {Avatar, Button, List, Pagination} from "antd";
import style from './Users.module.scss'
import noPhoto from './../../assets/images/no-avatar.png'
import {NavLink} from "react-router-dom";

const Users = React.memo(({
                              currentPage,
                              pageSize,
                              paginationClickHandler,
                              totalPages,
                              followHandlerArrayOfUsers,
                              follow,
                              unFollow,
                              ...props
                          }) => {
    return (
        <div className={style.users}>
            <Pagination current={currentPage}
                        pageSize={pageSize}
                        onChange={paginationClickHandler}
                        total={totalPages}
            />
            <div className={style.usersList}>
                <List
                    itemLayout="horizontal"
                    size="large"
                    dataSource={props.users}
                    renderItem={item => (
                        <List.Item
                            key={item.id}
                            actions={[
                                (item.followed
                                        ? <Button disabled={followHandlerArrayOfUsers.some(id => id === item.id)}
                                                  type="primary" onClick={() => {
                                            unFollow(item.id)
                                        }}>Unfollow</Button>
                                        : <Button disabled={followHandlerArrayOfUsers.some(id => id === item.id)}
                                                  type="primary" onClick={() => {
                                            follow(item.id);
                                        }}>Follow</Button>
                                )
                            ]}
                        >
                            <List.Item.Meta
                                avatar={
                                    <NavLink to={`/profile/${item.id}`}>
                                        <Avatar src={item.photos.small !== null ? item.photos.small : noPhoto}/>
                                    </NavLink>
                                }
                                title={<NavLink to={`/profile/${item.id}`}>{item.name}</NavLink>}
                                description={item.status && <>status: {item.status}</>}
                            />
                        </List.Item>
                    )}
                />

            </div>
            <Pagination current={currentPage}
                        pageSize={pageSize}
                        onChange={paginationClickHandler}
                        total={totalPages}
            />
        </div>

    )
});

export default Users;