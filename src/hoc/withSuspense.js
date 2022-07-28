// Codding a test HOC
import React, {Suspense} from 'react';
import {Spin} from "antd";
import style from "../components/SocialNetworkApp.module.scss";

export const withSuspense = (Component) => {
    function WrappedComponent(props) {
        return (
            <Suspense fallback={<div className={style.initialize}><Spin size="large"/></div>}>
                <Component {...props} />
            </Suspense>
        )
    }

    return WrappedComponent
}