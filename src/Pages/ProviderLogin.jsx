import ProviderLoginForm from "../components/ProviderLog/ProviderLoginForm";
import ProviderLoginContext from "../components/ProviderLog/ProviderLogContext";

function ProviderLogin() {
    return (
        <div className='login'>
            <ProviderLoginForm />
            <ProviderLoginContext />
        </div>
    )
}

export default ProviderLogin;