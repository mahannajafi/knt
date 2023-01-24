import React from "react";
import "./ForgetPassword2.css"
import {Link} from "react-router-dom";

function ForgetPassword2() {
    return (
        <>
            <div className='Forget2Container'>
                <div className='Forget2Form'>
                    <div>
                        <p>بازیابی کلمه ی عبور</p>
                        <input placeholder="کد ارسال شده را وارد کنید"/>
                        <section><Link to='/'><button>تایید کد</button></Link></section>
                    </div>
                </div>
                <div className='Forget2Text'>
                    <div>
                        <p>حساب کاربری ندارید؟</p>
                        <button>ثبت نام</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword2;