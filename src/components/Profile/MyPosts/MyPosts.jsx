import React from "react";
import {Post} from "./Post/Post";
import {useForm} from "react-hook-form";

export const MyPosts = (props) => {

    const {register, handleSubmit, formState: {errors}, resetField} = useForm();
    let postsElement = props.posts.map((p, i) => <Post key={i} message={p.message}
                                                       likeCount={p.likeCount}/>)

    const onSubmit = (data) => {
        props.addNewPost(data.post);
        resetField('post');
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
                {postsElement}
            </div>
        </div>
    )
}