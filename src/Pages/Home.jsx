import MainBanner from "../components/MainBanner/MainBanner";
import Category from "../components/Category/Category";
import MainCards from "../components/MainCards/MainCards";
import Upgrade from "../components/Upgrade/Upgrade.jsx";
import Popular from "../components/Popular/Popular";
import Vlog from "../components/Vlog/Vlog";
import Navbar from "../components/Navbar/Navbar";
import MiniNavbar from "../components/MiniNavbar/MiniNavbar";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <MiniNavbar />
      <MainBanner />
      <Category />
      <MainCards />
      <Popular />
      <Upgrade />
      <Popular />
      <Vlog />
      <Footer />
    </>
  );
};

export default Home;
