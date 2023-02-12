import React , {useState} from "react";
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
    const [count , setCount] = useState(1)
    return (
        <>
            <div className="dashboardMenuContainer">
                <AccountCircleIcon sx={{ fontSize: 80 }} className="accountIcon" />
                <strong>نام کاربری</strong>
                <small>موجودی:1 میلیارد</small>
                <button>برداشت</button>
                <ul>
                    <li onClick={() => setCount(1)}><Link to="/DesignerDashboard" className="dashboard"><PersonIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;اطلاعات کاربری</Link></li>
                    <li onClick={() => setCount(2)}><Link to="/DesignerDashboard" className="dashboard"><MapsHomeWorkIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;ادرس های من</Link></li>
                    <li onClick={() => setCount(3)}><Link to="/DesignerDashboard" className="dashboard"><WorkOutlineIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;سفارش های من</Link></li>
                    <li onClick={() => setCount(4)}><Link to="/MyDesigns" className="dashboard"><DesignServicesIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;طرح های من</Link></li>
                    <li onClick={() => setCount(5)}><Link to="/DesignerDashboard" className="dashboard"><EqualizerIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;آمار فروش</Link></li>
                    <li onClick={() => setCount(6)}><Link to="/MyMessages" className="dashboard"><MailOutlineIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;پیام های من</Link></li>
                    <li onClick={() => setCount(7)}><Link to="/DesignerDashboard" className="dashboard"><LogoutIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;خروج</Link></li>
                </ul>
                <button>اکانت ویژه</button>
            </div>
        </>
    )
}
export default DashboardMenu;