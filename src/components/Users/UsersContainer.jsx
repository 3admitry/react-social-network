import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import {HocAccordion} from "../common/hoc-accordion";



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (id) => {
            dispatch(followAC(id))
        },
        unfollowUser: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users)=>{
            console.log('CALL setUsers')
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

// export default HocAccordion(UsersContainer);
export default HocAccordion(UsersContainer);