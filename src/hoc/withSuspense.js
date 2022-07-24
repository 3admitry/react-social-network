// Codding a test HOC
import React, {Suspense} from 'react';
import {Spin} from "antd";

export const withSuspense = (Component) => {
    function WrappedComponent(props) {
        return (
            <Suspense fallback={<Spin size="large"/>}>
                <Component {...props} />
            </Suspense>
        )
    }

    return WrappedComponent
}