import React from "react";
import "./DashboardMenu.css"
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { Link } from "react-router-dom";

function DashboardMenu() {
    return (
        <>
            <div className="dashboardMenuContainer">
                <AccountCircleIcon sx={{ fontSize: 80 }} className="accountIcon" />
                <strong>نام کاربری</strong>
                <small>موجودی:1 میلیارد</small>
                    <button>برداشت</button>
                <ul>
                    <Link to="/DesignerDashboard" className="dashboard"><li><PersonIcon />&nbsp;&nbsp;&nbsp;اطلاعات کاربری</li></Link>
                    <Link to="/DesignerDashboard" className="dashboard"><li><MapsHomeWorkIcon />&nbsp;&nbsp;&nbsp;ادرس های من</li></Link>
                    <Link to="/DesignerDashboard" className="dashboard"><li><WorkOutlineIcon />&nbsp;&nbsp;&nbsp;سفارش های من</li></Link>
                    <Link to="/DesignerDashboard" className="dashboard"><li><DesignServicesIcon />&nbsp;&nbsp;&nbsp;طرح های من</li></Link>
                    <Link to="/DesignerDashboard" className="dashboard"><li><EqualizerIcon />&nbsp;&nbsp;&nbsp;آمار فروش</li></Link>
                    <Link to="/MyMessages" className="dashboard"><li><MailOutlineIcon />&nbsp;&nbsp;&nbsp;پیام های من</li></Link>
                    <Link to="/DesignerDashboard" className="dashboard"><li><LogoutIcon />&nbsp;&nbsp;&nbsp;خروج</li></Link>
                </ul>
                <button>اکانت ویژه</button>
            </div>
        </>
    )
}
export default DashboardMenu;