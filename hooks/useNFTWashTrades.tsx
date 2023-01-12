// http://localhost:3000/api/inspectNft?address=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d&tokenId=117

import { useEffect, useState } from "react";
import { API_COLLECTIONS_URL } from "../lib/api";

const useCollectionTransactionData = (address: string, tokenId: string) => {
  const [loading, setLoading] = useState(true);
  const [collectionTransactionData, setCollectionTransactionData] = useState(
    {}
  );

  useEffect(() => {
    setLoading(true);
    const fetchTransactions = async () => {
      let collectionTransactionData = {};
      try {
        const contractStats = await fetch(
          `api/inspectNft?address=${address}&tokenId=${tokenId}}`
        );
        const contractStatsJson = await contractStats.json();
        console.log(contractStatsJson);
        collectionTransactionData = {
          ...collectionTransactionData,
          contractStats: contractStatsJson?.stats,
        };
      } catch (e) {
        collectionTransactionData = {
          success: false,
          error: e,
        };
      }
      setCollectionTransactionData(collectionTransactionData);
      setLoading(false);
    };
    fetchTransactions();
  }, [address]);

  return { collectionTransactionData, loading };
};

export { useCollectionTransactionData };
