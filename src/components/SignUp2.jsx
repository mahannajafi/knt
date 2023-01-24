import React from "react";
import "./SignUp2.css"
import {Link} from "react-router-dom";

function SignUp2() {
    return (
        <>
            <div className='signUp2Container'>
                <div className='signUp2Text'>
                    <div>
                        <p>ثبت نام کرده اید؟</p>
                        <button>ورود</button>
                    </div>
                </div>
                <div className='signUp2Form'>
                    <div>
                        <p>ثبت نام</p>
                        <input placeholder="کد تایید را وارد کنید"/>
                        <span>کد را دریافت نکرده اید؟ <Link to="/" className='link'>ارسال مجدد کد</Link></span>
                        <section><Link to="/SignUp3"><button>تایید</button></Link></section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp2;