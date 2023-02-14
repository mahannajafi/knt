import Navbar from "../components/Navbar/Navbar";
import MiniNavbar from "../components/MiniNavbar/MiniNavbar";
import ShowCase from "../components/Design/ShowCase";
import DesignInfo from "../components/Design/DesignInfo";
import Footer from "../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Design = () => {
  let { state } = useLocation();
  const [data, setData] = useState([]);
  const [image, setImage] = useState();

  useEffect(() => {
    axios
      .get(
        `https://chuplon.iran.liara.run/api/v1/blank_product/${state.productID}/`
      )
      .then((response) => {
        setData(response.data);
        setImage(response.data.blank_product_sample_images[0].sample_file);
      });
  }, []);

  return (
    <>
      <Navbar />
      <MiniNavbar />
      <ShowCase images={data.blank_product_images} sampleImage={image} />
      <DesignInfo
        productID={state.productID}
        providerID={state.providerID}
        availableProductColors={state.productColors}
      />
      <Footer />
    </>
  );
};

export default Design;
