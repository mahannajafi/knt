import Navbar from "../components/Navbar/Navbar";
import MiniNavbar from "../components/MiniNavbar/MiniNavbar";
import RawProductShowCase from "../components/SingleRawProduct/RawProductShowCase";
import ProductSellerBox from "../components/SingleRawProduct/ProductSellerBox";
import Popular from "../components/Popular/Popular";
import Footer from "../components/Footer/Footer";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  let { state } = useLocation();

  return (
    <>
      {/* <div>{state.id}</div> */}
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
