import "./RegisterForm.css"
import { useForm } from "react-hook-form";

function LoginForm() {
    const {register, handleSubmit, formState: { errors },} = useForm();

    const onSubmitHandler = (data) => {
        console.log(data);
    }

    // const HandleSubmit = () => {
    // axios
    //     .post("https://chuplon.iran.liara.run/api/v1/account/register/", {
    //         phone_number:phoneNumber,
    //         password:"1234"
    //     })
    //     .then((response) => {
    //         console.log(response);
    //         console.log(phoneNumber)
    //         alert("kmlokokr")
    //     })
    //     .catch((error) => {
    //         if (error.response) {
    //             console.log(error.response);
    //             console.log("server responded");
    //         } else if (error.request) {
    //             console.log("network error");
    //         } else {
    //             console.log(error);
    //         }
    //     });
    // };

    return (
        <div className="RegisterFormContainer">
            <div className="RegisterSection">
                <h1>ثبت نام</h1>
                <form action="" className="RegisterForm" onSubmit={handleSubmit(onSubmitHandler)}>
                    <input placeholder="شماره همراه خود را وارد کنید." type="tel" className="RegisterInput"
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
                        <p className="RegisterError">{errors.phone_number.message}</p>
                    ) : ("")}
                    <button className="RegisterButton">ارسال کد</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;