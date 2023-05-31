import React , {useState} from "react";
import "./SelectAddress.css"
import Address from "../Addresses/Address";

function SelectAddress() {
    const [selectedAddress , setSelectedAddress] = useState(1)
    const [selectedDay , setSelectedDay] = useState(1)
    const [selectedTime , setSelectedTime] = useState(1)

    return (
        <div className="selectAddress">
            <div className="buyLevels">
                <div className="buyLevel">سبد خرید</div>
                <div className="buyLevel">انتخاب آدرس و زمان ارسال</div>
                <div className="buyLevel">پرداخت</div>
            </div>
            <h3>انتخاب آدرس</h3>
            <div className="addressSection"  onClick={()=>setSelectedAddress(1)}>
                <div className="selectedAddress" style={{borderColor: (selectedAddress === 1) && "#234E70FF"}}></div>
                <Address />
            </div>
            <div className="addressSection" onClick={()=>setSelectedAddress(2)}>
                <div className="selectedAddress" style={{borderColor: (selectedAddress === 2) && "#234E70FF"}}></div>
                <Address />
            </div>
            <div className="chooseDay">
                <h3>انتخاب زمان ارسال</h3>
                <div className='days'>
                    <div className="day" style={{backgroundColor: (selectedDay === 1) && "#234E70FF",
                    color: (selectedDay === 1) && "#FBF8BEFF"}} onClick={()=>setSelectedDay(1)}>
                        {"دوشنبه 22"}</div>
                    <div className="day" style={{backgroundColor: (selectedDay === 2) && "#234E70FF",
                        color: (selectedDay === 2) && "#FBF8BEFF"}} onClick={()=>setSelectedDay(2)}>
                        {"سه شنبه 23"}</div>
                </div>
                {selectedDay === 1 ?
                    <>
                        <div className="chooseTime"><div className="selectDay" style={{borderColor: (selectedTime === 1) && "#234E70FF"}}
                                                         onClick={()=>setSelectedTime(1)}></div>{"ساعت 15 الی 18"}</div>
                        <div className="borderForDays"></div>
                        <div className="chooseTime"><div className="selectDay" style={{borderColor: (selectedTime === 2) && "#234E70FF"}}
                                                         onClick={()=>setSelectedTime(2)}></div>{"ساعت 15 الی 18"}</div>
                        <div className="borderForDays"></div>
                        <div className="chooseTime"><div className="selectDay" style={{borderColor: (selectedTime === 3) && "#234E70FF"}}
                                                         onClick={()=>setSelectedTime(3)}></div>{"ساعت 15 الی 18"}</div>
                    </> :
                    <>
                        <div className="chooseTime"><div className="selectDay" style={{borderColor: (selectedTime === 1) && "#234E70FF"}}
                                                         onClick={()=>setSelectedTime(1)}></div>{"ساعت 15 الی 18"}</div>
                        <div className="borderForDays"></div>
                        <div className="chooseTime"><div className="selectDay" style={{borderColor: (selectedTime === 2) && "#234E70FF"}}
                                                         onClick={()=>setSelectedTime(2)}></div>{"ساعت 15 الی 18"}</div>
                    </>}
                {/*<iframe src="https://goo.gl/maps/iGqdotY1Ux563Vxa6"></iframe>*/}
                {/*<iframe*/}
                {/*    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1511.0223042248701!2d11.145848269494113!3d52.732572334659714!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2snl!4v1685549452683!5m2!1sfa!2snl"*/}
                {/*    width="600" height="450"></iframe>*/}
            </div>
        </div>
    )
}

export default SelectAddress;