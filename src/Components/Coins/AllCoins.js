import React, { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../App";

const AllCoins = ({ coin, index }) => {
  const navigate = useNavigate();
  const addToCart = useContext(CartContext);

  return (
    <tr className="hover:cursor-pointer hover">
      <td>
        {index + 1}. {coin.id}
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
          className="tooltip tooltip-left  tooltip-secondary "
          data-tip="Details "
          onClick={() => navigate(`detail/${coin.id}`)}
        >
          <IoMdInformationCircleOutline size="25px" />
        </button>
      </td>
      <td>
        <button
          className="tooltip tooltip-left  tooltip-secondary"
          data-tip="Add To Cart "
          onClick={() => addToCart(coin)}
        >
          <BsCart4 size="25px" />
        </button>
      </td>
    </tr>
  );
};

export default AllCoins;
