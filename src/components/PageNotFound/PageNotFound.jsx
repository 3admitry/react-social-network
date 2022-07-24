import React from 'react';
import {NavLink} from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            <h1>Ooops! We can't find that page</h1>
            <div><NavLink to="/">Back to homepage</NavLink></div>
        </div>
    );
};

export default PageNotFound;