import LoginForm from "../components/LoginForm/LoginForm";
import GoToRegister from "../components/GoToRegister/GoToRegister";

function Login() {
    return (
        <div className='login'>
            <LoginForm />
            <GoToRegister />
        </div>
    )
}

export default Login;