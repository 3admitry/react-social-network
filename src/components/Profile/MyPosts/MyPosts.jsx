import React, {useRef} from "react";
import {Post} from "./Post/Post";
import {useForm} from "react-hook-form";
import {API} from "../../../api/api";


export const MyPosts = (props) => {
    const {register, handleSubmit, watch, formState: {errors}, resetField} = useForm();

    let postMessage = useRef(null);
    let postsElement = props.posts.map((p, i) => <Post key={i} message={p.message}
                                                       likeCount={p.likeCount}/>)

    const addNewPostHandler = () => {
        props.addNewPost();
    }

    // const textAreaHandler = () => {
    //     props.onChangeTextArea(postMessage.current.value);
    // }

    const textAreaHandler = () => {

 /*       console.log(watch("post"))
        console.log(typeof(watch("post")))
        props.onChangeTextArea(watch("post"));*/
    }

    const onSubmit = (data) => {
        props.onChangeTextArea(data.post);
        props.addNewPost();
    }


    return (
        <div style={{paddingLeft: '1rem'}}>
            <h2>Mypost</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <textarea placeholder={'Type your post'} {...register("post", {required: true})} />
                    {errors.post && <span>This field is required</span>}
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
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