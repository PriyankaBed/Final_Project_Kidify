import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import { useForm } from "react-hook-form";

const LoginSignup = ({ handleClose, setUser }) => {
    const navigate = useNavigate();

    const [registrationFormStatus, setRegistartionFormStatus] = useState(true);

    const loginProps = useSpring({
        left: registrationFormStatus ? 500 : 0, // Login form sliding positions
    });
    const registerProps = useSpring({
        left: registrationFormStatus ? 0 : -500, // Register form sliding positions
    });

    const loginBtnProps = useSpring({
        borderBottom: registrationFormStatus ? "solid 0px transparent" : "solid 2px #1059FF", //Animate bottom border of login button
    });
    const registerBtnProps = useSpring({
        borderBottom: registrationFormStatus ? "solid 2px #1059FF" : "solid 0px transparent", //Animate bottom border of register button
    });

    function registerClicked() {
        setRegistartionFormStatus(true);
    }
    function loginClicked() {
        setRegistartionFormStatus(false);
    }

    const onRegisterSubmit = (data) => {
        axios
            .post(`http://localhost:4000/auth/signup`, data, {
                withCredentials: true,
            })
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
                handleClose();
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    const onLoginSubmit = (data, e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:4000/auth/login`, data, {
                withCredentials: true,
            })
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
                handleClose();
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    function LoginForm() {
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();
        return (
            <React.Fragment>
                <input placeholder='Username' type='text' {...register("username")} />
                {errors.username && <p>Username is required.</p>}
                <input placeholder='Password' type='password' {...register("password")} />
                {errors.password && <p>Password is required.</p>}
                <input onClick={handleSubmit(onLoginSubmit)} type='submit' value='Submit' className='submit' />
            </React.Fragment>
        );
    }

    function RegisterForm() {
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();
        return (
            <React.Fragment>
                <input placeholder='First name' type='text' {...register("first_name", { required: true })} />
                {errors.firstName && <p>First name is required.</p>}
                <input placeholder='Last name' type='text' {...register("last_name", { required: true })} />
                {errors.lastName && <p>Last name is required.</p>}
                <input placeholder='Email' type='email' {...register("email", { required: true })} />
                {errors.email && <p>Email is required.</p>}
                <input placeholder='Username' type='text' {...register("username", { required: true })} />
                {errors.username && <p>Username is required.</p>}
                <input placeholder='Password' type='password' {...register("password", { required: true, minLength: 6 })} />
                {errors.password && <p>Password is required.</p>}
                <input placeholder='Upload Image' {...register("userImg")} />
                <input placeholder='Age' {...register("age", { pattern: /\d+/ })} />
                {errors.age && <p>Please enter number for age.</p>}
                <input onClick={handleSubmit(onRegisterSubmit)} type='submit' value='Submit' className='submit' />
            </React.Fragment>
        );
    }

    return (
        <div>
            <div className='container'>
                <div className='login-register-wrapper'>
                    <div className='nav-buttons'>
                        <animated.button onClick={registerClicked} id='registerBtn' style={registerBtnProps}>
                            Register
                        </animated.button>
                        <animated.button onClick={loginClicked} id='loginBtn' style={loginBtnProps}>
                            Login
                        </animated.button>
                    </div>
                    <div className='form-group'>
                        <animated.form action='' id='loginform' style={loginProps}>
                            <LoginForm />
                        </animated.form>
                        <animated.form action='' id='registerform' style={registerProps}>
                            <RegisterForm />
                        </animated.form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
