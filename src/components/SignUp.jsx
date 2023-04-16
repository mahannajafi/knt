import React from "react";
import "./Register.css"
import {Link, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState , useEffect } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";

function SignUp() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleRegistration = (data) => console.log(data)
    const onErrors = errors => console.error(errors)
    const [disable , setDisable] = useState(true)
    sessionStorage.setItem('phone_number',phoneNumber)

    // const HandleSubmit = () => {
        // axios
        //     .post("https://chuplon.iran.liara.run/api/v1/account/register/", {
        //         phone_number:phoneNumber,
        //         password:"1234"
        //     })
        //     .then((response) => {
        //         console.log(response);
        //         console.log(phoneNumber)
        //         alert("kmlokokr")
        //     })
        //     .catch((error) => {
        //         if (error.response) {
        //             console.log(error.response);
        //             console.log("server responded");
        //         } else if (error.request) {
        //             console.log("network error");
        //         } else {
        //             console.log(error);
        //         }
        //     });
    // };

    const checkSignUpForm = () => {
        if (phoneNumber.length === 11){setDisable(false)}
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
                        <form onSubmit={handleSubmit(handleRegistration , onErrors)} onChange={checkSignUpForm}>
                            <input required placeholder='شماره همراه خود را وارد کنید' type="number" name="phoneNumber"
                                   onInput={(event)=>{setPhoneNumber(event.target.value)}}
                                   {...register('phoneNumber' , {required:true , minLength:11 , maxLength:11})} />
                            <section className="error">
                                {errors?.phoneNumber && errors.phoneNumber.type === "required" && <span>این قسمت  را پر کنید</span>}
                                {errors.phoneNumber && errors.phoneNumber.type === "minLength" && <span>شماره تلفن باید 11 رقمی باشد</span>}
                                {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && <span>شماره تلفن باید 11 رقمی باشد</span>}
                            </section>
                            <button disabled={disable} className='btn' style={{
                                color: !disable &&  "#FFF",
                                backgroundColor: !disable && "#234E70FF"}}
                            >ارسال کد</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;