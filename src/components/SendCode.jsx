import React, {useState} from "react";
import "./Register.css"
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

function SendCode() {
    const [verificationCode, setVerificationCode] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleChange = (event) => {
        setVerificationCode(event.target.value);
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
                        <form>
                            <input placeholder='کد تایید را وارد کنید' type="text" value={verificationCode} onChange={handleChange}/>
                            <p className="error">&nbsp;</p>
                            <span>کد را دریافت نکرده اید؟ <Link to="/SendCode" className='link'>ارسال مجدد کد</Link></span>
                            <button disabled={true} type='submit' className='btn'>
                                <span className='disableLink'>تایید</span>
                                <Link to='/ChoosePass' className="goAhead">تایید</Link></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SendCode;