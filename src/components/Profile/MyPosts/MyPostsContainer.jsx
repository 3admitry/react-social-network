import {addPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        profile: state.profilePage.userProfile
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (newPostText) => {
            dispatch(addPostAC(newPostText));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;