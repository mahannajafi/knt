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
                        <span>رمز عبور خود را فراموش کرده اید؟<Link to="/ForgetPass" className='link'>بازیابی رمز عبور</Link></span>
                        <section><Link to='/'><button>ورود</button></Link></section>
                    </div>
                </div>
                <div className='loginText'>
                    <div>
                        <p>حساب کاربری ندارید؟</p>
                        <Link to="/SignUp" className="reg"><button>ثبت نام</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;