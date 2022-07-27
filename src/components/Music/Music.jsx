import React from 'react';
import {Empty} from "antd";
import style from "./Miusic.module.scss";

const Music = () => {
    return (
        <div className={style.music}>
            <Empty description={<span>Music page under development. Try later</span>} />
        </div>

    );
};

export default Music;