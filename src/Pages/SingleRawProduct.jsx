import Navbar from "../components/Navbar";
import MiniNavbar from "../components/MiniNavbar";
import RawProductShowCase from "../components/SingleRawProduct/RawProductShowCase";
import ProductSellerBox from "../components/SingleRawProduct/ProductSellerBox";
import Popular from "../components/Popular";
import Footer from "../components/Footer";

const SingleProduct = () => {
  return (
    <>
      <Navbar />
      <MiniNavbar />
      <RawProductShowCase />
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
