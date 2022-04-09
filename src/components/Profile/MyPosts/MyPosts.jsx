import React, {useRef} from "react";
import {Post} from "./Post/Post";
import {addPostActionCreator, changeTextPostActionCreator} from "../../../redux/profileReducer";

export const MyPosts = (props) => {

    let postsElement = props.profilePage.posts.map((p, i) => <Post key={i} message={p.message}
                                                                   likeCount={p.likeCount}/>)
    let postMessage = useRef(null);

    const addNewPostHandler = () => {
        // props.dispatch({type:'ADD-POST'})
        props.dispatch(addPostActionCreator());
    }

    const textAreaHandler = () => {
        //props.dispatch({type: 'CHANGE-TEXT-POST', newText: postMessage.current.value})
        props.dispatch(changeTextPostActionCreator(postMessage.current.value));
    }

    return (
        <div>
            <h2>Mypost</h2>
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