import "./OrdersSection.css"
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import Orders from "../Orders/Orders";

function OrdersSection() {
    return (
        <>
            <div className="myOrdersContainer">
                <DashboardMenu />
                <div className="orders">
                    <h3>سفارش های من</h3>
                    <Orders />
                    <Orders />
                </div>
            </div>
        </>
    )
}

export default OrdersSection;