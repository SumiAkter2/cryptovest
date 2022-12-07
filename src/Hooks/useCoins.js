import { useEffect, useState } from "react";

const useCoins = () => {
  const [coins, setCoins, isLoading] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=falsees"
    )
      .then((res) => res.json())
      .then((data) => {
        const match = data.filter(
          (coin) =>
            coin.symbol.toLowerCase().includes(search.toLowerCase()) ||
            coin.name.toLowerCase().includes(search.toLowerCase())
        );
        // const match = data.filter(
        //   (coin) =>
        //     coin.name.toLowerCase().includes(search.toLowerCase()) ||
        //     coin.symbol.toLowerCase().includes(search.toLowerCase())
        // );
        setCoins(match);
      });
  }, [search]);
  return [coins, search, setSearch, isLoading];
};
export default useCoins;
