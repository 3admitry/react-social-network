import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followUser,
    setCurrentPage,
    setPageSize,
    setTotalPages,
    setUsers,
    toogleIsFetching, toogleIsFollowHandler,
    unfollowUser
} from "../../redux/usersReducer";
import {Spin} from "antd";
import 'antd/dist/antd.css'
import {getUsers} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toogleIsFetching(true);
        getUsers(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.toogleIsFetching(false);
            if (this.props.users.length === 0) {
                this.props.setUsers(data.items);
                this.props.setTotalPages(data.totalCount)
            }
        })
    };

    paginationClickHandler = (newPage, pageSize) => {
        this.props.setCurrentPage(newPage);
        this.props.toogleIsFetching(true);
        this.props.setPageSize(pageSize);
        getUsers(pageSize, newPage).then(data => {
            //debugger
            this.props.toogleIsFetching(false);
            this.props.setUsers(data.items);
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Spin tip="Loading...">
                        <Users {...this.props} paginationClickHandler={this.paginationClickHandler}/>
                    </Spin>
                    : <Users {...this.props} paginationClickHandler={this.paginationClickHandler}/>}
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
        isLoadingFollowHandler: state.usersPage.isLoadingFollowHandler,
        followHandlerArrayOfUsers: state.usersPage.followHandlerArrayOfUsers,
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
    toogleIsFollowHandler,
})(UsersContainer);
//export default HocAccordion(UsersContainer);