import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsAuth = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    const WrappedComponent = (props) => {
        if (!props.isAuth) return <Navigate to='/login'/>
        return <Component {...props} />
    }
    return connect(mapStateToPropsAuth)(WrappedComponent);
}