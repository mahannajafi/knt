import React from "react";
import "./ForgetPassword1.css"
import {Link} from "react-router-dom";

function ForgetPassword1() {
    return (
        <>
            <div className='Forget1Container'>
                <div className='Forget1Form'>
                    <div>
                        <p>بازیابی کلمه ی عبور</p>
                        <input placeholder="شماره همراه خود را وارد کنید"/>
                        <section><Link to='/'><button>ارسال کد</button></Link></section>
                    </div>
                </div>
                <div className='Forget1Text'>
                    <div>
                        <p>حساب کاربری ندارید؟</p>
                        <button>ثبت نام</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword1;