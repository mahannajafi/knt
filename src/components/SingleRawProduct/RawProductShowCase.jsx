import "./RawProductShowCase.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

const RawProductShowCase = ({ title, images, features, rate }) => {
  const [mainImageURL, setMainImageURL] = useState();

  useEffect(() => {
    if (images) setMainImageURL(images[0].image);
  }, [images]);

  return (
    <>
      <div className="showcase">
        <div className="showcase__image-selection">
          {images &&
            images.map((imageObject) => (
              <img
                src={imageObject.image}
                alt="تصویر"
                onClick={(event) => setMainImageURL(event.target.src)}
              />
            ))}
        </div>

        <div className="showcase__image-box">
          {images && mainImageURL && (
            <img
              src={mainImageURL}
              alt="تصویر"
              className="showcase__image-box__image"
            />
          )}
        </div>

        <div className="showcase__product-description">
          <div className="showcase__product-description__title-container">
            <h3>{title}</h3>
            <span className="rate">
              {rate}&nbsp;
              <FontAwesomeIcon icon={faStar} />
            </span>
          </div>

          <div className="showcase__product-description__attributes-container">
            <h4>ویژگی های محصول</h4>
            <ul className="product-attributes-container">
              {features &&
                features.map((featureObject) => (
                  <li>
                    {featureObject.blank_prop.name} : {featureObject.value}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RawProductShowCase;
