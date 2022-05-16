import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalPagesAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalPages: state.usersPage.totalPages,
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
        },
        setCurrentPage: (newPage)=>{
            dispatch(setCurrentPageAC(newPage))
        },
        setTotalPages: (totalPages)=>{
            dispatch(setTotalPagesAC(totalPages))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
//export default HocAccordion(UsersContainer);