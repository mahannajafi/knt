import "./SetPassForm.css"
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"

function SetPassForm() {
    const {register, handleSubmit, formState: { errors },} = useForm();

    const onSubmitHandler = (data) => {
        console.log(data);
    }

    return (
        <div className="verifyCodeFormContainer">
            <div className="verifyCodeSection">
                <h1>ثبت نام</h1>
                <form action="" className="verifyCodeForm" onSubmit={handleSubmit(onSubmitHandler)}>
                    <input type="password" placeholder="رمز خود را وارد کنید." className="loginInput"
                           {...register("password", {
                               required: "این فیلد اجباری است.",
                               minLength: { value: 8, message: "حداقل 8 کارکتر اجباری است." },
                           })}
                    />
                    {errors.password ? (
                        <p className="loginError">{errors.password.message}</p>
                    ) : ("")}
                    <input type="password" placeholder="تکرار رمز خود را وارد کنید." className="loginInput"
                           {...register("password", {
                               required: "این فیلد اجباری است.",
                               minLength: { value: 8, message: "حداقل 8 کارکتر اجباری است." },
                           })}
                    />
                    {errors.password ? (
                        <p className="loginError">{errors.password.message}</p>
                    ) : ("")}
                    <button className="RegisterButton setPassButton">ثبت نام</button>
                </form>
            </div>
        </div>
    )
}

export default SetPassForm;