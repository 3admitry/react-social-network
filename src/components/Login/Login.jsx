import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {getCaptchaUrl, loginTC} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import style from "./Login.module.scss"
import {Alert, Button, Checkbox, Input} from "antd";


const Login = (props) => {
    const {control, handleSubmit, formState: {errors}, setValue} = useForm();
    const onSubmit = (data) => {
        props.loginTC(data.email, data.password, data.rememberMe, data.captcha)
    }
    const refreshCaptchaHandler = () => {
        props.getCaptchaUrl();
    }
    const fillForm = () => {
        setValue('email', 'web.refaq@gmail.com');
        setValue('password', 'password');
    }

    return (
        <div className={style.login}>
            {props.isAuth && <Navigate to='/profile'/>}
            <h1>Sign in - IncubatorBook</h1>
            <div className={style.loginDesctiption}>
                <p>Register to sing in
                    <a href={'https://social-network.samuraijs.com/'}
                       target={'_blank'} rel="noreferrer"> here
                    </a>
                </p>
                <p>or use common test account credentials:</p>
                <p>Email: web.refaq@gmail.com | Password: password</p>
                <p>or just click <Button onClick={fillForm} type={'link'}>fill form</Button></p>
            </div>
            {props.errorMessage &&
                <div className={style.serverError}>
                    {props.errorMessage &&
                        <Alert
                            message={props.errorMessage}
                            type="error"
                            closable
                        />
                    }
                </div>
            }
            <form onSubmit={handleSubmit(onSubmit)} className={style.loginForm}>
                <div className={style.loginFormItem}>
                    <Controller
                        name="email"
                        control={control}
                        rules={{required: true}}
                        render={({field}) => <>
                            <label htmlFor="email">Email:</label>
                            <div className={style.loginFormItemInput}>
                                <Input status={errors.email && 'error'} type={'email'}
                                       placeholder={'Type your login'} {...field} />
                                {errors.email && <div style={{color: 'red'}}>This field is required</div>}
                            </div>
                        </>
                        }
                    />
                </div>
                <div className={style.loginFormItem}>
                    <Controller
                        name="password"
                        control={control}
                        rules={{required: true}}
                        render={({field}) => <>
                            <label htmlFor="email">Password:</label>
                            <div className={style.loginFormItemInput}>
                                <Input status={errors.password && 'error'} type={'password'}
                                       placeholder={'Type your password'} {...field} />
                                {errors.password && <div style={{color: 'red'}}>This field is required</div>}
                            </div>
                        </>
                        }
                    />
                </div>
                <div className={style.loginFormItem}>
                    <Controller
                        name="rememberMe"
                        control={control}
                        render={({field: {onChange, onBlur, value, name, ref}}) => <>
                            <div>
                                <Checkbox checked={value} onChange={onChange} onBlur={onBlur} inputRef={ref}
                                          name={name}>
                                    Remember Me
                                </Checkbox>
                            </div>
                        </>
                        }
                    />
                </div>
                {
                    props.captchaUrl &&
                    <div className={style.loginFormItem}>
                        {/*<input type={'text'} placeholder={'Chaptcha'} {...register("captcha", {required: true})} />
                        {errors.captcha && <span>This field is required</span>}*/}

                        <Controller
                            name="captcha"
                            control={control}
                            rules={{required: true}}
                            render={({field}) => <>
                                <div className={style.loginFormItemInput}>
                                    <Input status={errors.password && 'error'}
                                           placeholder={'Type captcha code'} {...field} />
                                    {errors.captcha && <div style={{color: 'red'}}>This field is required</div>}
                                </div>
                            </>
                            }
                        />
                    </div>
                }
                {
                    props.captchaUrl &&
                    <div className={style.loginFormItem}>
                        <div className={style.loginFormItemInputCaptcha}>
                            <img src={props.captchaUrl} alt=""/>
                        </div>
                        <div className={style.loginFormItemInputRefreshCaptcha} onClick={refreshCaptchaHandler}>
                            ⟳ Refresh captcha
                        </div>
                    </div>
                }
                <div className={style.loginFormItem}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </div>


    );
};
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
    errorMessage: state.auth.errorMessage
})

export default connect(mapStateToProps, {loginTC, getCaptchaUrl})(Login);