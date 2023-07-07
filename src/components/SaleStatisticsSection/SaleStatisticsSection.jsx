import "./SaleStatisticsSection.css"
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import SaleStatistics from "../ SaleStatistics/SaleStatistics";
import switshert from "../../assets/imgs/swishert.png"

function DesignsSection({totalSaleStatistics , totalSale}) {
    return (
        <>
            <div className="mySaleStatisticsContainer">
                <DashboardMenu />
                <div className="mySaleStatistics">
                    <h3>آمار فروش</h3>
                    <div className="statistic">
                        <p>آمار کل فروش: {totalSaleStatistics}</p>
                        <p>میزان کل درآمد: {totalSale}</p>
                    </div>
                    <SaleStatistics productImage={switshert} providerName="شبنم" salesNumber={50} productPrice={1200} />
                    <SaleStatistics productImage={switshert} providerName="شبنم" salesNumber={50} productPrice={1200} />
                </div>
            </div>
        </>
    )
}

export default DesignsSection;