import React, {useState} from "react";
import "./Login.css"
import {Link} from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {useForm} from "react-hook-form";

function ResetPass() {
    const [newPass, setNewPass] = useState('');
    const [repeatNewPass, setRepeatNewPass] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const CheckNewPass = (event) => {
        setNewPass(event.target.value);
        document.getElementsByClassName('error')[0].innerHTML = "حداقل 8 کاراکتر وارد کنید"
        document.getElementsByClassName('closeIcon')[0].style.visibility = 'visible'
        document.getElementsByClassName('checkIcon')[0].style.visibility = 'hidden'

        if (event.target.value.length < 8){
            document.getElementsByClassName('error')[0].innerHTML = "حداقل 8 کاراکتر وارد کنید"
        }
        else {
            document.getElementsByClassName('error')[0].innerHTML = "&nbsp;"
            document.getElementsByClassName('checkIcon')[0].style.visibility = 'visible'
            document.getElementsByClassName('closeIcon')[0].style.visibility = 'hidden'
        }
        Check()
    };

    const CheckRepeatNewPass = (event) => {
        setRepeatNewPass(event.target.value);
        document.getElementsByClassName('error')[1].innerHTML = "تکرار رمز و رمز مطابقت ندارند"
        document.getElementsByClassName('closeIcon')[1].style.visibility = 'visible'
        document.getElementsByClassName('checkIcon')[1].style.visibility = 'hidden'

        if (newPass !==  event.target.value) {
            document.getElementsByClassName('error')[1].innerHTML = "تکرار رمز و رمز مطابقت ندارند"
        } else {
            document.getElementsByClassName('error')[1].innerHTML = "&nbsp;"
            document.getElementsByClassName('checkIcon')[1].style.visibility = 'visible'
            document.getElementsByClassName('closeIcon')[1].style.visibility = 'hidden'
        }
        Check()
    }

    const Check = () => {
        if (document.getElementsByClassName('checkIcon')[0].style.visibility === 'visible' &&
            document.getElementsByClassName('checkIcon')[1].style.visibility === 'visible') {
            document.getElementsByClassName('btn')[0].style.background = '#234E70FF'
            document.getElementsByClassName('goAhead')[0].style.color = '#FBF8BEFF'
            document.getElementsByClassName('btn')[0].style.cursor = 'pointer'
            document.getElementsByClassName('goAhead')[0].style.pointerEvents = ""
            document.getElementsByClassName('disableLink')[0].style.display = 'none'
            document.getElementsByClassName('goAhead')[0].style.display = 'inline'
            document.getElementsByClassName('goAhead')[0].style.disabled = false
        }
        else {
            document.getElementsByClassName('btn')[0].style.background = 'grey'
            document.getElementsByClassName('goAhead')[0].style.color = '#FFF'
            document.getElementsByClassName('btn')[0].style.cursor = 'auto'
            document.getElementsByClassName('goAhead')[0].style.pointerEvents = "none"
            document.getElementsByClassName('disableLink')[0].style.display = 'inline'
            document.getElementsByClassName('goAhead')[0].style.display = 'none'
            document.getElementsByClassName('goAhead')[0].style.disabled = true
        }
    }

    return (
        <>
            <div className='loginContainer'>
                <div className='loginForm'>
                    <div>
                        <p>بازیابی کلمه ی عبور</p>
                        <form>
                            <input type="password" placeholder='رمز عبور جدید را وارد کنید' value={newPass} onChange={CheckNewPass}/>
                            <CheckIcon sx={{ fontSize: 16 }} className="checkIcon checkIcon1" />
                            <CloseIcon sx={{ fontSize: 16 }} className="closeIcon closeIcon1" />
                            <p className="error">&nbsp;</p>
                            <input type="password" placeholder='تکرار رمز عبور جدید را وارد کنید' value={repeatNewPass} onChange={CheckRepeatNewPass}/>
                            <CheckIcon sx={{ fontSize: 16 }} className="checkIcon checkIcon2" />
                            <CloseIcon sx={{ fontSize: 16 }} className="closeIcon closeIcon2" />
                            <p className="error">&nbsp;</p>
                            <button disabled={true} type='submit' className='btn'>
                                <span className='disableLink'>تغییر رمز عبور</span>
                                <Link to='/' className="goAhead">تغییر رمز عبور</Link></button>
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

export default ResetPass;