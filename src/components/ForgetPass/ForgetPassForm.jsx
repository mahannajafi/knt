import "./ForgetPassForm.css"
import { useForm } from "react-hook-form";

function ForgetPassForm() {
    const {register, handleSubmit, formState: { errors },} = useForm();

    const onSubmitHandler = (data) => {
        console.log(data);
    }

    return (
        <div className="ForgetPassFormContainer">
            <div className="ForgetPassSection">
                <h1>بازیابی کلمه عبور</h1>
                <form action="" className="ForgetPassForm" onSubmit={handleSubmit(onSubmitHandler)}>
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
                    <button className="loginButton forgetPassButton">ارسال کد</button>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassForm;