import React, {useState} from "react";
import "./Login.css"
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function ForgetPass() {
    const [phone, setPhone] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleRegistration = (data) => console.log(data)
    const onErrors = errors => console.error(errors)
    const [disable , setDisable] = useState(true)

    const checkForgetPassForm = () => {
        if (phone.length === 11){setDisable(false)}
        else {setDisable(true)}
    }

    return (
        <>
            <div className='loginContainer'>
                <div className='loginForm'>
                    <div>
                        <p>بازیابی کلمه ی عبور</p>
                        <form onSubmit={handleSubmit(handleRegistration , onErrors)} onChange={checkForgetPassForm}>
                            <input required placeholder='شماره همراه خود را وارد کنید' type="number" name="phone"
                                   onInput={(event)=>{setPhone(event.target.value)}} {...register('phone' , {required:true , minLength:11 , maxLength:11})} />
                            <section className="error">
                                {errors?.phone && errors.phone.type === "required" && <span>این قسمت  را پر کنید</span>}
                                {errors.phone && errors.phone.type === "minLength" && <span>شماره تلفن باید 11 رقمی باشد</span>}
                                {errors.phone && errors.phone.type === "maxLength" && <span>شماره تلفن باید 11 رقمی باشد</span>}
                            </section>

                            <button disabled={disable} className='btn' style={{
                                color: !disable &&  "#FFF",
                                backgroundColor: !disable && "#234E70FF"}}
                            >ارسال کد</button>
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

export default ForgetPass;