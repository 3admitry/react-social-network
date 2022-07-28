import React from 'react';
import {Empty} from 'antd';
import style from "../News/News.module.scss";

const News = () => {
    return (
        <div className={style.news}>
        <Empty description={<span>News page under development. Try later</span>} />
        </div>
    );
};

export default News;