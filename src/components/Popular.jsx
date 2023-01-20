import TitleCat from "../components/TitleCat";
import pic from '../assets/imgs/titlepic.png'
import Swiperer from "../components/Swiperer";
import './Papular.css'

const Popular = () => {
  return (
    <div className="Popular__container">
      <TitleCat name="تازه‌های پرفروش" pic={pic} />
      <Swiperer />
    </div>
  );
};

export default Popular;
