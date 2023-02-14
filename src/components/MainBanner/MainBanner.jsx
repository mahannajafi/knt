import React from "react";
import "./MainBanner.css";

function MainBanner() {
  return (
    <div className="mainBanner">
      <div className="mainBanner__right">
        <div className="mainBanner__title">دنبال کسب درآمد هستی ؟</div>
        <div className="mainBanner__dec">
          محصول خود را طراحی کنید و به آسانی
        </div>
        <div className="mainBanner__dec"> به فروش بگذارید.</div>
        <div className="mainBanner__buttons">
          <button className="mainBanner__design">اطلاعات بیشتر</button>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
