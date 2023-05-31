import "./LoginForm.css"
import { useForm } from "react-hook-form";

function LoginForm() {
    const {register, handleSubmit, formState: { errors },} = useForm();
    // const navigate = useNavigate();

    const onSubmitHandler = (data) => {
        console.log(data);
    }

    // useEffect(() => {
    //     if(isRegister) {
    //         navigate("/")
    //     }
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
    // })

    return (
        <div className="loginFormContainer">
            <div className="loginSection">
                <h1>ورود</h1>
                <form action="" className="loginForm" onSubmit={handleSubmit(onSubmitHandler)}>
                        <input placeholder="شماره همراه خود را وارد کنید." type="tel" className="loginInput"
                            {...register("phone_number", {
                                required: "این فیلد اجباری است.",
                                validate: (val) => {
                                    if (val.charAt(0) != "0") {return "اولین کاراکتر باید 0 باشد."}
                                    else if (val.charAt(1) != "9") {return "دومین کاراکتر باید 9 باشد.";}
                                    else  if(val.length != 11) {return "شماره تلفن باید 11 رقمی باشد."}
                                },
                            })}
                        />
                    {errors.phone_number ? (
                        <p className="loginError">{errors.phone_number.message}</p>
                    ) : ("")}
                        <input type="password" placeholder="رمز عبور خود را وارد کنید." className="loginInput"
                            {...register("password", {
                                required: "این فیلد اجباری است.",
                                minLength: { value: 8, message: "حداقل 8 کارکتر اجباری است." },
                            })}
                        />
                    {errors.password ? (
                        <p className="loginError">{errors.password.message}</p>
                    ) : ("")}
                    <p className="forgetPassText">رمز خود را فراموش کرده اید؟<span>بازیابی کلمه عبور</span></p>
                    <button className="loginButton">ورود</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;