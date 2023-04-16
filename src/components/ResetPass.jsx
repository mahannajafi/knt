import React, {useState} from "react";
import "./Login.css"
import {Link} from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {useForm} from "react-hook-form";

function ResetPass() {
    const [newPass, setNewPass] = useState('');
    const [repeatNewPass, setRepeatNewPass] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleRegistration = (data) => console.log(data)
    const onErrors = errors => console.error(errors)
    const [disable , setDisable] = useState(true)

    const checkResetPassForm = () => {
        if (newPass === repeatNewPass && newPass.length >= 8){setDisable(false)}
        else {setDisable(true)}
    }

    return (
        <>
            <div className='loginContainer'>
                <div className='loginForm'>
                    <div>
                        <p>بازیابی کلمه ی عبور</p>
                        <form onSubmit={handleSubmit(handleRegistration , onErrors)} onChange={checkResetPassForm}>
                            <input required placeholder='رمز عبور خود را وارد کنید' type="password" name="pass"
                                   onInput={(event)=>{setNewPass(event.target.value)}} {...register('pass' , {required:true , minLength:8})}/>
                            <section className="error">
                                {errors?.pass && errors.pass.type === "required" && <span>این قسمت  را پر کنید</span>}
                                {errors.pass && errors.pass.type === "minLength" && <span>رمز عبور باید حداقل 8 کاراکتر باشد</span>}
                            </section>

                            <input required placeholder='تکرار رمز عبور جدید را وارد کنید' type="password" name="repeatPass"
                                   onInput={(event)=>{setRepeatNewPass(event.target.value)}}
                                   {...register('repeatPass' , {required:true , minLength:8 , value:newPass})}/>
                            <section className="error">
                                {errors?.repeatPass && errors.repeatPass.type === "required" && <span>این قسمت  را پر کنید</span>}
                                {errors.repeatPass && errors.repeatPass.type === "value" && <span>تکرار با رمز مطابقت ندارد</span>}
                            </section>

                            <button disabled={disable} className='btn' style={{
                                color: !disable &&  "#FFF",
                                backgroundColor: !disable && "#234E70FF"}}
                            >تغییر رمز عبور</button>
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