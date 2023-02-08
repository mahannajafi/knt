import Navbar from "../components/Navbar";
import MiniNavbar from "../components/MiniNavbar";
import SingleProductShowCase from "../components/SingleProduct/ProductShowCase";
import MainCards from "../components/MainCards";
import DesignerExplanation from "../components/SingleProduct/DesignerExplanation";
import ProductFeatures from "../components/SingleProduct/ProductFeatures";
import Popular from "../components/Popular";
import UserComments from "../components/SingleProduct/UserComments";
import Footer from "../components/Footer";

const SingleProduct = () => {
  return (
    <>
      <Navbar />
      <MiniNavbar />
      <SingleProductShowCase />
      <MainCards />
      <DesignerExplanation />
      <ProductFeatures />
      <Popular />
      <UserComments />
      <Footer />
    </>
  );
};

export default SingleProduct;
