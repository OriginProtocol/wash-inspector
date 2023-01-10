import React, { useState, useEffect } from 'react'
import useAlchemy from './useAlchemy'

const useNftCollectionMetadata = (contractAddress) => {
  const alchemy = useAlchemy()
  const [metadata, setMetadata] = useState(false)

  useEffect(() => {
    const loadNftMetadata = async() => {
      if (!contractAddress) {
        return null
      }

      setMetadata(false)
      const metadata = await alchemy.nft
        .getContractMetadata(contractAddress)
      
      setMetadata(metadata)
    }

    loadNftMetadata()
  }, [contractAddress])

  if (!metadata) return false
  return metadata;
}

export default useNftCollectionMetadata
