import "./MyDesigns.css"
import DashboardMenu from "./DashboardMenu";
import MyDesignProduct from "./MyDesignProduct";

function MyDesigns() {
    return (
        <>
            <div className="myDesignsContainer">
                <DashboardMenu />
                <div className="designs">
                    <h3>طرح های من</h3>
                    <MyDesignProduct
                        name={"تی شرت"}
                        id={1}
                        desc={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است اساسا مورد استفاده قرار گیرد." +
                            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است اساسا مورد استفاده قرار گیرد."}
                        minPrice={40000}
                        maxPrice={60000}
                    />

                    <MyDesignProduct
                        name={"تی شرت"}
                        id={1}
                        desc={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است اساسا مورد استفاده قرار گیرد." +
                            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است اساسا مورد استفاده قرار گیرد."}
                        minPrice={40000}
                        maxPrice={60000}
                    />
                    {/*<div className="design">*/}
                    {/*    <div className="designTitle">*/}
                    {/*        <h4>نام محصول</h4>*/}
                    {/*        <button><DeleteOutlineIcon />&nbsp;حذف طرح</button>*/}
                    {/*    </div>*/}
                    {/*    <div className="designContent">*/}
                    {/*        <div>*/}
                    {/*            <img src={swishert} alt="" />*/}
                    {/*        </div>*/}
                    {/*        <div className="desc">*/}
                    {/*            <p>*/}
                    {/*                <strong>توصیفات:</strong>&nbsp;&nbsp;*/}
                    {/*                <p>*/}
                    {/*                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است اساسا مورد استفاده قرار گیرد.*/}
                    {/*                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است اساسا مورد استفاده قرار گیرد.*/}
                    {/*                </p>*/}

                    {/*            </p>*/}
                    {/*            <p className="price">*/}
                    {/*                <strong>قیمت:</strong>&nbsp;&nbsp;*/}
                    {/*                <input min="4000" max="6000" type="range"/>*/}
                    {/*            </p>*/}
                    {/*            <div className="priceRange">*/}
                    {/*                <div>60000</div>*/}
                    {/*                <div>40000</div>*/}
                    {/*            </div>*/}
                    {/*            <div className="designButtons">*/}
                    {/*                <button>اضافه به سبد خرید</button>*/}
                    {/*                <button>به فروش گذاشتن</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="design">*/}
                    {/*    <div className="designTitle">*/}
                    {/*        <h4>نام محصول</h4>*/}
                    {/*        <button><DeleteOutlineIcon />&nbsp;حذف طرح</button>*/}
                    {/*    </div>*/}
                    {/*    <div className="designContent">*/}
                    {/*        <div>*/}
                    {/*            <img src={swishert}/>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <p>*/}
                    {/*                <strong>توصیفات:</strong>*/}
                    {/*                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است اساسا مورد استفاده قرار گیرد.*/}
                    {/*            </p>*/}
                    {/*            <p>قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                    {/*                <input type="range"/>*/}
                    {/*            </p>*/}
                    {/*            <div className="designButtons">*/}
                    {/*                <button>اضافه به سبد خرید</button>*/}
                    {/*                <button>به فروش گذاشتن</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}

export default MyDesigns;