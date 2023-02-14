import "./Vlog.css";
import TitleCat from "../TitleCat/TitleCat";
import Vlog1 from "../../assets/imgs/Vlog1.png";
import Vlog2 from "../../assets/imgs/Vlog2.png";
import Vlog3 from "../../assets/imgs/Vlog3.png";
import Vlog4 from "../../assets/imgs/Vlog4.png";

const Vlog = () => {
  return (
    <div className="vlog__container">
      <TitleCat name="وبلاگ" />
      <div className="vlog__details">
        <div className="vlog__first">
          <img src={Vlog1} alt="vlog1" srcset="" />
          <div className="vlog__first-con">
            <div className="vlog__first-dec">
              افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
              خلاقی، و فرهنگ پیشرو در زبان فااز شامل حروفچینی دستاوردهای اصلی،
              و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
              قرار گیرد.
            </div>
            <button className="vlog__first-but">ادامه مطلب ...</button>
          </div>
        </div>
        <div className="vlog__con">
          <div className="vlog__second">
            <img src={Vlog2} alt="" srcset="" />
            <div className="vlog__second-title">لورم ایپسیوم</div>
            <div className="vlog__second-dec">
              افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
              خلاقی، و فرهنگ پیشرو در زبان فارسیر ار گیرد.
            </div>
          </div>
          <div className="vlog__second">
            <img src={Vlog2} alt="" srcset="" />
            <div className="vlog__second-title">لورم ایپسیوم</div>
            <div className="vlog__second-dec">
              افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
              د طراحی اساسا مورد استفاده
              قرار گیرد.
            </div>
          </div>
          <div className="vlog__second">
            <img src={Vlog2} alt="" srcset="" />
            <div className="vlog__second-title">لورم ایپسیوم</div>
            <div className="vlog__second-dec">
              افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
              خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vlog;
