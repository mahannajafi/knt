import React from "react";
import "./Login.css"
import {Link} from "react-router-dom";

function ForgetPass() {
    return (
        <>
            <div className='loginContainer'>
                <div className='loginForm'>
                    <div>
                        <p>بازیابی کلمه ی عبور</p>
                        <input placeholder="شماره همراه خود را وارد کنید"/>
                        <section><Link to='/ResetPassCode'><button>ارسال کد</button></Link></section>
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

export default ForgetPass;