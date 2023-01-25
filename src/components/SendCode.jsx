import React from "react";
import "./Register.css"
import {Link} from "react-router-dom";

function sendCode() {
    return (
        <>
            <div className='registerContainer'>
                <div className='registerText'>
                    <div>
                        <p>ثبت نام کرده اید؟</p>
                        <Link to="/Login" className="log"><button>ورود</button></Link>
                    </div>
                </div>
                <div className='registerForm'>
                    <div>
                        <p>ثبت نام</p>
                        <input placeholder="کد تایید را وارد کنید"/>
                        <span>کد را دریافت نکرده اید؟ <Link to="/" className='link'>ارسال مجدد کد</Link></span>
                        <section><Link to="/ChoosePass" className="link"><button>تایید</button></Link></section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default sendCode;