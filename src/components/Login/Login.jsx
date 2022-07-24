import React from 'react';
import {useForm} from "react-hook-form";
import {getCaptchaUrl, loginTC} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import style from "./Login.module.css"

const Login = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data)
        props.loginTC(data.email, data.password, data.rememberMe, data.captcha)
    }
    const refreshCaptchaHandler = () => {
      props.getCaptchaUrl();
    }

    return (
        <div>
            {props.isAuth && <Navigate to='/profile'/>}
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input type={'email'} placeholder={'Login'} {...register("email", {required: true})} />
                    {errors.email && <span>This field is required</span>}
                </div>

                <div>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input type={'password'} placeholder={'Password'} {...register("password", {required: true})} />
                    {/* errors will return when field validation fails  */}
                    {errors.password && <span>This field is required</span>}
                </div>
                <div>
                    <input type={'checkbox'} {...register("rememberMe")} />
                    Remember Me
                </div>
                {props.errorMessage &&
                    <div className={style.serverError}>
                        {props.errorMessage && props.errorMessage}
                    </div>
                }
                {
                    props.captchaUrl &&
                    <div>
                        <input type={'text'} placeholder={'Chaptcha'} {...register("captcha", {required: true})} />
                        {errors.captcha && <span>This field is required</span>}
                    </div>
                }
                {
                    props.captchaUrl &&
                    <div>
                        <div>
                        <img style={{width: '160px'}} src={props.captchaUrl} alt=""/>
                        </div>
                        <div style={{cursor:'pointer'}} onClick={refreshCaptchaHandler}>
                            ⟳ Обнвоить
                        </div>
                    </div>
                }
                <div>
                    <input type="submit"/>
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