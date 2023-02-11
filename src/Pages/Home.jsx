
import MainBanner from "../components/MainBanner";
import Category from "../components/Category";
import MainCards from "../components/MainCards";
import Upgrade from "../components/Upgrade.jsx"
import Popular from "../components/Popular";
import Vlog from "../components/Vlog";
import Navbar from "../components/Navbar";
import MiniNavbar from "../components/MiniNavbar";
import Footer from "../components/Footer";



const Home = () => {
  return (
    <>
      <Navbar/>
      <MiniNavbar/>
      <MainBanner />
      <Category />
      <MainCards />
      <Popular/>
      <Upgrade/>
      <Popular/> 
      <Vlog/>   
      <Footer/>
    </>
  );
};

export default Home;
