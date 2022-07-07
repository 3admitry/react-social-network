import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {API} from "../../api/api";
import {loginTC} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Navigate, NavLink} from "react-router-dom";
import style from "./Login.module.css"

const Login = (props) => {

    const {register, handleSubmit, watch, setError, formState: {errors}} = useForm();

    console.log(errors);
    /*    if(props.errorMessage){
            setError('password', {
                type: "server",
                message: props.errorMessage,
            });
        }*/
    //const onSubmit = data => console.log(data);

    /* console.log(watch("login")); // watch input value by passing the name of it
     console.log(watch("password")); // watch input value by passing the name of it*/

    const onSubmit = (data) => {
        console.log(data)
        props.loginTC(data.email, data.password, data.rememberMe, true)
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
                {props.errorMessage &&
                    <div className={style.serverError}>
                        {props.errorMessage && props.errorMessage}
                    </div>
                }

                <div>
                    <input type={'checkbox'} {...register("rememberMe")} />
                    Remember Me
                </div>

                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );
};
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    errorMessage: state.auth.errorMessage
})

export default connect(mapStateToProps, {loginTC})(Login);