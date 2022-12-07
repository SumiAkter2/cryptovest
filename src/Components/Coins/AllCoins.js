import React from "react";
import { BsCart4 } from "react-icons/bs";
import { BsInfoCircleFill } from "react-icons/bs";
const AllCoins = ({ coin, index }) => {
  return (
    <tr>
      <td>
        {index + 1}. {coin.name}
      </td>
      <td className="flex font-bold">
        <img
          className="pr-2"
          style={{ width: "40px" }}
          src={coin.image}
          alt="coin-img"
        />
        {coin.symbol}
      </td>
      <td>$ {coin.current_price}</td>
      <td>$ {coin.market_cap}</td>

      <td className="text-error">$ {coin.price_change_percentage_24h}</td>

      <td>$ {coin.total_volume}</td>
      <td>
        <button
          className="tooltip tooltip-left  tooltip-secondary bg-secondary"
          data-tip="Add To Cart "
        >
          <BsInfoCircleFill  size="25px" />
        </button>
        <button
          className="tooltip tooltip-left  tooltip-secondary"
          data-tip="Add To Cart "
        >
          <BsCart4 size="25px" />
        </button>
      </td>
    </tr>
  );
};

export default AllCoins;
