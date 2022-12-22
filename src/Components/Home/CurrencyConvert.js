import React, { useState } from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import { SiConvertio } from "react-icons/si";
import useCoins from "../../Hooks/useCoins";

const CurrencyConvert = () => {
  const [coins] = useCoins();
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = e.target.id.value;
    const from = e.target.from.value;
    const to = e.target.to.value;
    console.log(coins.current_price);
    coins.forEach((c) => {
      console.log(c.current_price);
      if (amount) {
        amount = amount * parseInt(c.current_price);
        return setAmount(amount);
      }
    });

    console.log(amount, from, to);
  };

  return (
    <div>
      <div
        className="hero min-h-screen opacity-75 "
        style={{
          backgroundImage: `url("https://i.ibb.co/pd9XtqF/bitcoin-cryptocurrency-gty-jt-220628-1656447281911-hp-Main-16x9-1600.jpg")`,
        }}
      >
        <div className="mx-6  text-white">
          <div className="">
            <h1 className="mb-12 text-5xl font-bold text-info">
              Cryptocurrency Calculator For Any Kind Of Currency
            </h1>
            <p className="my-8 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              pariatur recusandae numquam nisi quis iure accusamus, laborum
              dicta voluptatem distinctio porro quam saepe sint ipsam ad id
              quibusdam voluptate qui!
            </p>
            <form onSubmit={handleSubmit} className="lg:flex items-center my-6">
              <div className="font-bold text-xl">
                <label>Amount</label>
                <br />
                <input
                  name="id"
                  onBlur={(e) => e.target.value}
                  type="text"
                  placeholder="1"
                  className="input input-bordered input-info w-full max-w-xs mt-2 text-black"
                />
              </div>
              <div className="font-bold text-xl ">
                <label className="lg:ml-2">From</label>
                <br />
                <select
                  name="from"
                  onBlur={(e) => e.target.value}
                  className="select text-black select-info w-full max-w-xs mt-2 lg:ml-2"
                >
                  <option selected>Bit</option>
                  <option>Ethereum</option>
                  <option>Tether</option>
                  <option>binancecoin</option>
                </select>
              </div>
              <div>
                <BsArrowLeftRight size="25px" className="lg:mt-12 mt-6 mx-12" />
              </div>
              <div className="font-bold text-xl ">
                <label className="lg:ml-2">To</label>
                <br />
                <select
                  name="to"
                  onBlur={(e) => e.target.value}
                  className="select text-black select-info w-full max-w-xs mt-2 lg:ml-2"
                >
                  <option selected>USA</option>
                  <option>EURO</option>
                  <option>Italian</option>
                </select>
              </div>
              <button type="submit" className="btn  text-white mt-8 lg:ml-12 ">
                <SiConvertio className="mr-2" /> Convert
              </button>
            </form>
            <p> ffff {amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConvert;
