import React, {useEffect, useState} from "react";
import "./Register.css"
import {Link, Navigate, redirect, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

function ChoosePass() {
    let checkPass = false
    let checkRepeatPass = false
    const [pass, setPass] = useState('');
    const [repeatPass, setRepeatPass] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [disable , setDisable] = useState(true)
    const [isRegister , setRegister] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        if(isRegister) {
            navigate("/Login")
        }
    })

    let phone_number = sessionStorage.getItem('phone_number');
    sessionStorage.setItem('password',pass)

    const CheckPass = (event) => {
        setPass(event.target.value);
        document.getElementsByClassName('error')[0].innerHTML = "حداقل 8 کاراکتر وارد کنید"
        document.getElementsByClassName('closeIcon')[0].style.visibility = 'visible'
        document.getElementsByClassName('checkIcon')[0].style.visibility = 'hidden'
        checkPass = false

        if (event.target.value.length < 8){
            document.getElementsByClassName('error')[0].innerHTML = "حداقل 8 کاراکتر وارد کنید"
        }
        else {
            document.getElementsByClassName('error')[0].innerHTML = "&nbsp;"
            document.getElementsByClassName('checkIcon')[0].style.visibility = 'visible'
            document.getElementsByClassName('closeIcon')[0].style.visibility = 'hidden'
            checkPass = true
        }
        Check()
    };

    const CheckRepeatPass = (event) => {
        setRepeatPass(event.target.value);
        document.getElementsByClassName('error')[1].innerHTML = "تکرار رمز و رمز مطابقت ندارند"
        document.getElementsByClassName('closeIcon')[1].style.visibility = 'visible'
        document.getElementsByClassName('checkIcon')[1].style.visibility = 'hidden'
        checkRepeatPass = false

        if (pass !==  event.target.value) {
            document.getElementsByClassName('error')[1].innerHTML = "تکرار رمز و رمز مطابقت ندارند"
        } else {
            document.getElementsByClassName('error')[1].innerHTML = "&nbsp;"
            document.getElementsByClassName('checkIcon')[1].style.visibility = 'visible'
            document.getElementsByClassName('closeIcon')[1].style.visibility = 'hidden'
            checkRepeatPass = true
        }
        Check()
    }

    const HandleSubmit = (event) => {
        event.preventDefault()
        axios
            .post("https://chuplon.iran.liara.run/api/v1/account/register/", {
                phone_number:phone_number,
                password:pass
            })
            .then((response) => {
                console.log(response)
                setRegister(true)

            })
            .catch((error) => {
                if (error.response) {
                    document.getElementsByClassName('errorType')[0].innerHTML = 'شماره تلفن یا رمز عبور اشتباه است'
                } else if (error.request) {
                    console.log(error.request);
                    document.getElementsByClassName('errorType')[0].innerHTML = 'چنین کاربری یافت نشد'
                } else {
                    // console.log(error);
                    document.getElementsByClassName('errorType')[0].innerHTML = 'چنین کاربری یافت نشد'
                }
            });
    }
    const Check = () => {
        if (document.getElementsByClassName('checkIcon')[0].style.visibility === 'visible' &&
        document.getElementsByClassName('checkIcon')[1].style.visibility === 'visible') {
            document.getElementsByClassName('btn')[0].style.background = '#234E70FF'
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
                        <form onSubmit={HandleSubmit}>
                            <input placeholder='رمز خود را وارد کنید' type="password" value={pass} onChange={CheckPass}/>
                            <CheckIcon sx={{ fontSize: 16 }} className="checkIcon checkIcon1" />
                            <CloseIcon sx={{ fontSize: 16 }} className="closeIcon closeIcon1" />
                            <p className="error">&nbsp;</p>
                            <input placeholder='تکرار رمز خود را وارد کنید' type="password" value={repeatPass} onChange={CheckRepeatPass}/>
                            <CheckIcon sx={{ fontSize: 16 }} className="checkIcon checkIcon2" />
                            <CloseIcon sx={{ fontSize: 16 }} className="closeIcon closeIcon2" />
                            <p className="error">&nbsp;</p>
                            <p className='errorType error'>&nbsp;</p>
                            <button disabled={disable} type='submit' className='btn'>
                                <span className='disableLink'>ثبت نام</span>
                                {/*<Link to='/' className="goAhead">ثبت نام</Link>*/}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChoosePass;