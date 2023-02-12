import React, {useState} from "react";
import "./Login.css"
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function Login() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const CheckPhone = (event) => {
        document.getElementsByClassName('closeIcon')[0].style.visibility = 'visible'
        document.getElementsByClassName('checkIcon')[0].style.visibility = 'hidden'

        document.getElementsByClassName('error')[0].innerHTML = "شماره باید 11 رقمی باشد"
        let numbers = ['0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9']
        setPhone(event.target.value);
        for ( let i = 0 ; i < event.target.value.length ; i ++ ){
            let valid = false
            for(let j = 0 ; j < numbers.length ; j ++ ){
                if (event.target.value[i] === numbers[j]) {
                    valid = true
                }
            }
            if (valid === false) {
                document.getElementsByClassName('error')[0].innerHTML =  "کاراکتر "+ i +" ام عدد نیست"
            }
        }
        if (event.target.value[0] !== '0'){
            document.getElementsByClassName('error')[0].innerHTML = "شماره باید با صفر شروع شود"
        }
        else if (event.target.value[1] !== '9' && event.target.value[1] !== ""){
            document.getElementsByClassName('error')[0].innerHTML = "دومین کاراکتر باید 9 باشد"
        }
        else if (event.target.value.length === 11) {
            document.getElementsByClassName('error')[0].innerHTML = "&nbsp;"
            document.getElementsByClassName('checkIcon')[0].style.visibility = 'visible'
            document.getElementsByClassName('closeIcon')[0].style.visibility = 'hidden'
        }
        Check()
    };

    const CheckPassword = (event) => {
        setPassword(event.target.value);
        document.getElementsByClassName('error')[1].innerHTML = "حداقل 8 کاراکتر وارد کنید"
        document.getElementsByClassName('closeIcon')[1].style.visibility = 'visible'
        document.getElementsByClassName('checkIcon')[1].style.visibility = 'hidden'

        if (event.target.value.length < 8){
            document.getElementsByClassName('error')[1].innerHTML = "حداقل 8 کاراکتر وارد کنید"
        }
        else {
            document.getElementsByClassName('error')[1].innerHTML = "&nbsp;"
            document.getElementsByClassName('checkIcon')[1].style.visibility = 'visible'
            document.getElementsByClassName('closeIcon')[1].style.visibility = 'hidden'
        }
        Check()
    };

    const Check = () => {
        if (document.getElementsByClassName('checkIcon')[0].style.visibility === 'visible' &&
            document.getElementsByClassName('checkIcon')[1].style.visibility === 'visible') {
            document.getElementsByClassName('btn')[0].style.background = '#234E70FF'
            document.getElementsByClassName('btn')[0].style.cursor = 'pointer'
            document.getElementsByClassName('goAhead')[0].style.pointerEvents = ""
            document.getElementsByClassName('disableLink')[0].style.display = 'none'
            document.getElementsByClassName('goAhead')[0].style.display = 'inline'
            document.getElementsByClassName('goAhead')[0].style.disabled = false
        }
        else {
            document.getElementsByClassName('btn')[0].style.background = 'grey'
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
                        <p>ورود</p>
                        <form>
                            <input placeholder='شماره همراه خود را وارد کنید' type="text" value={phone} onChange={CheckPhone}/>
                            <CheckIcon sx={{ fontSize: 16 }} className="checkIcon checkIcon1" />
                            <CloseIcon sx={{ fontSize: 16 }} className="closeIcon closeIcon1" />
                            <p className="error">&nbsp;</p>
                            <input placeholder='رمز عبور خود را وارد کنید' type="password" value={password} onChange={CheckPassword}/>
                            <CheckIcon sx={{ fontSize: 16 }} className="checkIcon checkIcon2" />
                            <CloseIcon sx={{ fontSize: 16 }} className="closeIcon closeIcon2" />
                            <p className="error">&nbsp;</p>
                            <span>رمز عبور خود را فراموش کرده اید؟<Link to="/ForgetPass" className='link'>بازیابی رمز عبور</Link></span>
                            <button disabled={true} type='submit' className='btn'>
                                <span className='disableLink'>ورود</span>
                                <Link to='/' className="goAhead">ورود</Link></button>
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

export default Login;