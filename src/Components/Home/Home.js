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

      <CurrencyConvert />
      <Info />
      <Success />
      <Testimonial />
      <Coins />
    </div>
  );
};

export default Home;
