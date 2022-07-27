import React from "react";
import {Controller, useForm} from "react-hook-form";
import style from "./ProfileInfo.module.scss"
import {Alert, Checkbox, Input} from "antd";

export const ProfileDataForm = ({profile, submitProfileForm, errorMessage}) => {
    const {control, register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            contacts: {...profile.contacts}
        }
    });
    return <div className={style.profileDataForm}>
        {errorMessage &&
            <Alert
                message={errorMessage}
                type="error"
                closable
                className={style.alert}
            />
        }
        <form id="profile-form" onSubmit={handleSubmit(submitProfileForm)}>
            <div className={style.formItem}>
                <Controller
                    name="fullName"
                    control={control}
                    rules={{required: true}}
                    render={({field}) => <>
                        <label htmlFor="fullName">Full name</label>
                        <div className={style.formInput}>
                            <Input status={errors.fullName && 'error'} type={'text'}
                                   placeholder={'Full Name'} {...field} />
                            {errors.fullName && <div style={{color: 'red'}}>This field is required</div>}
                        </div>
                    </>
                    }
                />
            </div>
            <div className={style.formItem}>
                <Controller
                    name="aboutMe"
                    control={control}
                    rules={{required: true}}
                    render={({field}) => <>
                        <label htmlFor="aboutMe">About me</label>
                        <div className={style.formInput}>
                            <Input status={errors.aboutMe && 'error'} type={'text'}
                                   placeholder={'About me'} {...field} />
                            {errors.aboutMe && <div style={{color: 'red'}}>This field is required</div>}
                        </div>
                    </>
                    }
                />
            </div>
            <div className={style.formItem}>
                <Controller
                    name="lookingForAJob"
                    control={control}
                    render={({field: { onChange, onBlur, value, name, ref }}) => <>
                        <label htmlFor="lookingForAJob">Looking for a job</label>
                        <div className={style.formInput}>
                            <Checkbox checked={value} onChange={onChange} onBlur={onBlur} inputRef={ref} name={name}/>
                        </div>
                    </>
                    }
                />
            </div>

            <div className={style.formItem}>
                <Controller
                    name="lookingForAJobDescription"
                    control={control}
                    rules={{required: true}}
                    render={({field}) => <>
                        <label htmlFor="lookingForAJobDescription">Looking for a job description</label>
                        <div className={style.formInput}>
                            <Input status={errors.lookingForAJobDescription && 'error'} type={'text'}
                                   placeholder={'Looking for a job description'} {...field} />
                            {errors.lookingForAJobDescription &&
                                <div style={{color: 'red'}}>This field is required</div>}
                        </div>
                    </>
                    }
                />
            </div>

            <div>
                {
                    Object.keys(profile.contacts).map((contact, index) => {
                        return (
                            <div key={index} className={style.formItem}>
                                <Controller
                                    name={`contacts[${contact}]`}
                                    control={control}
                                    rules={{required: true}}
                                    render={({field}) => <>
                                        <label htmlFor={`contacts[${contact}]`}>{contact}</label>
                                        <div className={style.formInput}>
                                            <Input
                                                status={errors[`contacts`] && errors[`contacts`][`${contact}`] && 'error'}
                                                type={'text'} placeholder={contact} {...field} />
                                            {errors[`contacts`] && errors[`contacts`][`${contact}`] &&
                                                <div style={{color: 'red'}}>This field is required</div>}
                                        </div>
                                    </>
                                    }
                                />
                            </div>
                        )
                    })
                }
            </div>
        </form>

    </div>
}