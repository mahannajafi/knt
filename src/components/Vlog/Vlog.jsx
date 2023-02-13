import "./Vlog.css";
import TitleCat from "../TitleCat/TitleCat";

const Vlog = () => {
  return (
    <div className="vlog__container">
      <TitleCat name="وبلاگ" />
      <div className="vlog__details">
        <div className="vlog__first"></div>
        <div className="vlog__con">
          <div className="vlog__second"></div>
          <div className="vlog__second"></div>
          <div className="vlog__second"></div>
        </div>
      </div>
    </div>
  );
};

export default Vlog;
