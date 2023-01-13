// http://localhost:3000/api/getHomepageNfts

import { useEffect, useState } from "react";
import { API_COLLECTIONS_URL } from "../lib/api";

const useHomepageNfts = () => {
  const [loading, setLoading] = useState(true);
  const [NFTsCollectionData, setNFTsCollectionData] = useState({});

  useEffect(() => {
    setLoading(true);
    const fetchTransactions = async () => {
      let NFTsCollectionData = {};
      try {
        const nftData = await fetch(
          `/api/getHomepageNfts`
        );
        const json = await nftData.json();
        NFTsCollectionData = {
          data: json,
          success: true,
        };
      } catch (e) {
        console.error("Error happened: ", e)
        NFTsCollectionData = {
          success: false,
          error: e,
        };
      }
      setNFTsCollectionData(NFTsCollectionData);
      setLoading(false);
    };
    fetchTransactions();
  }, []);

  return { "homepageNfts": NFTsCollectionData, loading };
};

export default useHomepageNfts;
