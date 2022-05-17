import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC, setPageSizeAC,
    setTotalPagesAC,
    setUsersAC,
    toogleIsFetchingAC,
    unfollowAC
} from "../../redux/usersReducer";
import axios from "axios";
import {Button, Spin} from "antd";
import 'antd/dist/antd.css'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.toogleIsFetching(false);
                if (this.props.users.length === 0) {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalPages(response.data.totalCount)
                }
            })
    };

    paginationClickHandler = (newPage, pageSize) => {
        this.props.setCurrentPage(newPage);
        this.props.toogleIsFetching(true);
        this.props.setPageSize(pageSize);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${newPage}`)
            .then(response => {
                this.props.toogleIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Spin tip="Loading..."> <Users {...this.props}
                                                     paginationClickHandler={this.paginationClickHandler}/>
                    </Spin>
                    : <Users {...this.props} paginationClickHandler={this.paginationClickHandler}/>}

                {/*
                <Users {...this.props}
                       totalPages={this.props.totalPages}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       paginationClickHandler={this.paginationClickHandler}
                       users={this.props.users}
                       followUser={this.props.followUser}
                       unfollowUser={this.props.unfollowUser}
                />
*/}

                {/*

                totalPages={this.props.totalPages}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                paginationClickHandler={this.paginationClickHandler}
                users={this.props.users}
                followUser={this.props.followUser}
                unfollowUser={this.props.unfollowUser}
*/}


            </>
        )

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalPages: state.usersPage.totalPages,
        isFetching: state.usersPage.isFetching,
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
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (newPage) => {
            dispatch(setCurrentPageAC(newPage))
        },
        setTotalPages: (totalPages) => {
            dispatch(setTotalPagesAC(totalPages))
        },
        toogleIsFetching: (isFetching) => {
            dispatch(toogleIsFetchingAC(isFetching))
        },
        setPageSize: (pageSize) => {
            dispatch(setPageSizeAC(pageSize))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
//export default HocAccordion(UsersContainer);