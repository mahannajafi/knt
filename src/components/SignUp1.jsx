import React from "react";
import "./SignUp1.css"

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
                        <section><button>ارسال کد</button></section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp1;