import React from "react";
import "./SignUp3.css"
import SignUp2 from "./SignUp2";
import {Link} from "react-router-dom";

function SignUp1() {
    return (
        <>
            <div className='signUp3Container'>
                <div className='signUp3Text'>
                    <div>
                        <p>ثبت نام کرده اید؟</p>
                        <button>ورود</button>
                    </div>
                </div>
                <div className='signUp3Form'>
                    <div>
                        <p>ثبت نام</p>
                        <input placeholder="رمز خود را وارد کنید"/>
                        <input placeholder="تکرار رمز خود را وارد کنید"/>
                        <section><Link to='/'><button>ثبت نام</button></Link></section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp1;