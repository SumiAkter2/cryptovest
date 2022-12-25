import React from "react";
import Coins from "../Coins/Coins";
import Testimonial from "../Testimonial/Testimonial";

import Banner from "./Banner";
import CurrencyConvert from "./CurrencyConvert";
import Info from "./Info";
import Success from "./Success/Success";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <CurrencyConvert />
      <Testimonial />
      <Success />

      <Coins />
    </div>
  );
};

export default Home;
