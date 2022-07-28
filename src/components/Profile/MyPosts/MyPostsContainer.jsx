import React from "react";
import {addPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

class MyPostsContainer extends React.Component {

    render() {
        return <MyPosts {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        auth: state.auth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (newPostText) => {
            dispatch(addPostAC(newPostText));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);