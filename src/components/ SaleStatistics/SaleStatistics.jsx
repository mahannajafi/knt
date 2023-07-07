import "./SaleStatistics.css"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";

function SaleStatistics({productImage , providerName , salesNumber , productPrice}) {
    return (
        <>
            <div className="statistics">
                <div className="statisticsTitle">
                    <h4>نام محصول</h4>
                </div>
                <div className="statisticContent">
                    <div className="statisticImageContainer">
                        <img src={productImage} alt="" />
                    </div>
                    <div className="statisticsDesc">
                        <p>نام تولید کننده</p>
                        <p>{providerName}</p>
                    </div>
                    <div className="statisticsDesc">
                        <p>تعداد فروش</p>
                        <p>{salesNumber}</p>
                    </div>
                    <div className="statisticsDesc">
                        <p>قیمت محصول</p>
                        <p>{productPrice} تومان</p>
                    </div>
                    <div className="statisticsDesc">
                        <p>مجموع درآمد</p>
                        <p>{productPrice * salesNumber} تومان</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SaleStatistics;