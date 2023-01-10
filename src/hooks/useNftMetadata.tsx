import React, { useState, useEffect } from 'react'
import useAlchemy from './useAlchemy'

const useNftMetadata = (contractAddress, nftId) => {
  const alchemy = useAlchemy()
  const [metadata, setMetadata] = useState(false)

  useEffect(() => {
    const loadNftMetadata = async() => {
      if (!contractAddress || !nftId) {
        return null
      }

      setMetadata(false)
      const metadata = await alchemy.nft.getNftMetadata(contractAddress, nftId)
      setMetadata(metadata)
    }

    loadNftMetadata()
  }, [contractAddress, nftId])

  if (!metadata) return false
  return metadata;
}

export default useNftMetadata
