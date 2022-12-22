import React from "react";
import Coins from "../Coins/Coins";
import Testimonial from "../Testimonial/Testimonial";

import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Testimonial />
      <Coins />
    </div>
  );
};

export default Home;
