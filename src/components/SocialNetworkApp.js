import React, {Component} from 'react';
import style from './SocialNetworkApp.module.scss';
import HeaderContainer from "./Header/HeaderContainer";
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
import News from "./News/News";
import Music from "./Music/Music";
import PageNotFound from "./PageNotFound/PageNotFound";

const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));

class SocialNetworkApp extends Component {
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
            <div className={style.appWrapper}>
                <HeaderContainer/>
                <div className={style.globalContent}>
                    <Navbar/>
                    <div className={style.mainContent}>
                        <Routes>
                            <Route key='0' path='/' element={<Navigate to='/profile'/>}/>
                            <Route key='1' path='/profile/:userId' element={<LazyProfileContainer/>}/>
                            <Route key='1-1' path='/profile' element={<LazyProfileContainer/>}/>
                            <Route key='2' path='/dialogs/*' element={<LazyDialogsContainer/>}/>
                            <Route key='3' path='/users' element={<UsersContainer/>}/>
                            <Route key='4' path='/news' element={<News/>}/>
                            <Route key='5' path='/music' element={<Music/>}/>
                            <Route key='6' path='/login' element={<Login/>}/>
                            <Route key='7' path='/*' element={<PageNotFound/>}/>
                        </Routes>
                    </div>
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
)(SocialNetworkApp);
