import React from "react";
import "./Login.css"
import {Link} from "react-router-dom";

function ForgetPassword2() {
    return (
        <>
            <div className='loginContainer'>
                <div className='loginForm'>
                    <div>
                        <p>بازیابی کلمه ی عبور</p>
                        <input placeholder="کد ارسال شده را وارد کنید"/>
                        <section><Link to='/ResetPass'><button>تایید کد</button></Link></section>
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

export default ForgetPassword2;