import "./ProductSellerBox.css";
import { Link } from "react-router-dom";

const ProductSellerBox = ({
  providerName,
  productDetails,
  address,
  prepTime,
  price,
  productID,
  providerID,
}) => {
  const productColors = [];
  productDetails.forEach((product) => {
    let color = product.color.code.toLowerCase();
    if (!productColors.includes(color)) {
      productColors.push(color);
    }
  });

  const productSizes = [];
  productDetails.forEach((product) => {
    let size = product.size.unit.toUpperCase();
    if (!productSizes.includes(size)) {
      productSizes.push(size);
    }
  });

  return (
    <>
      <div className="product-seller-box">
        <h3 className="product-seller-box__title">{providerName}</h3>
        <div className="product-info">
          <div className="product-info-box product-seller-box__available-colors">
            رنگ های موجود
            <br />
            {productColors &&
              productColors.map((colorCode) => (
                <div
                  className="color"
                  style={{ backgroundColor: colorCode }}
                ></div>
              ))}
          </div>
          <div className="product-info-box product-seller-box__available-sizes">
            سایز های موجود
            <br />
            {productSizes &&
              productSizes.map((size) => <span class="size">{size}</span>)}
          </div>
          <div className="product-info-box product-seller-box__address">
            آدرس
            <br />
            <div className="addressBox">{address}</div>
          </div>
          <div className="product-info-box product-seller-box__delivery-time">
            زمان آماده سازی
            <br />
            <div className="delivery-time">{prepTime}</div>
          </div>
          <div className="product-info-box product-seller-box__price">
            قیمت:
            <span className="price">{price} تومان</span>
            <button className="design-this-product-btn">
              <Link
                className="design-this-product-btn__link"
                to="/Design"
                state={{ productID: productID, providerID: providerID, productColors: productColors }}
              >
                طراحی این محصول
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSellerBox;
