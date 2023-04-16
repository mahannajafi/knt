import React, {useEffect, useState} from "react";
import "./Register.css"
import {Link, Navigate, redirect, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

function ChoosePass() {
    const [pass, setPass] = useState('');
    const [repeatPass, setRepeatPass] = useState('');
    const [disable , setDisable] = useState(true)
    const [isRegister , setRegister] = useState(false)
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleRegistration = (data) => console.log(data)
    const onErrors = errors => console.error(errors)

    useEffect(() => {
        if(isRegister) {
            navigate("/Login")
        }
    })

    let phone_number = sessionStorage.getItem('phone_number');
    // sessionStorage.setItem('password',pass)

    // const HandleSubmit = () => {
        // event.preventDefault()
        // axios
        //     .post("https://chuplon.iran.liara.run/api/v1/account/register/", {
        //         phone_number:phone_number,
        //         password:pass
        //     })
        //     .then((response) => {
        //         console.log(response)
        //         setRegister(true)
        //
        //     })
        //     .catch((error) => {
        //         if (error.response) {
        //             document.getElementsByClassName('errorType')[0].innerHTML = 'شماره تلفن یا رمز عبور اشتباه است'
        //         } else if (error.request) {
        //             console.log(error.request);
        //             document.getElementsByClassName('errorType')[0].innerHTML = 'چنین کاربری یافت نشد'
        //         } else {
        //             // console.log(error);
        //             document.getElementsByClassName('errorType')[0].innerHTML = 'چنین کاربری یافت نشد'
        //         }
        //     });
    // }

    const checkChoosePassForm = () => {
        if (pass.length >= 8 && pass === repeatPass){setDisable(false)}
        else {setDisable(true)}
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
                        <form onSubmit={handleSubmit(handleRegistration , onErrors)} onChange={checkChoosePassForm}>
                            <input required placeholder='رمز عبور خود را وارد کنید' type="password" name="pass"
                                   onInput={(event)=>{setPass(event.target.value)}}
                                   {...register('pass' , {required:true , minLength:8})}/>
                            <section className="error">
                                {errors?.pass && errors.pass.type === "required" && <span>این قسمت  را پر کنید</span>}
                                {errors.pass && errors.pass.type === "minLength" && <span>رمز عبور باید حداقل 8 کاراکتر باشد</span>}
                            </section>

                            <input required placeholder='تکرار رمز خود را وارد کنید' type="password" name="repeatPass"
                                   onInput={(event)=>{setRepeatPass(event.target.value)}}
                                   {...register('repeatPass' , {required:true , value:pass})}/>
                            <section className="error">
                                {errors?.repeatPass && errors.repeatPass.type === "required" && <span>این قسمت  را پر کنید</span>}
                                {errors.repeatPass && errors.repeatPass.type === "value" && <span>رمز و تکرار مطابقت ندارند</span>}
                            </section>

                            <button disabled={disable} className='btn' style={{
                                color: !disable &&  "#FFF",
                                backgroundColor: !disable && "#234E70FF"}}
                            >ثبت نام</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChoosePass;