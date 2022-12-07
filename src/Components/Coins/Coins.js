import React, { useState } from "react";
import useCoins from "../../Hooks/useCoins";
import AllCoins from "./AllCoins";
import Loading from "../Loading/Loading";

const Coins = () => {
  const [coins, search, setSearch] = useCoins();
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  };
  const [isLoading] = useState(false);
  if (isLoading) {
    return <Loading />;
  }
  console.log(coins);
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-start">
        <form onSubmit={handleSearch} className="my-12 mx-6">
          <input
            className="input-info p-2 input  rounded-md mr-2 "
            type="text"
            name="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
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
