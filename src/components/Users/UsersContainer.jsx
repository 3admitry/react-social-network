import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {fetchUsers, follow, setCurrentPage, setPageSize, unFollow} from "../../redux/usersReducer";
import {Spin} from "antd";
import 'antd/dist/antd.css'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowHandlerArrayOfUsers,
    getIsFetching,
    getIsLoadingFollowHandler,
    getPageSize,
    getTotalPages,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        const {pageSize, currentPage} = this.props;
        this.props.getUsers(pageSize, currentPage);
    };

    paginationClickHandler = (newPage, pageSize) => {
        const {setCurrentPage, setPageSize, getUsers} = this.props;
        setCurrentPage(newPage);
        setPageSize(pageSize);
        getUsers(pageSize, newPage);
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
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalPages: getTotalPages(state),
        isFetching: getIsFetching(state),
        isLoadingFollowHandler: getIsLoadingFollowHandler(state),
        followHandlerArrayOfUsers: getFollowHandlerArrayOfUsers(state),
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        setPageSize,
        getUsers: fetchUsers
    }),
)(UsersContainer);
//export default HocAccordion(UsersContainer);