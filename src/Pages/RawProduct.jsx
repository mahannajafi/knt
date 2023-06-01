import Navbar from "../components/Navbar/Navbar";
import MiniNavbar from "../components/MiniNavbar/MiniNavbar";
import Footer from "../components/Footer/Footer";
import RawProductFilter from "../components/RawProductFilter/RawProductFilter";
import ShowProduct from "../components/ShowProduct/ShowProduct";
import Filter from "../components/RawProductFilter/Filter";

function RawProduct() {
    return (
        <>
            <Navbar />
            <MiniNavbar />
            <div className='rawProductContainer'>
                <Filter />
                <div className='rawProduct'>
                    <RawProductFilter />
                    <div className="showProductsContainer">
                        <ShowProduct />
                        <ShowProduct />
                        <ShowProduct />
                        <ShowProduct />
                        <ShowProduct />
                        <ShowProduct />
                        <ShowProduct />
                        <ShowProduct />
                        <ShowProduct />
                        <ShowProduct />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default RawProduct;