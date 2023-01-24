import React from "react";
import "./Login.css"
import {Link} from "react-router-dom";

function Login() {
    return (
        <>
            <div className='loginContainer'>
                <div className='loginForm'>
                    <div>
                        <p>ورود</p>
                        <input placeholder="شماره همراه خود را وارد کنید"/>
                        <input placeholder="رمز عبور خود را وارد کنید"/>
                        <span>رمز عبور خود را فراموش کرده اید؟<Link to="/" className='link'>بازیابی رمز عبور</Link></span>
                        <section><Link to='/Home'><button>ورود</button></Link></section>
                    </div>
                </div>
                <div className='loginText'>
                    <div>
                        <p>حساب کاربری ندارید؟</p>
                        <button>ثبت نام</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;