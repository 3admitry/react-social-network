import React from "react";
import mod from "./ProfileInfo.module.css"
import {Spin} from "antd";
import ProfileStatus from "./ProfileStatus"
import s from "../../Users/Users.module.css";
import defaultUserPhoto from "../../../assets/images/user.jpg";

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) return <Spin/>

    const handlerAvatarChange = (e) => {
        savePhoto(e.target.files[0])
    }

    return (
        <>
            <div className={mod.banner}>
                <img src="https://149611589.v2.pressablecdn.com/wp-content/uploads/2015/12/react.png" alt=""/>
            </div>
            <div>
                <div>
                    <img src={profile.photos.large || defaultUserPhoto} alt=""/>
                    {isOwner && <input type={'file'} onChange={handlerAvatarChange}/>}
                </div>
                <div>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                </div>
            </div>

        </>
    )
}