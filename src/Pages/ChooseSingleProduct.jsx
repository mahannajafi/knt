import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/ChooseSingleProduct/ChooseSingleProduct.css";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import MiniNavbar from "../components/MiniNavbar/MiniNavbar";
import Footer from "../components/Footer/Footer";

const ChooseSingleProduct = () => {
  let { state } = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://chuplon.iran.liara.run/api/v1/blank_product/find_by_type/${state.id}`
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);
  return (
    <>
      <Navbar />
      <MiniNavbar />
      <div className="Choose__container">
        <div className="Choose__items">
          <div className="Choose__titles">
            ترتیب نمایش:
            <div className="Choose__titleI">ارزان ترین </div>
            <div className="Choose__titleI">گران ترین </div>
            <div className="Choose__titleI">جدیدترین </div>
          </div>
          <div className="Choose__Boxes">
            {data.map((data) => {
              return (
                <Link
                  className="Link"
                  to="/SingleRawProduct"
                  state={{ id: data.id }}
                >
                  <div className="Choose__Box">
                    <img
                      src={data.blank_product_images[0].image}
                      alt=""
                      className="Choose__Box-pic"
                    />
                    <div className="Choose__Box-title">{data.title}</div>
                    <div className="Choose__Box-price">
                      {data.get_avg_price.avg_price}
                      <div className="Choose__Box-price-thin">تومان</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="Choose__filter">
          <div className="Choose__title">فیلترها</div>
          <div className="Choose__item">کیف دستی</div>
          <div className="Choose__item">کوله پشتی</div>
          <div className="Choose__available">
            کالاهای موجود
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChooseSingleProduct;
