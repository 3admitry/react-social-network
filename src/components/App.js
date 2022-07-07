import '../App.css';
import HeaderCointainer from "./Header/HeaderContainer";
import {Navbar} from "./Navbar/Navbar";
import ProfileContainer from './Profile/ProfileContainer'
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import Login from "./Login/Login";
import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAuth} from "../redux/authReducer";
import {withRouter} from "../hoc/withRouter-hoc";
import {initializeApp} from "../redux/appReducer";
import {Spin} from "antd";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialize){
            return  <Spin size="large" />
        }

        return (
            <div className="app-wrapper">
                <HeaderCointainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route key='1' path='/profile/:userId' element={
                            <ProfileContainer/>
                        }/>
                        <Route key='1-1' path='/profile/' element={<ProfileContainer/>}/>

                        <Route key='2' path='/dialogs/*' element={
                            <DialogsContainer/>
                        }/>
                        <Route key='3' path='/users' element={
                            <UsersContainer/>
                        }/>
                        <Route key='4' path='/login' element={
                            <Login/>
                        }/>
                    </Routes>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        initialize: state.app.initialize
    }

}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
