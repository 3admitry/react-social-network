import React from "react";
import mod from "./Post.module.css"

export const Post = (props) => {
    return (
        <div key={props.index}>
            <div className={mod.avatar}><img
                src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" alt=""/></div>
            <div>{props.message}</div>
            <div>{props.likeCount}</div>
        </div>
    )
}