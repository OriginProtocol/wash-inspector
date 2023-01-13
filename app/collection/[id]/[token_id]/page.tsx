"use client";

import type { NextPage } from "next";
import Link from "next/link";
import type { NFTWashDetails } from "../../../../types/NFTWashTrade";
import { Seo } from "../../../../ui/Seo";
import { PageSubTitle } from "../../../../ui/PageSubTitle";
import { Breadcrumbs } from "../../../../ui/Breadcrumbs";
import { useNFTWashTrades } from "../../../../hooks/useNFTWashTrades";
import WashTrades from "./WashTrades";
import collections from "../../../../data/nipCollections";

import { Loading } from "../../../../ui/Loading";

const Index: NextPage = ({ params: { id, token_id: tokenId } }) => {
  console.log("id: " + id);
  console.log("tokenId: " + tokenId);

  const { loading, nftWashTrades } = useNFTWashTrades(id, tokenId);

  const collection = collections.find(
    (collection) => collection.contractAddress === id
  );

  if (loading) {
    return <Loading />;
  }

  const washDetails: NFTWashDetails = nftWashTrades.data.history;

  console.log("okyea2");
  console.log(washDetails);

  const crumbs = [
    { text: collection.title, uri: `/collection/${id}` },
    {
      text: washDetails.name || `Token ${tokenId}`,
      uri: `/collection/${id}/${tokenId}`,
    },
  ];

  return (
    <div className="container max-w-6xl mx-auto px-4 md:px-12">
      <Breadcrumbs crumbs={crumbs} />
      <Seo
        title="NFT Wash Trading Detect0r | Data by Origin Protocol"
        description="See if wash trading is detected for NFTs in your collection"
      />
      <div className="flex">
        <div className="flex-1 p-2">
          <img src={washDetails.image} className="mb-2" />
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Transactions</div>
              <div className="stat-value">{washDetails.activity.length}</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Suspicious trades</div>
              <div className="stat-value">{washDetails.washTrades.length}</div>
              <div className="stat-desc">↗︎ 12 (100%)</div>
            </div>
          </div>
        </div>
        <div className="flex-3 p-2">
          <PageSubTitle className="my-3">
            {washDetails.name || `Token ${tokenId}`}
          </PageSubTitle>
          <dl>
            <div className="bg-gray-50 md:px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Owned By</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <Link className="link" href={`/wallet/${washDetails.ownedBy}`}>
                  {washDetails.ownedBy}
                </Link>
              </dd>
            </div>
            <div className="bg-white md:px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Rarity</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {washDetails.rarity}
              </dd>
            </div>
          </dl>
          <PageSubTitle className="my-3">
            Recent Suspected Wash Trades
          </PageSubTitle>
          <WashTrades washTrades={washDetails.washTrades} />
        </div>
      </div>
    </div>
  );
};

export default Index;
