import React from "react";
import "./SignUp1.css"
import SignUp2 from "./SignUp2";
import {Link} from "react-router-dom";

function SignUp1() {
    return (
        <>
            <div className='signUp1Container'>
                <div className='signUp1Text'>
                    <div>
                        <p>ثبت نام کرده اید؟</p>
                        <button>ورود</button>
                    </div>
                </div>
                <div className='signUp1Form'>
                    <div>
                        <p>ثبت نام</p>
                        <input placeholder="شماره همراه خود را وارد کنید"/>
                        <section><Link to='/SignUp2'><button>ارسال کد</button></Link></section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp1;