import "./ShowCase.css";
import React, { useState, useEffect } from "react";

const ShowCase = ({ images, sampleImage }) => {
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

        <div className="showcase__limits-description">
          <h1 className="showcase__limits-description__title">محدودیت ها</h1>
          <p className="showcase__limits-description__text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد.
          </p>
          <button className="showcase__limits-description__btn">
            <a className="showcase__limits-description__btn__link" href={sampleImage} download>دانلود طرح خام</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowCase;
