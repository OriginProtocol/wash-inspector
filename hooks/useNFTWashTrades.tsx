// http://localhost:3000/api/inspectNft?address=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d&tokenId=117

import { useEffect, useState } from "react";
import { API_COLLECTIONS_URL } from "../lib/api";

const useNFTWashTrades = (address: string, tokenId: string) => {
  const [loading, setLoading] = useState(true);
  const [nftWashTrades, setNFTWashTrades] = useState({});

  useEffect(() => {
    setLoading(true);
    const fetchTransactions = async () => {
      let nftWashTrades = {};
      try {
        const nftData = await fetch(
          `/api/inspectNft?address=${address}&tokenId=${tokenId}`
        );
        const json = await nftData.json();
        nftWashTrades = {
          data: json,
          success: true,
        };
      } catch (e) {
        nftWashTrades = {
          success: false,
          error: e,
        };
      }
      setNFTWashTrades(nftWashTrades);
      setLoading(false);
    };
    fetchTransactions();
  }, [address, tokenId]);

  return { nftWashTrades, loading };
};

export { useNFTWashTrades };
