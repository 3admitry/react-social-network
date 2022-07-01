import React from "react";
import {connect} from "react-redux";
import {getAuth, logoutTC} from "../../redux/authReducer";
import {Header} from "./Header";

class HeaderCointainer extends React.Component {
    componentDidMount() {
        this.props.getAuth();
        console.log(this.props.isAuth);
/*        API.getAuth().then((data)=>{
            if (data.resultCode === 0) {
                this.props.setAuthData(data.data);
            }
        })*/
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

export default connect(mapStateToProps, {getAuth, logoutTC})(HeaderCointainer)