import React, {useRef} from "react";
import {Post} from "./Post/Post";


export const MyPosts = (props) => {

    let postMessage = useRef(null);
    let postsElement = props.posts.map((p, i) => <Post key={i} message={p.message}
                                                       likeCount={p.likeCount}/>)
    const addNewPostHandler = () => {
        props.addNewPost();
    }

    const textAreaHandler = () => {
        props.onChangeTextArea(postMessage.current.value);
    }

    return (
        <div style={{paddingLeft: '1rem'}}>
            <h2>Mypost</h2>
            <div>
                <textarea ref={postMessage} onChange={textAreaHandler} value={props.newPostText}/>
                <button onClick={addNewPostHandler}>Add New Post</button>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}