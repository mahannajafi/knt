import "./GoToLogin.css"
import {useNavigate} from "react-router-dom";

function GoToLogin() {
    const navigate = useNavigate()
    const log = () => {
        navigate("/Login")
    }

    return (
        <div className="goToLogContainer">
            <div className="goToLogSection">
                <h1>ثبت نام کرده اید؟</h1>
                <button onClick={log}>ورود</button>
            </div>
        </div>
    )
}

export default GoToLogin;