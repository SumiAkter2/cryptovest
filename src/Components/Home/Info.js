import React from "react";

const Info = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-4 lg:px-6 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/JsQycZS/118713154-gettyimages-897291236.jpg"
          className="lg:w-2/5 h-96 rounded-lg shadow-2xl"
          alt="img"
        />
        <div className="text-left">
          <h1 className="lg:text-5xl text-3xl px-2 font-semibold text-info">
            What is cryptocurrency ?
          </h1>
          <div className="divider w-8/12"></div>
          <p className="py-4">
            A cryptocurrency is a digital currency, which is an alternative form
            of payment created using encryption algorithms. The use of
            encryption technologies means that cryptocurrencies function both as
            a currency and as a virtual accounting system.
          </p>
          <button className="btn btn-info btn-outline my-3 duration-300 ease-in mt-12 ">
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Cryptocurrency"
            >
              Read more ...
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
