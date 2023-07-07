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
import CloseIcon from "@mui/icons-material/Close";

function DashboardMenu() {
    const [count , setCount] = useState(1)
    const [messageNumber , setMessageMessageNumber] = useState(2)
    const [isDesigner , setDesigner] = useState(true)
    const [isClose , setClose] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        console.log(count)
    // }
    //     if (count === 1){
    //         // alert(count)
    //         // navigate("/DesignerDashboard")
    //     }
    //     else if (count === 2){
    //         // alert(count)
    //         // navigate("/MyAddresses")
    //     }
    //     else if (count === 3){
    //         // alert(count)
    //         // navigate("/MyOrders")
    //     }
    //     else if (count === 4){
    //         // alert(count)
    //         navigate("/MyDesigns")
    //     }
    //     else if (count === 5){
    //         // alert(count)
    //         navigate("/MySaleStatistics")
    //     }
    //     else if (count === 6){
    //         // alert(count)
    //         navigate("/MyMessages")
    //     }
    //     if(count === 7) {
    //         axios
    //             .post("https://chuplon.iran.liara.run/api/v1/account/logout/", {})
    //             .then((response) => {
    //                 localStorage.removeItem('token')
    //                 console.log(response)
    //                 navigate("/")
    //             })
    //             .catch((error) => {
    //                 if (error.response) {
    //                     console.log(error.response);
    //                     console.log("server responded");
    //                 } else if (error.request) {
    //                     console.log("network error");
    //                 } else {
    //                     console.log(error);
    //                 }
    //             });
    //     }
    } , [count])

    return (
        <>
            <div className="dashboardMenuContainer">
                <AccountCircleIcon sx={{ fontSize: 80 }} className="accountIcon" />
                <strong>نام کاربری</strong>
                <small>موجودی:1 میلیارد</small>
                <button>برداشت</button>
                <ul>
                    <li onClick={() => {setCount(1);navigate("/DesignerDashboard")}} style={{backgroundColor: (count === 1) && "red"}}>
                        {/*<Link className='dashboard' to="/DesignerDashboard">*/}
                        <PersonIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;اطلاعات کاربری</li>
                    <li onClick={() => {setCount(2);navigate("/MyAddresses")}} style={{backgroundColor: (count === 2) && "red"}}>
                        <MapsHomeWorkIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;ادرس های من</li>
                    <li onClick={() => {setCount(3);navigate("/MyOrders")}}>
                        <WorkOutlineIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;سفارش های من</li>
                    <li onClick={() => {setCount(4);navigate("/MyDesigns")}}
                        style={{display: !isDesigner && "none" , backgroundColor: (count === 3) && "red"}}>
                        <DesignServicesIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;طرح های من</li>
                    <li onClick={() => {setCount(5);navigate("/MySaleStatistics")}}
                        style={{display: !isDesigner && "none" , backgroundColor: (count === 4) && "red"}}>
                        <EqualizerIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;آمار فروش</li>
                    <li onClick={() => {setCount(6);navigate("/MySaleStatistics")}} style={{backgroundColor: (count === 4) && "red"}}>
                        <MailOutlineIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;پیام های من
                        {messageNumber !== 0 ? <div className="numberOfMessages">2</div> : ""}</li>
                    <li onClick={() => {setCount(7)}}><LogoutIcon className="menuIcons" />&nbsp;&nbsp;&nbsp;خروج</li>
                </ul>
                {isDesigner ? <button>اکانت ویژه</button> : <button onClick={()=>setClose(false)}>ارتقا به طراح</button>}
                <div className="upgradeToDesigner" style={{display: (isClose === false) && "block"}}>
                    <div className="upgradeToDesignerHeader">
                        <p>ارتقا به طراح</p>
                        <CloseIcon onClick={()=>setClose(true)} />
                    </div>
                    <p className="upgradeToDesignerText">برای دسترس به بخش طراحی ابتدا لازم است اکانت خود را به طراح ارتقا دهید.
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخموجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    <button className="upgradeToDesignerButton">انتقال به سامانه ی احراز هویت</button>
                </div>
            </div>
        </>
    )
}
export default DashboardMenu;