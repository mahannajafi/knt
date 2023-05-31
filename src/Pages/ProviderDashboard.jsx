import React from "react";
import ProviderHeader from "../components/ProviderHeader/ProviderHeader";
import Footer from "../components/Footer/Footer";
import ProviderDashboardMenu from "../components/ProviderDashboard/ProviderDashboardMenu";
import ProviderOrders from "../components/ProviderOrders/ProviderOrders";

function ProviderDashboard() {
    return (
        <>
            <ProviderHeader />
            <div className="myOrdersContainer">
                <ProviderDashboardMenu />
                <div className="orders">
                    <h3>سفارش های من</h3>
                    <div className="providerOrders">
                        <ProviderOrders />
                        <ProviderOrders />
                        <ProviderOrders />
                        <ProviderOrders />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProviderDashboard;