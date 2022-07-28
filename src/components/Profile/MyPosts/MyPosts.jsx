import React from "react";
import {Controller, useForm} from "react-hook-form";
import style from "./MyPosts.module.scss"
import {Avatar, Button, List, Space, Typography} from 'antd';
import TextArea from "antd/es/input/TextArea";
import avatar from './../../../assets/images/no-avatar.png'
import {LikeOutlined, MessageOutlined, StarOutlined} from "@ant-design/icons";

const {Title} = Typography;
const IconText = ({icon, text}) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

export const MyPosts = (props) => {

    const {control, handleSubmit, formState: {errors}, reset} = useForm();

    const onSubmit = (data) => {
        props.addNewPost(data.post);
        reset()
    }

    return (
        <div className={style.myPost}>
            <Title level={2}>My posts</Title>
            <form id="post-form" onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <div>
                    <Controller
                        name="post"
                        control={control}
                        rules={{required: true}}
                        render={({field}) => <>
                            <label htmlFor="post">What's news ?</label>
                            <div className={style.formItemContainer}>
                                <TextArea className={style.formItemContainerTextArea} rows={4}
                                          placeholder="Type your post" maxLength={250} {...field}/>
                                {errors.post && <div style={{color: 'red'}}>This field is required</div>}
                            </div>
                        </>
                        }
                    />
                </div>
                <div className={style.formSubmitButton}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </div>
            </form>
            <div className={style.listOfPosts}>
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={props.posts}
                    renderItem={(item) => (
                        <List.Item
                            key={item.id}
                            actions={[
                                <IconText icon={StarOutlined} text={item.stars.toString()} key="list-vertical-star-o"/>,
                                <IconText icon={LikeOutlined} text={item.likeCount.toString()}
                                          key="list-vertical-like-o"/>,
                                <IconText icon={MessageOutlined} text={item.comments.toString()}
                                          key="list-vertical-message"/>,
                            ]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={avatar}/>}
                                title={props.profile?.fullName}
                            />
                            {item.message}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

