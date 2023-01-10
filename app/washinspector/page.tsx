"use client"

import { Fragment, useState, useEffect } from 'react'
import GlobalStore from '../../src/stores/GlobalStore'
import useNftCollectionMetadata from '../../src/hooks/useNftCollectionMetadata'
import useNftMetadata from '../../src/hooks/useNftMetadata'
import Link from 'next/link'
import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [contract, setContract] = useState(false)
  const [nftId, setNftId] = useState(false)

  // workaround for: https://github.com/vercel/next.js/issues/43585
  useEffect(() => {
    if (window) {
      const queryVars = window.location.search.substring(1).split('&')
      queryVars.forEach(pair => {
        const [variable, value] = pair.split('=')
        if (variable === 'address')
          setContract(value)
        else if (variable === 'nftId')
          setNftId(value)
      })
    }
  },[window.location.search])

  const nftCollectionMetadata = useNftCollectionMetadata(contract)
  const nftMetadata = useNftMetadata(contract, nftId)

  console.log("nftMetadata", nftMetadata, contract, nftId)
  return (
    <>
      <div className="border-b border-gray-200 py-5 -mx-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center px-4 sm:px-6 justify-between sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Wash inspector</h3>
          </div>
        </div>
      </div>
      {nftMetadata && <div className="flex mt-6">
        <Image 
          src={nftMetadata.media[0].thumbnail}
          alt="Main NFT image"
          width={400}
          height={400}
        />
        <div className="flex ml-6 flex-col">
          <h1 className="text-3xl">{`${nftMetadata.contract.name} #${nftMetadata.tokenId}`}</h1>
        </div>
      </div>}
    </>
  )
}
