import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followUser,
    setCurrentPage,
    setPageSize,
    setTotalPages,
    setUsers,
    toogleIsFetching,
    unfollowUser
} from "../../redux/usersReducer";
import axios from "axios";
import {Spin} from "antd";
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


export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setPageSize,
    setTotalPages,
    toogleIsFetching,

})(UsersContainer);
//export default HocAccordion(UsersContainer);