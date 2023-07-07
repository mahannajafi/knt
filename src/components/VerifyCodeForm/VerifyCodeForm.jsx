import "./VerifyCodeForm.css"
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"

function VerifyCodeForm() {
    const {register, handleSubmit, formState: { errors },} = useForm();

    const onSubmitHandler = (data) => {
        console.log(data);
    }

    return (
        <div className="verifyCodeFormContainer">
            <div className="verifyCodeSection">
                <h1>ثبت نام</h1>
                <form action="" className="verifyCodeForm" onSubmit={handleSubmit(onSubmitHandler)}>
                    <input placeholder="کد تایید را وارد کنید." type="text" className="loginInput"
                           {...register("phone_number", {
                               required: "این فیلد اجباری است.",
                               validate: (val) => {
                                   if(val.length != 5) {return "کد باید 5 رقمی باشد."}
                               },
                           })}
                    />
                    {errors.phone_number ? (
                        <p className="loginError">{errors.phone_number.message}</p>
                    ) : ("")}
                    <p className="forgetPassText">رمز خود را فراموش کرده اید؟<Link className="linkedText">بازیابی کلمه عبور</Link></p>
                    <button className="RegisterButton">تایید</button>
                </form>
            </div>
        </div>
    )
}

export default VerifyCodeForm;