import VerifyCodeForm from "../components/VerifyCodeForm/VerifyCodeForm";
import GoToLogin from "../components/GoToLogin/GoToLogin";

function VerificationCode() {
    return (
        <div className='login'>
            <GoToLogin />
            <VerifyCodeForm />
        </div>
    )
}

export default VerificationCode;