import Navbar from "../components/Navbar/Navbar";
import MiniNavbar from "../components/MiniNavbar/MiniNavbar";
import BasketContent from "../components/Basket/BasketContent";
import Footer from "../components/Footer/Footer";
import BasketDetails from "../components/Basket/BasketDetails";

function Basket() {
    return (
        <>
            <Navbar />
            <MiniNavbar />
            <div className="basketContainer">
                <BasketContent />
                <BasketDetails />
            </div>
            <Footer />
        </>
    )
}

export default Basket;