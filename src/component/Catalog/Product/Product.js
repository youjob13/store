import React from "react";
import AboutMe from "./AboutMe";
import Characteristic from "./Characteristic";
import MainSectionProduct from "./MainSectionProduct";
import Social from "./Social";

const Product = () => {
  return (
    <div>
      <MainSectionProduct />
      <AboutMe />
      <Characteristic />
      <Social />
    </div>
  );
};

export default Product;
