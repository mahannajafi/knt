import React, {useState , useEffect} from "react";
import "./Login.css"
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

function Login() {
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [disable , setDisable] = useState(true)
    const [isRegister , setRegister] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        if(isRegister) {
            navigate("/")
        }
    })

    const HandleSubmit = (event) => {
        event.preventDefault()
        axios
            .post("https://chuplon.iran.liara.run/api/v1/account/login/", {
                phone_number:phone,
                password:pass
            })
            .then((response) => {
                console.log(response.data)
                setRegister(true)
                localStorage.setItem('token', response.data.jwt)
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response)
                    document.getElementsByClassName('errorType')[0].innerHTML = 'شماره تلفن یا رمز عبور اشتباه است'
                } else if (error.request) {
                    console.log(error.request)
                    document.getElementsByClassName('errorType')[0].innerHTML = 'چنین کاربری یافت نشد'
                } else {
                    console.log(error.response)
                    document.getElementsByClassName('errorType')[0].innerHTML = 'چنین کاربری یافت نشد'
                }
            });
    };

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
        setPass(event.target.value);
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
            setDisable(false)
        }
        else {
            document.getElementsByClassName('btn')[0].style.background = 'grey'
            document.getElementsByClassName('btn')[0].style.cursor = 'auto'
            setDisable(true)
        }
    }

    return (
        <>
            <div className='loginContainer'>
                <div className='loginForm'>
                    <div>
                        <p>ورود</p>
                        <form onSubmit={HandleSubmit}>
                            <input required placeholder='شماره همراه خود را وارد کنید' type="text" value={phone} onChange={CheckPhone}/>
                            <CheckIcon sx={{ fontSize: 16 }} className="checkIcon checkIcon1" />
                            <CloseIcon sx={{ fontSize: 16 }} className="closeIcon closeIcon1" />
                            <p className="error">&nbsp;</p>
                            <input required placeholder='رمز عبور خود را وارد کنید' type="password" value={pass} onChange={CheckPassword}/>
                            <CheckIcon sx={{ fontSize: 16 }} className="checkIcon checkIcon2" />
                            <CloseIcon sx={{ fontSize: 16 }} className="closeIcon closeIcon2" />
                            <p className="error">&nbsp;</p>
                            <span>رمز عبور خود را فراموش کرده اید؟<Link to="/ForgetPass" className='link'>بازیابی رمز عبور</Link></span>
                            <p className='errorType error'>&nbsp;</p>
                            <button type='submit' disabled={disable} className='btn'>
                                <span className='disableLink'>ورود</span>
                            </button>
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