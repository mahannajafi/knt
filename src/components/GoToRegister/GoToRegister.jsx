import "./GoToRegister.css"
import {useNavigate} from "react-router-dom";

function GoToRegister() {
    const navigate = useNavigate()
    const reg = () => {
        navigate("/Register")
    }

    return (
        <div className="goToRegContainer">
            <div className="goToRegSection">
                <h1>حساب کاربری ندارید؟</h1>
                <button onClick={reg}>ثبت نام</button>
            </div>
        </div>
    )
}

export default GoToRegister;