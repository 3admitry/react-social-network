import React from "react";
import mod from "./ProfileInfo.module.css"
import {Spin} from "antd";
import ProfileStatus from "./ProfileStatus"

export const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Spin />

    }


    return (
        <>
            <div className={mod.banner}>
                <img src="https://149611589.v2.pressablecdn.com/wp-content/uploads/2015/12/react.png" alt=""/>
            </div>
            <div>
                <div>
                    <img src={props.profile.photos?.large} alt=""/>
                </div>
                <div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>

        </>
    )
}