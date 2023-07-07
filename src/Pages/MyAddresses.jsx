import Navbar from "../components/Navbar/Navbar";
import MiniNavbar from "../components/MiniNavbar/MiniNavbar";
import Addresses from "../components/Addresses/Addresses";
import Footer from "../components/Footer/Footer";

function MyAddresses() {
    return(
        <>
            <Navbar />
            <MiniNavbar />
            <Addresses />
            <Footer />
        </>
    )
}

export default MyAddresses;