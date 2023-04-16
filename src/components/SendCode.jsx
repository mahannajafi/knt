import React, {useState} from "react";
import "./Register.css"
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

function SendCode() {
    const [verificationCode, setVerificationCode] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleRegistration = (data) => console.log(data)
    const onErrors = errors => console.error(errors)
    const [disable , setDisable] = useState(true)

    const checkSendCodeForm = () => {
        if (verificationCode.length === 5){setDisable(false)}
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
                        <form onSubmit={handleSubmit(handleRegistration , onErrors)} onChange={checkSendCodeForm}>
                            <input required placeholder='کد تایید را وارد کنید' type="text" name="code"
                                   onInput={(event)=>{setVerificationCode(event.target.value)}}
                                   {...register('code' , {required:true})} />
                            <section className="error">
                                {errors?.code && errors.code.type === "required" && <span>این قسمت  را پر کنید</span>}
                            </section>
                            <span>کد را دریافت نکرده اید؟ <Link to="/SendCode" className='link'>ارسال مجدد کد</Link></span>
                            <button disabled={disable} className='btn' style={{
                                color: !disable &&  "#FFF",
                                backgroundColor: !disable && "#234E70FF"}}
                            >تایید</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SendCode;