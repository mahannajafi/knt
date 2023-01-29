import Navbar from "../components/Navbar";
import MiniNavbar from "../components/MiniNavbar";
import ProductShowCase from "../components/Product/ProductShowCase";
import ProductSellerBox from "../components/Product/ProductSellerBox";
import Popular from "../components/Popular";
import Footer from "../components/Footer";

const SingleProduct = () => {
  return (
    <>
      <Navbar />
      <MiniNavbar />
      <ProductShowCase />
      <ProductSellerBox />
      <ProductSellerBox />
      <ProductSellerBox />
      <ProductSellerBox />
      <Popular />
      <Footer />
    </>
  );
};

export default SingleProduct;
