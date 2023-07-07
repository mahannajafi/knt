import "./ShowProduct.css"
import image from "../../assets/imgs/swishert.png"

function ShowProduct() {
    return (
        <div className='showProducts'>
            <img className="productImage" src={image} alt="" />
            <p className="productDetails">نام محصول</p>
            <p className="productDetails">قیمت محصول</p>
        </div>
    )
}

export default ShowProduct;