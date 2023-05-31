import { useForm } from "react-hook-form";

function ProviderLoginForm() {
    const {register, handleSubmit, formState: { errors },} = useForm();

    const onSubmitHandler = (data) => {
        console.log(data);
    }

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
                                   else  if(val.length != 11) {return "شماره تلفن باید 11 رقمی باشد."}},
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
                    <button className="loginButton">ورود</button>
                </form>
            </div>
        </div>
    )
}

export default ProviderLoginForm;