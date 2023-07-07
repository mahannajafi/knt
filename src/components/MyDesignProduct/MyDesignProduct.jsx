import React from "react";
import "./MyDesignProduct.css"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import swishert from "../../assets/imgs/swishert.png";
import Slider from '@mui/material/Slider';

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
                            <h4>توصیفات:</h4>&nbsp;&nbsp;&nbsp;
                            <span>{desc}</span>
                        </p>
                        <p className="price">
                            <h4>قیمت:</h4>
                            {/*<input min="4000" max="6000" type="range" onChange={(event)=>{alert(event.target.value)}} />*/}
                            <Slider className="designedProductPrice" defaultValue={50000} aria-label="Default"
                                    valueLabelDisplay="auto" min={minPrice} max={maxPrice} style={{accentColor:"yellow"}} />
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