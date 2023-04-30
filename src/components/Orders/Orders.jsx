import "./Orders.css"
import React from "react";
import Order from "./Order";
import OrderTitle from "./OrderTitle";
import productImage from "../../assets/imgs/swishert.png"

function Orders() {
    return (
        <>
            <div className="order">
                <OrderTitle status="به پست تحویل داده شده" date="10 خرداد 1401" code={123456} price={123456} />
                <Order productImage={productImage} productName="هودی مدل 17" productSize="2XL" productColor="yellow" />
                <Order productImage={productImage} productName="هودی مدل 17" productSize="2XL" productColor="yellow" />
                <div className="orderAddress">تهران, خیابان ولیعصر, کوچه ی بهاران</div>
                <div className="orderDate">تاریخ تحویل : {"15 خرداد 1401"}</div>
                <div className="orderButtonContainer"><button className="orderButton">پیگیری وضعیت سفارش</button></div>
            </div>
        </>
    )
}

export default Orders;