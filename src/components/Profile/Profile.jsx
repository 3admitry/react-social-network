import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {setUserProfileStatus, updateProfileStatus} from "../../redux/profileReducer";

const Profile = (props) => {
    return (
        <>
            <ProfileInfo profile={props.userProfile} status={props.profileStatus} updateStatus={props.updateProfileStatus}/>
            <MyPostsContainer/>
        </>
    );
};

export default Profile;