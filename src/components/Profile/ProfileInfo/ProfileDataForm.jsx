import React from "react";
import {useFieldArray, useForm} from "react-hook-form";
import style from "../../Login/Login.module.css";

export const ProfileDataForm = ({profile, submitProfileForm, errorMessage}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            contacts: {...profile.contacts}
        }
    });
    return <div>
        <form id="profile-form" onSubmit={handleSubmit(submitProfileForm)}>
            {errorMessage &&
                <div style={{color: 'red'}}>
                    {errorMessage}
                </div>
            }
            <div>
                <label htmlFor="fullName">Full name</label>
                <input type={'text'} placeholder={'Full Name'} {...register("fullName", {required: true})} />
                {errors.fullName && <span style={{color: 'red'}}>This field is required</span>}
            </div>
            <div>
                <label htmlFor="aboutMe">About me</label>
                <input type={'text'} placeholder={'About me'} {...register("aboutMe", {required: true})} />
                {errors.aboutMe && <span style={{color: 'red'}}>This field is required</span>}
            </div>
            <div>
                <label htmlFor="lookingForAJob">Looking for a job</label>
                <input type={'checkbox'} {...register("lookingForAJob", {required: true})} />
            </div>

            <div>
                <label htmlFor="lookingForAJobDescription">Looking for a job description</label>
                <input type={'text'}
                       placeholder={'Looking for a job description'} {...register("lookingForAJobDescription", {required: true})} />
                {errors.lookingForAJobDescription && <span style={{color: 'red'}}>This field is required</span>}
            </div>

            <div>
                {
                    Object.keys(profile.contacts).map((contact, index) => {
                        return (
                            <div key={index}>
                                <div><label htmlFor={`contacts[${contact}]`}>{contact}</label></div>
                                <input type={'text'} placeholder={contact}
                                       {...register(`contacts[${contact}]`, {required: true})}
                                />
                                {errors[`contacts`] && errors[`contacts`][`${contact}`] &&
                                    <span style={{color: 'red'}}>This field is required</span>}
                                {/*{[${contact}]}*/}
                            </div>
                        )
                    })
                }
            </div>
        </form>

    </div>
}