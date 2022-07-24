import React, {useState} from "react";
import mod from "./ProfileInfo.module.css"
import {Spin} from "antd";
import ProfileStatus from "./ProfileStatus"
import defaultUserPhoto from "../../../assets/images/user.jpg";
import {ProfileDataForm} from "./ProfileDataForm";
import {saveProfile} from "../../../redux/profileReducer";

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, errorMessage}) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) return <Spin/>

    const handlerAvatarChange = (e) => {
        savePhoto(e.target.files[0])
    }

    const switchEditMode = () => setEditMode(!editMode)

    const submitProfileForm = (data) => {
        saveProfile(data).then(()=>{
            switchEditMode()
        })
        //props.loginTC(data.email, data.password, data.rememberMe, true)
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
                {
                    editMode
                        ? <ProfileDataForm profile={profile} switchEditMode={switchEditMode}
                                           submitProfileForm={submitProfileForm}
                                           errorMessage={errorMessage}/>
                        : <ProfileData profile={profile} isOwner={isOwner} switchEditMode={switchEditMode}/>
                }

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
