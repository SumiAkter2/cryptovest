import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowDownShort } from "react-icons/bs";
import { BsArrowUpShort } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import Loading from "../Loading/Loading";
const DetailCoin = () => {
  const [isLoading] = useState(false);
  const { id } = useParams();
  const [coin, setCoin] = useState({});

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCoin(data);
      });
  }, [coin, id]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className=" bg-success">
      <div className="text-left px-4 lg:px-20 my-5 lg:my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-5">
          <div>
            <p>
              <small className="bg-info px-3 py-1 rounded-md text-white">
                Rank #{coin.market_cap_rank}
              </small>
            </p>
            <div className="flex gap-2 my-3">
              <img src={coin.image?.thumb} alt="" style={{ width: "40px" }} />
              <p className="text-xl font-semibold">
                {coin.name} (<span className="uppercase">{coin.symbol}</span>)
              </p>
              <p
                className={`flex justify-center items-center ${
                  coin.market_data?.price_change_percentage_24h >= 0
                    ? "text-green-600"
                    : "text-red-700"
                } font-semibold`}
              >
                {coin.market_data?.price_change_percentage_24h >= 0 ? (
                  <BsArrowUpShort className="h-5 w-5 text-green-500" />
                ) : (
                  <BsArrowDownShort className="h-5 w-5 text-red-500" />
                )}
                {coin.market_data?.price_change_percentage_24h?.toFixed(2)}%
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-4xl font-semibold">
                ${coin.market_data?.current_price?.usd?.toLocaleString("en-US")}
              </p>
            </div>
            <div className="flex gap-3 my-1 opacity-90">
              <p>
                <small>
                  24h High: $
                  {coin.market_data?.high_24h?.usd?.toLocaleString("en-US")}
                </small>
              </p>
              <p>
                <small>
                  24h Low: $
                  {coin.market_data?.low_24h?.usd?.toLocaleString("en-US")}
                </small>
              </p>
            </div>
            <div className="flex items-end gap-3">
              <button className="btn btn-info btn-outline my-3 duration-300 ease-in ">
                <FaShoppingCart className="mr-2" /> Add to cart
              </button>
              <button className="btn btn-info btn-outline my-3 duration-300 ease-in ">
                <Link to="/coin">
                  <p className="flex justify-center items-center ">
                    <BsFillArrowLeftSquareFill className="mr-2" /> Back to Coin
                    list
                  </p>
                </Link>
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-xl text-info font-bold opacity-90">
              EXTRA INFORMATION
            </h2>
            <div className="grid grid-cols-2 gap-5 opacity-90">
              <div>
                <div className="lg:flex justify-between py-3 border-b">
                  <p>Market Cap </p>
                  <p className="font-medium">
                    $
                    {coin.market_data?.market_cap?.usd?.toLocaleString("en-US")}
                  </p>
                </div>
                <div className="lg:flex justify-between py-3 border-b">
                  <p>24h Trading Vol </p>
                  <p className="font-medium">
                    $
                    {coin.market_data?.total_volume?.usd?.toLocaleString(
                      "en-US"
                    )}
                  </p>
                </div>
                <div className="lg:flex justify-between py-3 border-b">
                  <p>F.D.V</p>
                  <p className="font-medium">
                    $
                    {(coin.market_data?.fully_diluted_valuation?.usd
                      ? coin.market_data?.fully_diluted_valuation?.usd
                      : "Not found"
                    )?.toLocaleString("en-US")}
                  </p>
                </div>
              </div>
              <div>
                <div className="lg:flex justify-between py-3 border-b">
                  <p>Circulating Supply</p>
                  <p className="font-medium">
                    {(coin.market_data?.circulating_supply
                      ? coin.market_data?.circulating_supply
                      : "Not found"
                    )?.toLocaleString("en-US")}
                  </p>
                </div>
                <div className="lg:flex justify-between py-3 border-b">
                  <p>Total Supply</p>
                  <p className="font-medium">
                    {(coin.market_data?.total_supply
                      ? coin.market_data?.total_supply
                      : "Not found"
                    )?.toLocaleString("en-US")}
                  </p>
                </div>
                <div className="lg:flex justify-between py-3 border-b">
                  <p>Max Supply</p>
                  <p className="font-medium">
                    {(coin.market_data?.max_supply
                      ? coin.market_data?.max_supply
                      : "Not found"
                    )?.toLocaleString("en-US")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-xl font-bold my-2">What is {coin.name}?</h1>
          <p className="lg:text-justify opacity-90 font-light">
            {coin.description?.en?.slice(0, 500)}.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailCoin;
