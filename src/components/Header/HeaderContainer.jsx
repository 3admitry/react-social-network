import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {setAuthData} from "../../redux/authReducer";
import {Header} from "./Header";
import c from "./Header.module.css"
import {getAuth} from "../../api/api";

class HeaderCointainer extends React.Component {
    componentDidMount() {
        getAuth().then((data)=>{
            if (data.resultCode === 0) {
                this.props.setAuthData(data.data);
            }
        })
    }

    render() {
        return (
            <>
                <Header {...this.props} />
            </>
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