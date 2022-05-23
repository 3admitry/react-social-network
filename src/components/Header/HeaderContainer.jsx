import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {setAuthData} from "../../redux/authReducer";
import {Header} from "./Header";
import c from "./Header.module.css"

class HeaderCointainer extends React.Component {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true,
            })
            .then((response) => {
                //debugger
                if (response.data.resultCode === 0) {
                    this.props.setAuthData(response.data.data);
                }
            })
    }

    render() {
        return (
            <header className={c.header}>
                <Header {...this.props} />
            </header>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {setAuthData})(HeaderCointainer)