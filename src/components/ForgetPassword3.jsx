import React from "react";
import "./ForgetPassword3.css"
import {Link} from "react-router-dom";

function ForgetPassword3() {
    return (
        <>
            <div className='Forget3Container'>
                <div className='Forget3Form'>
                    <div>
                        <p>بازیابی کلمه ی عبور</p>
                        <input placeholder="رمز عبور جدید را وارد کنید"/>
                        <input placeholder="تکرار رمز عبور جدید را وارد کنید"/>
                        <section><Link to='/'><button>تغییر رمز عبور</button></Link></section>
                    </div>
                </div>
                <div className='Forget3Text'>
                    <div>
                        <p>حساب کاربری ندارید؟</p>
                        <button>ثبت نام</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword3;