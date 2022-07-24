import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {saveProfile} from "../../redux/profileReducer";

const Profile = ({userProfile, profileStatus, updateProfileStatus, isOwner, savePhoto, saveProfile, errorMessage}) => {
    return (
        <>
            <ProfileInfo
                savePhoto={savePhoto}
                isOwner={isOwner}
                profile={userProfile}
                status={profileStatus}
                updateStatus={updateProfileStatus}
                saveProfile={saveProfile}
                errorMessage={errorMessage}
            />
            <MyPostsContainer/>
        </>
    );
};

export default Profile;