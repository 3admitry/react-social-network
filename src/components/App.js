import React, {Component} from 'react';
import '../App.css';
import HeaderCointainer from "./Header/HeaderContainer";
import {Navbar} from "./Navbar/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import Login from "./Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "../hoc/withRouter-hoc";
import {initializeApp} from "../redux/appReducer";
import {Spin} from "antd";
import {withSuspense} from "../hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialize) {
            return <Spin size="large"/>
        }

        // the way to use JSX to render component for prop. element of Route
        const LazyProfileContainer = withSuspense(ProfileContainer)
        const LazyDialogsContainer = withSuspense(DialogsContainer)

        return (
            <div className="app-wrapper">
                <HeaderCointainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route key='0' path='/' element={<Navigate to='/profile'/>}/>
                        <Route key='1' path='/profile/:userId' element={<LazyProfileContainer/>}/>
                        <Route key='1-1' path='/profile' element={<LazyProfileContainer/>}/>
                        <Route key='2' path='/dialogs/*' element={<LazyDialogsContainer/>}/>
                        <Route key='3' path='/users' element={<UsersContainer/>}/>
                        <Route key='4' path='/login' element={<Login/>}/>
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
