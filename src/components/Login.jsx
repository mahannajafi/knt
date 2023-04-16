import React, {useState , useEffect} from "react";
import "./Login.css"
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const handleRegistration = (data) => console.log(data)
    const onErrors = errors => console.error(errors)
    const [disable , setDisable] = useState(true)
    const [isRegister , setRegister] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        if(isRegister) {
            navigate("/")
        }
        // alert("nemf,fg")
        // if (pass.length >= 8 && phone.length === 11){setDisable(true)}
        // event.preventDefault()
        // axios
        //     .post("https://chuplon.iran.liara.run/api/v1/account/login/", {
        //         phone_number:phone,
        //         password:pass
        //     })
        //     .then((response) => {
        //         console.log(response.data)
        //         setRegister(true)
        //         localStorage.setItem('token', response.data.jwt)
        //     })
        //     .catch((error) => {
        //         if (error.response) {
        //             console.log(error.response)
        //             document.getElementsByClassName('errorType')[0].innerHTML = 'شماره تلفن یا رمز عبور اشتباه است'
        //         } else if (error.request) {
        //             console.log(error.request)
        //             document.getElementsByClassName('errorType')[0].innerHTML = 'چنین کاربری یافت نشد'
        //         } else {
        //             console.log(error.response)
        //             document.getElementsByClassName('errorType')[0].innerHTML = 'چنین کاربری یافت نشد'
        //         }
        //     });
    })

    const checkLoginForm = () => {
        if (pass.length >= 8 && phone.length === 11){setDisable(false)}
        else {setDisable(true)}
    }

    return (
        <>
            <div className='loginContainer'>
                <div className='loginForm'>
                    <div>
                        <p>ورود</p>
                        <form onSubmit={handleSubmit(handleRegistration , onErrors)} onChange={checkLoginForm}>
                            <input required placeholder='شماره همراه خود را وارد کنید' type="number" name="phone"
                                   onInput={(event)=>{setPhone(event.target.value)}} {...register('phone' , {required:true , minLength:11 , maxLength:11})} />
                            <section className="error">
                                {errors?.phone && errors.phone.type === "required" && <span>این قسمت  را پر کنید</span>}
                                {errors.phone && errors.phone.type === "minLength" && <span>شماره تلفن باید 11 رقمی باشد</span>}
                                {errors.phone && errors.phone.type === "maxLength" && <span>شماره تلفن باید 11 رقمی باشد</span>}
                            </section>

                            <input required placeholder='رمز عبور خود را وارد کنید' type="password" name="pass"
                                   onInput={(event)=>{setPass(event.target.value)}} {...register('pass' , {required:true , minLength:8})}/>
                            <section className="error">
                                {errors?.pass && errors.pass.type === "required" && <span>این قسمت  را پر کنید</span>}
                                {errors.pass && errors.pass.type === "minLength" && <span>رمز عبور باید حداقل 8 کاراکتر باشد</span>}
                            </section>

                            <section className="error"></section>
                            <span>رمز عبور خود را فراموش کرده اید؟<Link to="/ForgetPass" className='link'>بازیابی رمز عبور</Link></span>
                            <button disabled={disable} className='btn' style={{
                                color: !disable &&  "#FFF",
                                backgroundColor: !disable && "#234E70FF"}}
                            >ورود</button>
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