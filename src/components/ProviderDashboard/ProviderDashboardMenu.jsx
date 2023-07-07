import React, {useEffect, useState} from "react";
import "./ProviderDashboardMenu.css"
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link, useNavigate} from "react-router-dom";

function DashboardMenu() {
    const [messageNumber , setMessageMessageNumber] = useState(2)

    return (
        <>
            <div className="dashboardMenuContainer">
                <AccountCircleIcon sx={{ fontSize: 80 }} className="accountIcon" />
                <strong className="providerUserName">نام کاربری</strong>
                <ul>
                    <li><Link className='dashboard'>
                        <WorkOutlineIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;سفارش ها</Link></li>
                    <li><Link className='dashboard'>
                        <MailOutlineIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;پیام ها
                        {messageNumber !== 0 ? <div className="numberOfMessages">2</div> : ""}</Link></li>
                    <li><LogoutIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;خروج</li>
                </ul>
            </div>
        </>
    )
}
export default DashboardMenu;