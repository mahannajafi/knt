import "./DesignsSection.css"
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import MyDesignProduct from "../MyDesignProduct/MyDesignProduct";

function DesignsSection() {
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
                </div>
            </div>
        </>
    )
}

export default DesignsSection;