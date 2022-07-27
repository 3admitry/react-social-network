import React from 'react';
import {NavLink} from "react-router-dom";
import {Button, Result} from "antd";

const PageNotFound = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<NavLink to="/"> <Button type="primary">Back Home</Button></NavLink>}
        />
    )
        ;
};

export default PageNotFound;