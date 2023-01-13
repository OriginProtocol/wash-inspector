import React, { useState, useEffect } from 'react'
import useAlchemy from './useAlchemy'

const useNftCollection = (contractAddress) => {
  const alchemy = useAlchemy()
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const loadNfts = async() => {
      if (!contractAddress) {
        return
      }
      const nfts = []
      setLoading(true)

      try {
        const nftsIterable = alchemy.nft.getNftsForContractIterator(contractAddress);
        
        // Iterate over the NFTs and add them to the nfts array.
        for await (const nft of nftsIterable) {
          nfts.push(nft);
        }

        // Log the NFTs.
        console.log(nfts);
      } catch (error) {
        console.log(error);
      }

      setLoading(false)
    }

    loadNfts()
  }, contractAddress)

  return {
  }
}

export default useNftCollection
