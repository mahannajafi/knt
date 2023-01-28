import React from "react";
import "./MyDesignProduct.css"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import swishert from "../assets/imgs/swishert.png";

function MyDesignProduct({name , id , desc , minPrice , maxPrice}) {
    return (
        <>
            <div className="design">
                <div className="designTitle">
                    <h4>{name}</h4>
                    <button><DeleteOutlineIcon />&nbsp;حذف طرح</button>
                </div>
                <div className="designContent">
                    <div>
                        <img src={swishert} alt="" />
                    </div>
                    <div className="desc">
                        <p>
                            <h4>توصیفات:</h4>
                            <span>{desc}</span>
                        </p>
                        <p className="price">
                            <h4>قیمت:</h4>
                            <input min="4000" max="6000" type="range"/>
                        </p>
                        <div className="priceRange">
                            <div>{maxPrice}</div>
                            <div>{minPrice}</div>
                        </div>
                        <div className="designButtons">
                            <button>اضافه به سبد خرید</button>
                            <button>به فروش گذاشتن</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyDesignProduct;