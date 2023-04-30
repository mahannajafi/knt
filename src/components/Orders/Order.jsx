import "./Order.css"
import React from "react";

function Order({productImage , productName , productSize , productColor}) {
    return (
        <>
            <div className="orderContent">
                <div className="orderImageContainer">
                    <img src={productImage} alt="" />
                </div>
                <div className="orderDesc">
                    <p>{productName}</p>
                    <p>سایز: &nbsp;&nbsp;&nbsp;{productSize}</p>
                    <p>رنگ: &nbsp;&nbsp;&nbsp;&nbsp; <div className="orderColor" style={{backgroundColor:"yellow"}}></div></p>
                </div>
            </div>
        </>
    )
}

export default Order;