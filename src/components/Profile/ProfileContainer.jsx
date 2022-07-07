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
        if(!userId || this.props.isAuth){
            userId = this.props.authorizedUserId;
        }else{
            
        }

        this.props.getUser(userId);
        this.props.getProfileStatus(userId);
  /*      axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                    this.props.setUserProfile(response.data);
            })*/

    };


    render() {
        return (
            <>
                <Profile {...this.props} />
                {/*<ProfileInfo {...this.props}/>
                <MyPostsContainer/>*/}
            </>
        );
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
    // withAuthRedirect,
    connect(mapStateToProps, {getUser, getProfileStatus, updateProfileStatus}),
    withRouter,
)(ProfileContainer);