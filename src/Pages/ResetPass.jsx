import ResetPassForm from "../components/ResetPassForm/ResetPassForm";
import GoToRegister from "../components/GoToRegister/GoToRegister";

function ResetPass() {
    return (
        <div className='login'>
            <ResetPassForm />
            <GoToRegister />
        </div>
    )
}

export default ResetPass;