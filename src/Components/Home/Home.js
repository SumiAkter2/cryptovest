import React from "react";
import Coins from "../Coins/Coins";
import Testimonial from "../Testimonial/Testimonial";

import Banner from "./Banner";
import Info from "./Info";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Testimonial />
      <Coins />
    </div>
  );
};

export default Home;
