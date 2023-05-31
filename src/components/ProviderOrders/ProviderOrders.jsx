import React, {useState} from "react";
import "./ProviderOrders.css"
import image from "../../assets/imgs/swishert.png"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CloseIcon from "@mui/icons-material/Close";

function ProviderOrders() {
    const [isClose , setClose] = useState(true)

    return (
        <>
            <div className="providerOrderSection">
                <div className="providerOrderTitle">نام محصول</div>
                <div className="providerOrderDetails">
                    <img className="providerOrderImage" src={image} alt="" />
                    <button className="downloadImageIcon"><FileDownloadIcon /></button>
                    <div>رنگ :</div>
                    <div className="ProviderOrderColorContainer">
                        <div className="ProviderOrderColor"></div>
                        <div className="ProviderOrderColor"></div>
                        <div className="ProviderOrderColor"></div>
                    </div>
                    <div>وضعیت سفارش :</div>
                    <select className="providerOrderStatus">
                        <option>تحویل پست داده نشده</option>
                        <option>تحویل داده شده</option>
                    </select>
                    <button className="providerOrderButton" onClick={()=>setClose(false)}>تغییر وضعیت سفارش</button>
                </div>
                <div className="providerAlert" style={{display: (isClose === false) && "block"}}>
                    <div className="providerAlertHeader">
                        <p>تغییر وضعیت سفارش</p>
                        <CloseIcon onClick={()=>setClose(true)} />
                    </div>
                    <form className="orderTrackForm">
                        <label>وضعیت سفارش :</label>
                        <select className="providerOrderStatus">
                            <option>تحویل پست داده نشده</option>
                            <option>تحویل داده شده</option>
                        </select>
                        <button className="orderTrackButton">ثبت</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProviderOrders;