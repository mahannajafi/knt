import "./DesignInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DesignInfo = ({ productID, providerID, availableProductColors }) => {
  let { state } = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productColors, setProductColors] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [designFile, setDesignFile] = useState(null);
  const [designedProductFile, setDesignedProductFile] = useState(null);

  const handleProductColorSelection = (event, color) => {
    event.preventDefault();

    if (!productColors.includes(color)) {
      setProductColors([...productColors, color]);
    } else {
      setProductColors(
        productColors.filter((productColor) => productColor !== color)
      );
    }
  };

  const JSON = {
    name: productName,
    description: productDescription,
    blank_product: productID,
    provider: providerID,
    design_img: designFile,
    sample_img: designedProductFile,
    price: finalPrice,
    colors: productColors,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`https://chuplon.iran.liara.run/api/v1/product/`, JSON, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `jwt ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        navigate("/home");
      })
      .catch((error) => {
        navigate("/home");
      });
  };

  return (
    <div className="design-info">
      <h3 className="design-info__header">
        تکمیل اطلاعات محصول و بارگذاری طرح و محصول طراحی شده
      </h3>

      <form className="design-info__form">
        <div className="design-info__form__product-info">
          <h4 className="design-info__form__product-info__title">
            اطلاعات محصول
          </h4>

          <div className="design-info__form__row">
            <label className="design-info__form__label">
              نام&nbsp;محصول&nbsp;:
              <input
                type="text"
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
                className="design-info__form__label__input product-name-input"
              />
            </label>

            <div className="design-info__form__vertical-line"></div>

            <label className="design-info__form__label">
              توضیحات&nbsp;:
              <textarea
                value={productDescription}
                onChange={(event) => setProductDescription(event.target.value)}
                className="design-info__form__label__input"
              />
            </label>
          </div>
        </div>

        <hr className="design-info__form__horizontal-line" />

        <div className="design-info__form__row">
          <label className="design-info__form__label">
            رنگ&nbsp;ها&nbsp;:
            <div className="design-info__form__colors-container">
              {availableProductColors.map((color, index) => {
                return (
                  <button
                    key={index}
                    style={{ backgroundColor: color }}
                    onClick={(event) =>
                      handleProductColorSelection(event, color)
                    }
                    className={`design-info__form__colors-container__color 
                  ${productColors.includes(color) ? "color-btn-active" : ""}`}
                  >
                    {productColors.includes(color) ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        inverse
                        className="check-icon"
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </label>

          <div className="design-info__form__vertical-line"></div>

          <label className="design-info__form__label">
            قیمت&nbsp;نهایی&nbsp;:
            <input
              type="range"
              value={finalPrice}
              min="0"
              max="50000"
              step="500"
              dir="ltr"
              onChange={(event) => setFinalPrice(event.target.value)}
              className="design-info__form__label__input final-price-input"
            />
            <div>{finalPrice}</div>
          </label>
        </div>

        <div className="design-info__form__upload-files">
          <h4 className="design-info__form__upload-files__title">بارگذاری</h4>

          <div className="design-info__form__row">
            <label className="design-info__form__label">
              طرح&nbsp;:
              <input
                type="file"
                onChange={(event) => {
                  const formData = new FormData();
                  formData.append("image", event.target.files[0]);
                  event.preventDefault();
                  setDesignFile(formData);
                }}
                className="design-info__form__label__input custom-file-input"
              />
            </label>

            <label className="design-info__form__label">
              محصول&nbsp;طراحی&nbsp;شده&nbsp;:
              <input
                type="file"
                onChange={(event) => {
                  const formData = new FormData();
                  formData.append("image", event.target.files[0]);
                  event.preventDefault();
                  setDesignedProductFile(formData);
                }}
                className="design-info__form__label__input custom-file-input"
              />
            </label>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="design-info__form__submit-btn"
          >
            ثبت نهایی
          </button>
        </div>
      </form>
    </div>
  );
};

export default DesignInfo;
