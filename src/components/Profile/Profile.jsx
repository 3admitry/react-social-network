import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {

    return (
        <>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
        </>
    )
}