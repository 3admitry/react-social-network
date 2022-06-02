import React from "react";
import {getUser} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "../common/withRouter-hoc";
import Profile from "./Profile";

class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId || !isFinite(+userId)){
            userId = 2;
        }

        this.props.getUser(userId);
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
    }
};

export default connect(mapStateToProps, {getUser})(withRouter(ProfileContainer));