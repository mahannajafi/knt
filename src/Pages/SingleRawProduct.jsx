import Navbar from "../components/Navbar/Navbar";
import MiniNavbar from "../components/MiniNavbar/MiniNavbar";
import RawProductShowCase from "../components/SingleRawProduct/RawProductShowCase";
import ProductSellerBox from "../components/SingleRawProduct/ProductSellerBox";
import Popular from "../components/Popular/Popular";
import Footer from "../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SingleProduct = () => {
  let { state } = useLocation();
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.all([
  //       axios.get(
  //         `https://chuplon.iran.liara.run/api/v1/blank_product/${state.id}/`
  //       ),
  //       axios.get(
  //         `https://chuplon.iran.liara.run/api/v1/blank_product/product_provider/find_by_blank_product/${state.id}`
  //       ),
  //     ]);
  //     setData1(response[0].data);
  //     setData2(response[1].data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <Navbar />
      <MiniNavbar />
      <RawProductShowCase
        title={data1.title}
        features={data1.blank_prop_values}
        images={data1.blank_product_images}
        rate="0"
      />
      {data2.map((provider) => (
        <ProductSellerBox
          providerName={provider.provider.name}
          productDetails={provider.ppd}
          address={provider.provider.print_provider_address.state.name}
          prepTime={provider.prep_time}
          price={provider.price}
          productID={provider.blank_product}
          providerID={provider.provider.id}
        />
      ))}
      <Popular />
      <Footer />
    </>
  );
};

export default SingleProduct;
