import RecoveryPassForm from "../components/ForgetPass/RecoveryPassForm";
import GoToRegister from "../components/GoToRegister/GoToRegister";

function RecoveryPass() {
    return (
        <div className='login'>
            <RecoveryPassForm />
            <GoToRegister />
        </div>
    )
}

export default RecoveryPass;