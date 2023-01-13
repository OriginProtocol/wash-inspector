// http://localhost:3000/api/getNftMetadata?address=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d

import { useEffect, useState } from "react";

const useCollectionWashTrades = (address: string) => {
  const [loading, setLoading] = useState(true);
  const [collectionWashTrades, setCollectionWashTrades] = useState({});

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      let collectionWashTrades = {};
      try {
        const nftData = await fetch(`/api/getNftMetadata?address=${address}`);
        const json = await nftData.json();
        collectionWashTrades = {
          data: json,
          success: true,
        };
      } catch (e) {
        collectionWashTrades = {
          success: false,
          error: e,
        };
      }
      setCollectionWashTrades(collectionWashTrades);
      setLoading(false);
    };
    fetchData();
  }, [address]);

  return { collectionWashTrades, loading };
};

export { useCollectionWashTrades };
