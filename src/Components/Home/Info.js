import React from "react";
import img from "../../img/businessman3.jpg";
const Info = () => {
  return (
    <div className="hero min-h-screen bg-base-200 px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/JsQycZS/118713154-gettyimages-897291236.jpg"
          className="lg:w-2/5  rounded-lg shadow-2xl"
          alt="img"
        />
        <div className="text-left">
          <h1 className="text-5xl font-bold text-pink-400">
            What is cryptocurrency?
          </h1>
          <div className="divider w-8/12"></div>
          <p className="py-4">
            A cryptocurrency is a digital currency, which is an alternative form
            of payment created using encryption algorithms. The use of
            encryption technologies means that cryptocurrencies function both as
            a currency and as a virtual accounting system.
          </p>
          <button className="btn text-xl mt-12">Read more</button>

          
        </div>
      </div>
    </div>
  );
};

export default Info;
