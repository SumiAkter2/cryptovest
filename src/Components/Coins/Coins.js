import React, { useEffect, useState } from "react";
import useCoins from "../../Hooks/useCoins";
import AllCoins from "./AllCoins";
import Loading from "../Loading/Loading";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  if (coins) {
    coins.length = 6;
  }
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        const search = data.filter(
          (coin) =>
            coin.name.toLowerCase().includes(searchedText.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchedText.toLowerCase())
        );
        setCoins(search);
      });
  }, [searchedText]);
  // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchedText(e.target.value);
    console.log(searchedText);
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="text-center text-5xl mt-12  text-neutral ">
        {" "}
        Digital Coins
      </h1>
      <div className="text-center text-neutral text-2xl ">...</div>
      <div className="flex justify-start">
        <form onSubmit={handleSearch} className="my-12 mx-6">
          <input
            className="input-info p-2 input  rounded-md mr-2 "
            type="text"
            name="text"
            placeholder="Search"
            onChange={(e) => setSearchedText(e.target.value)}
          />
          <button className="btn btn-info  " type="submit">
            Enter
          </button>
        </form>
      </div>
      {coins && (
        <table className="table table-zebra w-full mx-2">
          <thead>
            <tr>
              <th className="text-sm text-info ">Name</th>
              <th className="text-sm text-info">Symbol</th>
              <th className="text-sm text-info">Price ($) </th>
              <th className="text-sm text-info">MARKET CAP</th>
              <th className="text-sm text-info"> 24H CHANGE </th>
              <th className="text-sm text-info">24H VOLUME</th>
              <th className="text-sm text-info">Details</th>
              <th className="text-sm text-info">Action</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <AllCoins coin={coin} key={coin.id} index={index} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Coins;
