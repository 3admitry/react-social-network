import '../App.css';
import {Header} from "./Header/Header";
import {Navbar} from "./Navbar/Navbar";
import {Profile} from "./Profile/Profile";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";

function App() {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route key='1' path='/profile' element={
                        <Profile/>
                    }/>
                    <Route key='2' path='/dialogs/*' element={
                        <DialogsContainer/>
                    }/>
                    <Route key='3' path='/users' element={
                        <UsersContainer/>
                    }/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
