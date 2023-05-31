import Navbar from "../components/Navbar/Navbar";
import MiniNavbar from "../components/MiniNavbar/MiniNavbar";
import SelectAddress from "../components/ChooseAddress/SelectAddress";
import Footer from "../components/Footer/Footer";

function ChooseAddress() {
    return (
        <>
            <Navbar />
            <MiniNavbar />
            <SelectAddress />
            <Footer />
        </>
    )
}

export default ChooseAddress;