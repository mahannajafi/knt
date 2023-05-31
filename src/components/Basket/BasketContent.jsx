import "./BasketContent.css"
import BasketProduct from "./BasketProduct";

function BasketContent() {
    return (
        <div className="basket">
            <h4 className="basketTitle">سبد خرید شما</h4>
            <BasketProduct />
            <BasketProduct />
            <BasketProduct />
            <BasketProduct />
        </div>
    )
}

export default BasketContent;