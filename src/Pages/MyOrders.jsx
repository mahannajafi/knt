import Navbar from "../components/Navbar/Navbar";
import MiniNavbar from "../components/MiniNavbar/MiniNavbar";
import OrdersSection from "../components/OrdersSection/OrdersSection";
import Footer from "../components/Footer/Footer";

function MyOrders() {
    return(
        <>
            <Navbar />
            <MiniNavbar />
            <OrdersSection />
            <Footer />
        </>
    )
}

export default MyOrders;