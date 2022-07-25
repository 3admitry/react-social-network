import React from "react";
import style from './Banner.module.scss'
import shape_7 from './../../assets/images/shape_7.png'
import people_2 from './../../assets/images/people_2.png'

export function Banner() {
    return (
        <div className={style.banner}>
            <div className={style.media}>
                <div className={style.mediaBody}>
                    <h3 className={style.itemTitile}>Welcome to the family</h3>
                    <p>Check what your friends have been up to!</p>
                </div>
            </div>
            <ul className={style.mediaImg}>
                <li className="sal-animate">
                    <img width="625" height="191"
                         src={shape_7}
                         className="attachment-full size-full" alt=""/>
                </li>
                <li className="sal-animate">
                    <img width="525" height="179"
                         src={people_2}
                         className="attachment-full size-full"
                         alt=""/>
                </li>
            </ul>
        </div>
    )
}