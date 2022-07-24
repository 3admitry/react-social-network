import React from 'react';
import {Pagination} from "antd";
import User from "./User";

const Users = React.memo(props => {
    return (
        <div style={{padding: '1rem'}}>
            <Pagination current={props.currentPage}
                        pageSize={props.pageSize}
                        onChange={props.paginationClickHandler}
                        total={props.totalPages}/>
            <div>
                {props.users.map(u => <User
                        key={u.id}
                        user={u}
                        followHandlerArrayOfUsers={props.followHandlerArrayOfUsers}
                        follow={props.follow}
                        unFollow={props.unFollow}
                    />
                )}
            </div>
        </div>
    )
});

export default Users;