import React from 'react'
import { Alchemy, Network } from 'alchemy-sdk';

const alchemy = () => {
  type Data = {
    name: string
  }

  const settings = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY,
    network: Network.ETH_MAINNET
  };

  const alchemy = new Alchemy(settings)

  return alchemy;
}

export default alchemy
