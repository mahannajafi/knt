import "./ForgetPassForm.css"
import {useForm} from "react-hook-form";

function RecoveryPassForm() {
    const {register, handleSubmit, formState: { errors },} = useForm();

    const onSubmitHandler = (data) => {
        console.log(data);
    }

    return (
        <div className="ForgetPassFormContainer">
            <div className="ForgetPassSection">
                <h1>بازیابی کلمه عبور</h1>
                <form action="src/components/ForgetPass/RecoveryPassForm" className="ForgetPassForm" onSubmit={handleSubmit(onSubmitHandler)}>
                    <input placeholder="کد ارسال شده را وارد کنید." type="text" className="loginInput"
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
                    <button className="loginButton forgetPassButton">تایید کد</button>
                </form>
            </div>
        </div>
    )
}

export default RecoveryPassForm;