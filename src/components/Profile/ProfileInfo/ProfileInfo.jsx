import React, {useState} from "react";
import style from "./ProfileInfo.module.scss"
import {Divider, Spin} from "antd";
import ProfileStatus from "./ProfileStatus"
import defaultUserPhoto from "../../../assets/images/user.jpg";
import {ProfileDataForm} from "./ProfileDataForm";
import { Typography } from 'antd';
import {CameraOutlined} from "@ant-design/icons";
const { Title } = Typography;

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, errorMessage}) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) return <Spin/>

    const handlerAvatarChange = (e) => savePhoto(e.target.files[0])
    const switchEditMode = () => setEditMode(!editMode)
    const submitProfileForm = (data) => {
        saveProfile(data).then(() => {
            switchEditMode()
        })
    }

    return (
        <>
            <div className={style.profile}>
                <div className={style.mainProfile}>
                    <div className={style.profileBackground}></div>
                    <div className={style.avatarStatus}>
                        <div className={style.avatar}>
                            <img src={profile.photos.large || defaultUserPhoto} alt=""/>
                            {isOwner &&
                                <>
                                    <label htmlFor="upload-photo" className={style.labelAvatar}>
                                        <CameraOutlined />
                                        <input type="file" id='upload-photo' style={{display:'none'}} onChange={handlerAvatarChange}/>
                                    </label>

                                   {/* <input type={'file'} onChange={handlerAvatarChange}/>*/}
                                </>
                            }
                        </div>
                        <div className={style.status}>
                            <ProfileStatus status={status} updateStatus={updateStatus}/>
                        </div>
                    </div>
                </div>
                <div className={style.infoProfile}>
                    <Divider orientation="left" orientationMargin={0} >
                        <Title level={3}>User information</Title>
                    </Divider>

                    {
                        editMode
                            ? <ProfileDataForm profile={profile} switchEditMode={switchEditMode}
                                               submitProfileForm={submitProfileForm}
                                               errorMessage={errorMessage}/>
                            : <ProfileData profile={profile} isOwner={isOwner} switchEditMode={switchEditMode}/>
                    }
                </div>
            </div>
        </>
    )
}

const ProfileData = ({profile, isOwner, switchEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={switchEditMode}>Edit profile</button>
            </div>}
            <div>
                <b>Full name:</b> {profile.fullName}
            </div>
            <div>
                <b>About me:</b> {(profile.aboutMe || '—')}
            </div>
            {
                profile.lookingForAJob &&
                <div>
                    <b>Looking for a job:</b> {profile.lookingForAJob}
                </div>
            }
            {
                profile.lookingForAJobDescription &&
                <div>
                    <b>Description:</b> {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>Contacts</b>
                {
                    Object.keys(profile.contacts).map((contact, index) => {
                        return (
                            <div key={index}>
                                <b>{contact}:</b> {(profile.contacts[contact] || '—')}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};
