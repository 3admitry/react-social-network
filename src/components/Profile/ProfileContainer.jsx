import React from "react";
import {getProfileStatus, getUser, setUserProfileStatus, updateProfileStatus} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "../../hoc/withRouter-hoc";
import Profile from "./Profile";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId && this.props.isAuth) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUser(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        return <><Profile {...this.props} /></>
    }
};

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        profileStatus: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getUser, getProfileStatus, updateProfileStatus}),
    withRouter,
)(ProfileContainer);