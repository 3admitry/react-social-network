import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import style from './Profile.module.scss'

const Profile = ({userProfile, profileStatus, updateProfileStatus, isOwner, savePhoto, saveProfile, errorMessage}) => {
    return (
        <div className={style.profile}>
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
        </div>
    );
};

export default Profile;