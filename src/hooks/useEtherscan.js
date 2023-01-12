import React from 'react'
import etherscanApi from 'etherscan-api';

const useEtherscan = () => {

  const api = etherscanApi.init(process.env.NEXT_PUBLIC_ETHERSCAN_KEY)

  return api;
}

export default useEtherscan
