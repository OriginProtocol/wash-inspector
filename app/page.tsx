"use client"

import { Fragment, useState, useEffect } from 'react'
import SearchCollection from "../src/components/SearchCollection"
import GlobalStore from '../src/stores/GlobalStore'
import useNftCollectionMetadata from '../src/hooks/useNftCollectionMetadata'
import Link from 'next/link'

const nfts = require("../pages/api/nftList.json")

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [selectedNft, setSelectedNft] = useState(false)
  const [selectedNftId, setSelectedNftId] = useState(false)
  const nftMetadata = useNftCollectionMetadata(selectedNft?.address);

  return (
    <>
      <div className="border-b border-gray-200 py-5 -mx-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center px-4 sm:px-6 justify-between sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Choose your NFT</h3>
          </div>
        </div>
      </div>
      <div className="d-flex mt-10 mx-32">
        <SearchCollection
          filterSetCallback={(query) => {
            return query === ''
              ? nfts
              : nfts.filter((nft) => {
                  return nft.name.toLowerCase().includes(query.toLowerCase()) ||
                   nft.address.toLowerCase().includes(query.toLowerCase())
                })
          }}
          elementToKey={e => e?.address}
          elementToDisplayName={e => e?.name}
          elementToOptionalLabel={e => e?.address}
          onSelectionChange={e => {
            setSelectedNft(e)
            setSelectedNftId(false)
          }}
          label="NFT name or contract address"
        />
        {nftMetadata && (<>
          <div className="mt-10">
            <label className="block text-sm font-medium text-gray-700" >
              {`Pick NFT id ranging from 1 - ${nftMetadata.totalSupply}`}
            </label>
            <div className="relative mt-1">
              <input
                onChange={(e) => setSelectedNftId(e.target.value)}
                type="number"
                name="nftId"
                id="nftId"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder={`Number from 1 - ${nftMetadata.totalSupply}`}
                min="1"
                max={nftMetadata.totalSupply}
              />
              </div>
          </div>
        </>)}
        {nftMetadata && selectedNftId && (<>
          <Link
            href={`/washinspector?address=${nftMetadata.address}&nftId=${selectedNftId}`}
            className="mt-8 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Is it clean?
          </Link>
        </>)}
      </div>
    </>
  )
}
