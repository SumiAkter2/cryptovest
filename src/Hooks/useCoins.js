import { useEffect, useState } from "react"

const useCoins = () => {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
        )
            .then(res => res.json())
            .then(data => setCoins(data))
        
    }, []);
    return [coins];
}
export default useCoins;