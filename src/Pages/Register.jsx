import RegisterForm from "../components/RegisterForm/RegisterForm";
import GoToLogin from "../components/GoToLogin/GoToLogin";

function Register() {
    return (
        <div className='register'>
            <GoToLogin />
            <RegisterForm />
        </div>
    )
}

export default Register;