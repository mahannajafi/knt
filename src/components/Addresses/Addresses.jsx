import "./Addresses.css"
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import Address from "./Address";

function Addresses() {
    return (
        <>
            <div className="myAddressesContainer">
                <DashboardMenu />
                <div className="Addresses">
                    <h3>ادرس های من</h3>
                    <Address />
                    <Address />
                    <div className="addAddress"><button>+</button></div>
                </div>
            </div>
        </>
    )
}

export default Addresses;