import "./OrderTitle.css"
import React from "react";

function OrderTitle({status, date  , code , price}) {
    return (
        <div className="orderTitle">
            <h4>وضعیت سفارش: {status}</h4>
            <h5>تاریخ ثبت سفارش &nbsp;{date}
                &nbsp;|&nbsp;
                کد سفارش:&nbsp;{code}
                &nbsp;|&nbsp;
                مبلغ:&nbsp;{price}
            </h5>
        </div>
    )
}

export default OrderTitle;