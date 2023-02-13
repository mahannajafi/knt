import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import MiniNavbar from "./MiniNavbar";
import Navbar from "./Navbar";
import "./Learn.css";
import { Link } from "react-router-dom";
import Home from "../Pages/Home";
import Design from "../Pages/Design";
import axios from "axios";

const Learn = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://chuplon.iran.liara.run/api/v1/blank_product/type/")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <MiniNavbar />
      <div className="Learn__Container">
        <div className="Learn__Title">
          فیلم آموزش قرار دادن طرح بر روی محصول خام
        </div>
        <div className="Learn__dec">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </div>
        <button className="Learn__button">ورود به صفحه آموزش</button>
      </div>
      <div className="Learn__Go">
        <div className="Go__title">محصول خام مورد نظرتان را انتخاب کنید .</div>
        <div className="Go__container">
          {data.map((data) => {
            return (
              <Link className="Name" to='/ChooseSingleProduct' state={{ id: data.id }}>
                <div id={data.id} className="Go__item">
                  <img
                    src={data.image}
                    alt={data.alt_text}
                    className="Go__itemImg"
                  />
                  <div className="Go__itemTitle">{data.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Learn;
