import "./ProductShowCase.css";
import sweatshirt from "../../assets/imgs/swishert.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ProductShowCase = () => {
  const availableColors = [
    "green",
    "brown",
    "cyan",
    "red",
    "orange",
    "purple",
    "blue",
  ];
  const availableSizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
  const availableMaterial = "پنبه";

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="product-showcase">
      <div className="product-showcase__select-product-attributes">
        <div className="product-showcase__select-product-attributes__colors-container">
          <span>رنگ :</span>
          <div className="product-showcase__select-product-attributes__colors-container__colors">
            {availableColors.map((color, index) => {
              return (
                <button
                  key={index}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                  className={`product-showcase__select-product-attributes__colors-container__colors__color ${
                    color === selectedColor ? "color-btn-active" : ""
                  }`}
                >
                  {color === selectedColor ? (
                    <FontAwesomeIcon icon={faCheck} inverse />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className="product-showcase__select-product-attributes__size-container">
          <span>سایز :</span>
          <select
            value={selectedSize}
            onChange={(event) => setSelectedSize(event.target.value)}
            className="product-showcase__select-product-attributes__size-container__sizes"
          >
            {availableSizes.map((size, index) => (
              <option value={size} key={index}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="product-showcase__select-product-attributes__material-container">
          <span>جنس :</span>
          <span className="product-showcase__select-product-attributes__material-container__material">
            {availableMaterial}
          </span>
        </div>
      </div>

      <div className="product-showcase__image-container">
        <img
          src={sweatshirt}
          alt=""
          srcset=""
          className="product-showcase__image-container__image"
        />

        <div className="product-showcase__image-container__carousel">
          <img
            src={sweatshirt}
            alt=""
            srcset=""
            className="product-showcase__image-container__image__first"
          />
          <img
            src={sweatshirt}
            alt=""
            srcset=""
            className="product-showcase__image-container__image__second"
          />
          <img
            src={sweatshirt}
            alt=""
            srcset=""
            className="product-showcase__image-container__image__third"
          />
        </div>
      </div>

      <div className="product-showcase__description">
        <div className="product-showcase__description__header">
          <h3 className="product-showcase__description__header__title">
            نام محصول
          </h3>
          <div className="product-showcase__description__header__score">
            <span> ۳.۵ </span>
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>

        <div className="product-showcase__description__designer">
          <span>طراح :</span>
          <div className="product-showcase__description__designer__username">
            نام کاربری طراح
          </div>
        </div>
        <div className="product-showcase__description__manufacturer">
          <span>تولید کننده :</span>
          <div className="product-showcase__description__manufacturer__name">
            نام تولید کننده
          </div>
        </div>
        <div className="product-showcase__description__price">
          <span>قیمت :</span>
          <div className="product-showcase__description__designer__price__final-price">
            ۴۵۰۰۰ تومان
          </div>
        </div>

        <button className="product-showcase__description__add-to-cart-btn">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default ProductShowCase;
