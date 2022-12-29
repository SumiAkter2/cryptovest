import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import "./Coin.css";
import CoinsCard from "./CoinsCard";

const Coin = () => {
  return (
    <div>
      <div className="lg:flex  justify-between coin-container bg-accent">
        <div>
          <h1 className="lg:text-5xl text-3xl text-primary font-bold px-12  pt-12 pb-6">
            WelCome To CryptoVest.
          </h1>
          <p className="text-primary font-bold px-12">
            Top cryptocurrency prices and charts, listed by market
            capitalization. Free access to current and historic data for Bitcoin
            and thousands of alt coins.
          </p>
          <button className="btn btn-primary btn-outline my-5 mx-12 duration-300 ease-in mb-6">
            <Link to="/">
              <p className="flex justify-center items-center ">
                <BsFillArrowLeftSquareFill className="mr-2 " /> Back to Home
              </p>
            </Link>
          </button>
        </div>
        <div>
          <img
            className="w-full hidden lg:block"
            src="https://i.ibb.co/hKsMzNm/bitcoin-crypto-currency-with-blockchain-technology-illustration-vector-removebg-preview-1.png"
            alt="coin-img"
          />
        </div>
      </div>
      <CoinsCard />
    </div>
  );
};

export default Coin;
