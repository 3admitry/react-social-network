import '../App.css';
import {Header} from "./Header/Header";
import {Navbar} from "./Navbar/Navbar";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";

function App(props) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route key='1' path='/profile' element={
                        <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>
                    }/>
                    <Route key='2' path='/dialogs/*' element={
                        <Dialogs dialogs={props.state.dialogs} dispatch={props.dispatch}/>
                    }/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
