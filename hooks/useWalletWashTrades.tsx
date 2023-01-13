// http://localhost:3000/api/getNftMetadata?address=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d

import { useEffect, useState } from "react";

const useWalletWashTrades = (address: string) => {
  const [loading, setLoading] = useState(true);
  const [walletWashTrades, setWalletWashTrades] = useState({});

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      let walletWashTrades = {};
      try {
        const nftData = await fetch(`/api/getNftsByWallet?address=${address}`);
        const json = await nftData.json();
        walletWashTrades = {
          data: json,
          success: true,
        };
      } catch (e) {
        walletWashTrades = {
          success: false,
          error: e,
        };
      }
      setWalletWashTrades(walletWashTrades);
      setLoading(false);
    };
    fetchData();
  }, [address]);

  return { walletWashTrades, loading };
};

export { useWalletWashTrades };
