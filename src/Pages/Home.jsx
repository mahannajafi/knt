
import MainBanner from "../components/MainBanner";
import Category from "../components/Category";
import MainCards from "../components/MainCards";
import Upgrade from "../components/Upgrade.jsx"
import Popular from "../components/Popular";
import Vlog from "../components/Vlog";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <>

      <MainBanner />
      <Category />
      <MainCards />
      <Popular/>
      <Upgrade/>
      <Popular/> 
      <Vlog/>   
    </>
  );
};

export default Home;
