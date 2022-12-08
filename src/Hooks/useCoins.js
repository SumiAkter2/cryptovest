import { useQuery } from "react-query";

const useCoins = () => {
  const {
    data: coins,
    isLoading,
    refetch,
  } = useQuery("coins", () =>
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`
    ).then((res) => res.json())
  );
  return [coins, isLoading, refetch];
};

export default useCoins;
