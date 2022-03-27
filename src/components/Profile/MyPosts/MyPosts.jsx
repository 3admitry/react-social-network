import React, {useRef} from "react";
import {Post} from "./Post/Post";

export const MyPosts = (props) => {

    let postsElement = props.profilePage.posts.map((p, i) => <Post key={i} message={p.message} likeCount={p.likeCount}/>)
    let postMessage = useRef(null);

    const addNewPostHandler = () => {
        props.addPost()
    }

    const textAreaHandler = () => {
        props.changeTextPost(postMessage.current.value)
    }

    return (
        <div>
            Mypost
            <div>
                <textarea ref={postMessage} onChange={textAreaHandler} value={props.profilePage.newPostText}/>
                <button onClick={addNewPostHandler}>Add New Post</button>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}