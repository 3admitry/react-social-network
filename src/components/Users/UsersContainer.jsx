import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {follow, getUsers, setCurrentPage, setPageSize, unFollow} from "../../redux/usersReducer";
import {Spin} from "antd";
import 'antd/dist/antd.css'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    };

    paginationClickHandler = (newPage, pageSize) => {
        this.props.setCurrentPage(newPage);
        this.props.setPageSize(pageSize);
        this.props.getUsers(pageSize, newPage);
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
    follow,
    unFollow,
    setCurrentPage,
    setPageSize,
    getUsers
})(UsersContainer);
//export default HocAccordion(UsersContainer);