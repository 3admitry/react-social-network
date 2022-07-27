import React, {useState} from "react";
import style from "./ProfileInfo.module.scss"
import {Badge, Button, Divider, Spin} from "antd";
import ProfileStatus from "./ProfileStatus"
import defaultUserPhoto from "../../../assets/images/user.jpg";
import {ProfileDataForm} from "./ProfileDataForm";
import {Typography} from 'antd';
import {CameraOutlined, EditOutlined} from "@ant-design/icons";

const {Title} = Typography;

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
                        <div className={style.avatarContainer}>
                            <div className={style.avatar}>
                                <img src={profile.photos.large || defaultUserPhoto} alt=""/>
                                {isOwner &&
                                    <>
                                        <label htmlFor="upload-photo" className={style.labelAvatar}>
                                            <CameraOutlined/>
                                            <input type="file" id='upload-photo' style={{display: 'none'}}
                                                   onChange={handlerAvatarChange}/>
                                        </label>
                                    </>
                                }
                            </div>
                            <div className={style.editButton}>
                                {(isOwner && !editMode)
                                    ? <div>
                                        <Button onClick={switchEditMode} icon={<EditOutlined/>}>
                                            Edit profile
                                        </Button>
                                    </div>
                                    : <div>
                                        <input className={style.submitButton} form="profile-form" type="submit" value={'Save'}/>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className={style.fullName}>
                            {profile.fullName}
                        </div>
                        <div className={style.status}>
                            <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                        </div>
                    </div>
                </div>
                <div className={style.infoProfile}>
                    <Divider orientation="left" orientationMargin={0}>
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
        <div className={style.ProfileData}>
            <div className={style.profileItem}>
                <div className={style.profileItemTitle}>Full name</div>
                <div className={style.profileItemDesc}>{profile.fullName}</div>
            </div>
            <div className={style.profileItem}>
                <div className={style.profileItemTitle}>About me</div>
                <div className={style.profileItemDesc}>{(profile.aboutMe || '—')}</div>
            </div>
            <div className={style.profileItem}>
                <div className={style.profileItemTitle}>Looking for a job</div>
                <div className={style.profileItemDesc}>{profile.lookingForAJob
                    ? <Badge status="success"/>
                    : <Badge status="error"/>}
                </div>
            </div>
            <div className={style.profileItem}>
                <div className={style.profileItemTitle}>Description</div>
                <div className={style.profileItemDesc}>{profile.lookingForAJobDescription}</div>
            </div>
            {
                Object.keys(profile.contacts).map((contact, index) => {
                    return (
                        <div key={index} className={style.profileItem}>
                            <div className={style.profileItemTitle}>{contact}</div>
                            <div className={style.profileItemDesc}>{(profile.contacts[contact] || '—')}</div>
                        </div>
                    )
                })
            }
        </div>
    );
};
