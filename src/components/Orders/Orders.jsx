import React, {useState} from "react";
import "./Orders.css"
import Order from "./Order";
import OrderTitle from "./OrderTitle";
import productImage from "../../assets/imgs/swishert.png"
import CloseIcon from "@mui/icons-material/Close";

function Orders({orderStatus}) {
    const [isClose , setClose] = useState(true)

    return (
        <>
            <div className="order">
                <OrderTitle status="به پست تحویل داده شده" date="10 خرداد 1401" code={123456} price={123456} />
                <Order productImage={productImage} productName="هودی مدل 17" productSize="2XL" productColor="yellow" orderStatus={true} />
                <Order productImage={productImage} productName="هودی مدل 17" productSize="2XL" productColor="yellow" orderStatus={true} />
                <div className="orderAddress">تهران, خیابان ولیعصر, کوچه ی بهاران</div>
                {orderStatus ? <div className="orderDate">تاریخ تحویل : {"15 خرداد 1401"}</div> : ""}
                <div className="orderButtonContainer">
                    {orderStatus ? <button className="orderButton">مشاهده ی فاکتور</button> :
                        <button className="orderButton" onClick={()=>setClose(false)}>پیگیری وضعیت سفارش</button>}
                </div>
                <div className="orderTrack" style={{display: (isClose === false) && "block"}}>
                    <div className="orderTrackHeader">
                        <p>پیگیری سفارش</p>
                        <CloseIcon onClick={()=>setClose(true)} />
                    </div>
                    <form className="orderTrackForm">
                        <label>متن پیام :</label>
                        <textarea />
                        <button className="orderTrackButton">ارسال به ادمین</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Orders;