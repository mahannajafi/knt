import SetPassForm from "../components/SetPassForm/SetPassForm";
import GoToLogin from "../components/GoToLogin/GoToLogin";

function SetPass() {
    return (
        <div className='login'>
            <GoToLogin />
            <SetPassForm />
        </div>
    )
}

export default SetPass;