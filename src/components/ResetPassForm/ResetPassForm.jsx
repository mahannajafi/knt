import "./ResetPassForm.css"
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";

function ResetPassForm() {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmitHandler = (data) => {
        console.log(data);
    }

    return (
        <div className="loginFormContainer">
            <div className="loginSection">
                <h1>بازیابی رمز عبور</h1>
                <form action="" className="loginForm" onSubmit={handleSubmit(onSubmitHandler)}>
                    <input type="password" placeholder="رمز عبور خود را وارد کنید." className="loginInput"
                           {...register("password", {
                               required: "این فیلد اجباری است.",
                               minLength: { value: 8, message: "حداقل 8 کارکتر اجباری است." },
                           })}
                    />
                    {errors.password ? (
                        <p className="loginError">{errors.password.message}</p>
                    ) : ("")}
                    <input type="password" placeholder="تکرار رمز عبور خود را وارد کنید." className="loginInput"
                           {...register("password", {
                               required: "این فیلد اجباری است.",
                               minLength: { value: 8, message: "حداقل 8 کارکتر اجباری است." },
                           })}
                    />
                    {errors.password ? (
                        <p className="loginError">{errors.password.message}</p>
                    ) : ("")}
                    <button className="loginButton">تغییر رمز عبور</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassForm;