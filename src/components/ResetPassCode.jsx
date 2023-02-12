import React, {useState} from "react";
import "./Login.css"
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

function ForgetPassword2() {
    const [code, setCode] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const CheckCode = (event) => {
        setCode(event.target.value);
        if (event.target.value.length !== 5) {
            document.getElementsByClassName('btn')[0].style.background = 'grey'
            document.getElementsByClassName('btn')[0].style.cursor = 'auto'
            document.getElementsByClassName('goAhead')[0].style.pointerEvents = "none"
            document.getElementsByClassName('disableLink')[0].style.display = 'inline'
            document.getElementsByClassName('goAhead')[0].style.display = 'none'
            document.getElementsByClassName('goAhead')[0].style.disabled = true
        }
        else {
            document.getElementsByClassName('btn')[0].style.background = '#234E70FF'
            document.getElementsByClassName('btn')[0].style.cursor = 'pointer'
            document.getElementsByClassName('goAhead')[0].style.pointerEvents = ""
            document.getElementsByClassName('disableLink')[0].style.display = 'none'
            document.getElementsByClassName('goAhead')[0].style.display = 'inline'
            document.getElementsByClassName('goAhead')[0].style.disabled = false
        }
    };

    return (
        <>
            <div className='loginContainer'>
                <div className='loginForm'>
                    <div>
                        <p>بازیابی کلمه ی عبور</p>
                        <form>
                            <input placeholder='کد ارسال شده را وارد کنید' type="text" value={code} onChange={CheckCode}/>
                            <p className="error">&nbsp;</p>
                            <button disabled={true} type='submit' className='btn'>
                                <span className='disableLink'>تایید کد</span>
                                <Link to='/ResetPass' className="goAhead">تایید کد</Link></button>
                        </form>
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

export default ForgetPassword2;