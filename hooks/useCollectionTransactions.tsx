import { useEffect, useState } from "react";
import { API_COLLECTIONS_URL } from "../lib/api";

const useCollectionTransactionData = (address: string) => {
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
          `${API_COLLECTIONS_URL}${address}?compat=true`
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
