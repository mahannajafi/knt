import React from "react";
import "./Login.css"
import {Link} from "react-router-dom";

function ResetPass() {
    return (
        <>
            <div className='loginContainer'>
                <div className='loginForm'>
                    <div>
                        <p>بازیابی کلمه ی عبور</p>
                        <input placeholder="رمز عبور جدید را وارد کنید"/>
                        <input placeholder="تکرار رمز عبور جدید را وارد کنید"/>
                        <section><Link to='/'><button>تغییر رمز عبور</button></Link></section>
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

export default ResetPass;