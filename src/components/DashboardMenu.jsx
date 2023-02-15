import React, {useEffect, useState} from "react";
import "./DashboardMenu.css"
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function DashboardMenu() {
    const [count , setCount] = useState(1)
    const navigate = useNavigate();
    useEffect(() => {
        // if(count === 4) {
        //     navigate("/MyDesigns")
        // }
        // else if(count === 6) {
        //     navigate("/MyMessages")
        // }
        if(count === 7) {
            axios
                .post("https://chuplon.iran.liara.run/api/v1/account/logout/", {})
                .then((response) => {
                    localStorage.removeItem('token')
                    console.log(response)
                    navigate("/")
                })
                .catch((error) => {
                    if (error.response) {
                        console.log(error.response);
                        console.log("server responded");
                    } else if (error.request) {
                        console.log("network error");
                    } else {
                        console.log(error);
                    }
                });
        }
    })

    return (
        <>
            <div className="dashboardMenuContainer">
                <AccountCircleIcon sx={{ fontSize: 80 }} className="accountIcon" />
                <strong>نام کاربری</strong>
                <small>موجودی:1 میلیارد</small>
                <button>برداشت</button>
                <ul>
                    <li onClick={() => setCount(1)}><Link className='dashboard' to="/DesignerDashboard"><PersonIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;اطلاعات کاربری</Link></li>
                    <li onClick={() => setCount(2)}><MapsHomeWorkIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;ادرس های من</li>
                    <li onClick={() => setCount(3)}><WorkOutlineIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;سفارش های من</li>
                    <li onClick={() => setCount(4)}><Link className='dashboard' to="/MyDesigns"><DesignServicesIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;طرح های من</Link></li>
                    <li onClick={() => setCount(5)}><EqualizerIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;آمار فروش</li>
                    <li onClick={() => setCount(6)}><Link className='dashboard' to="/MyMessages"><MailOutlineIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;پیام های من</Link></li>
                    <li onClick={() => setCount(7)}><LogoutIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;خروج</li>
                </ul>
                <button>اکانت ویژه</button>
            </div>
        </>
    )
}
export default DashboardMenu;