import React from "react";
import "./Register.css"
import {Link} from "react-router-dom";

function SignUp() {
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
                        <input placeholder="شماره همراه خود را وارد کنید"/>
                        <section><Link to='/sendCode'><button>ارسال کد</button></Link></section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;