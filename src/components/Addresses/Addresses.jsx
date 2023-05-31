import React , {useState} from "react";
import "./Addresses.css"
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import Address from "./Address";
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Addresses() {
    const [isClose , setClose] = useState(true)

    return (
        <>
            <div className="myAddressesContainer">
                <DashboardMenu />
                <div className="Addresses">
                    <h3>ادرس های من</h3>
                    <Address />
                    <Address />
                    <div className="addAddress"><button onClick={()=>setClose(false)}>+</button></div>
                </div>
            </div>
            <div className="addAddressSection" style={{display: (isClose === false) && "block"}}>
                <div className="addAddressHeader">
                    <p>ادرس جدید</p>
                    <CloseIcon onClick={()=>setClose(true)} />
                </div>
                <div className="addAddressContent">
                    <div className="addAddressLocation">
                        <LocationOnIcon className="locationIcon" sx={{fontSize:80}} />
                    </div>
                    <form className="addAddressForm">
                        <label className="addAddressLabel">نام و نام خانوادگی گیرنده
                            <input />
                        </label>
                        <label className="addAddressLabel">شماره همراه گیرنده
                            <input />
                        </label>
                        <label className="addAddressLabel">عنوان آدرس
                            <input />
                        </label>
                        <label className="addAddressLabel">کد پستی
                            <input />
                        </label>
                        <label className="addAddressLabel">استان
                            <select>
                                <option>تهران</option>
                                <option>البرز</option>
                                <option>اصفهان</option>
                                <option>مازندران</option>
                                <option>یزد</option>
                                <option>کرمان</option>
                            </select>
                        </label>
                        <label className="addAddressLabel">شهر
                            <select>
                                <option>تهران</option>
                                <option>البرز</option>
                                <option>اصفهان</option>
                                <option>مازندران</option>
                                <option>یزد</option>
                                <option>کرمان</option>
                            </select>
                        </label>
                        <label className="addAddressLabel addressLabel">آدرس
                            <input />
                        </label>
                        <label className="addAddressLabel">پلاک
                            <input />
                        </label>
                        <label className="addAddressLabel">واحد
                            <input />
                        </label>
                    </form>
                </div>
                <button className="addAddressButton">ثبت آدرس</button>
            </div>
        </>
    )
}

export default Addresses;