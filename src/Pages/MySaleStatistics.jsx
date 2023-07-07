import Navbar from "../components/Navbar/Navbar";
import MiniNavbar from "../components/MiniNavbar/MiniNavbar";
import SaleStatisticsSection from "../components/SaleStatisticsSection/SaleStatisticsSection";
import Footer from "../components/Footer/Footer";

function MySaleStatistics() {
    return(
        <>
            <Navbar />
            <MiniNavbar />
            <SaleStatisticsSection totalSaleStatistics={1200} totalSale={1200} />
            <Footer />
        </>
    )
}

export default MySaleStatistics;