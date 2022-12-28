import React, { useState } from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import { SiConvertio } from "react-icons/si";
import useCoins from "../../Hooks/useCoins";
import "./Convert.css";
const CurrencyConvert = () => {
  const [coins] = useCoins();
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = e.target.id.value;
    const from = e.target.from.value;
    const to = e.target.to.value;

    setTo(to);
    if (coins) {
      coins.length = 1;
    }
    const multiFunction = async (a, b) => a * b;
    // for usd and bitcoin
    if (coins && from === "Bit" && to === "USD") {
      coins.forEach(async (coin) => {
        amount = await multiFunction(amount, coin.current_price);
        setAmount(amount);
      });
    }
    // for euro and bitcoin
    if (coins && from === "Bit" && to === "EURO") {
      amount = amount * 15866.19;
      setAmount(amount);
    }

    console.log(amount, from, to);
  };

  return (
    <div>
      <div className="hero min-h-screen convert-container">
        <div className="mx-6 text-white ">
          <div className=" opacity-50 "></div>
          <div className="text-start convert-content">
            <h1 className="mb-12 text-2xl lg:text-5xl font-bold text-white">
              Cryptocurrency Calculator
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
                  className="input input-bordered input-info lg:w-full max-w-xs mt-2 bg-slate-300 text-info"
                />
              </div>
              <div className="font-bold text-xl ">
                <label className="lg:ml-2">From</label>
                <br />
                <select
                  name="from"
                  onBlur={(e) => e.target.value}
                  className="select bg-slate-300 text-info select-info lg:w-full max-w-xs mt-2 lg:ml-2"
                >
                  <option defaultValue="Bit">Bit</option>
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
                  className="select bg-slate-300 text-info select-info lg:w-full max-w-xs mt-2 lg:ml-2"
                >
                  <option defaultValue="USD">USD</option>
                  <option>EURO</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn  btn-info bg-slate-300  btn-outline my-3 duration-300 ease-in  mt-12 lg:ml-12 "
              >
                <SiConvertio className="mr-2" /> Convert
              </button>
            </form>
            <h1 className="text-3xl  mt-4">
              {amount ? amount : "0 "}
              <span className="text-xl "> {to} </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConvert;
