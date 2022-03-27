import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {changeTextPost} from "../../State";


export const Profile = (props) => {
    return (
        <>
            <ProfileInfo addpost={props.addpost}/>
            <MyPosts profilePage={props.profilePage} addPost={props.addPost} changeTextPost={props.changeTextPost}/>
        </>
    )
}