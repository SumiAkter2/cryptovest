import React from "react";
import Teams from "../About/Teams";
import Coins from "../Coins/Coins";
import Subscribe from "../Subscribe/Subscribe";
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
      {/* <CurrencyConvert /> */}
      <Coins />
      <Success />
      <Teams />
      <Testimonial />
      <Subscribe />
    </div>
  );
};

export default Home;
