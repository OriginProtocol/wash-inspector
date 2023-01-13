"use client";

import type { NextPage } from "next";
import Link from "next/link";
import type { CollectionWashTradeDetails } from "../../../types/CollectionWashTrade";
import { Seo } from "../../../ui/Seo";
import { Breadcrumbs } from "../../../ui/Breadcrumbs";
import { PageTitle } from "../../../ui/PageTitle";
import collections from "../../../data/nipCollections";
import { useCollectionWashTrades } from "../../../hooks/useCollectionWashTrades";
import { WashedTokensTable } from "./WashedTokensTable";
import { PageSubTitle } from "../../../ui/PageSubTitle";
import { Loading } from "../../../ui/Loading";

const Index: NextPage = ({ params: { id } }) => {
  const collection = collections.find(
    (collection) => collection.contractAddress === id
  );

  const { loading, collectionWashTrades } = useCollectionWashTrades(id);

  if (loading) {
    return <Loading />;
  }

  const details: CollectionWashTradeDetails = collectionWashTrades?.data;
  const washTradesPercentage = Math.round(
    (details.washTrades / details.trades) * 100
  );

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <Breadcrumbs
        crumbs={[{ text: collection.title, uri: `/collection/${id}` }]}
      />
      <Seo
        title="NFT Wash Trading Detect0r | Data by Origin Protocol"
        description="See if wash trading is detected for NFTs in your collection"
      />
      <section>
        <div className="mx-auto lg:flex lg:justify-evenly lg:items-center">
          <div className="max-w-xl">
            <img
              alt={`${collection.title} imageUrl`}
              className="block h-auto w-full md:h-64 lg:h-64"
              src={collection.thumbnail}
            />
          </div>
          <div className="relative mt-1.5">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-xl lg:text-2xl">
              {collection.title}
            </h2>
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
                <div className="stat-title">Wash Trades Percentage</div>
                <div className="stat-value">{washTradesPercentage}%</div>
                <div className="stat-desc">
                  {details.washTrades} suspicious trades
                </div>
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
                <div className="stat-title">Wash Traded NFTs</div>
                <div className="stat-value">
                  {details.washTradedNfts.length}
                </div>
                <div className="stat-desc">suspected wash traded</div>
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
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Wash Trade Volume</div>
                <div className="stat-value">
                  {Math.round(details.washVolume)} ETH
                </div>
                <div className="stat-desc">
                  out of {Math.round(details.volume)} ETH (
                  {Math.round((details.washVolume / details.volume) * 100)}%)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="-mx-1 lg:-mx-4 mt-12">
        <div>
          <PageSubTitle className="my-4">
            Search {details.washTradedNfts.length} Suspected Washed Tokens:
          </PageSubTitle>
          <WashedTokensTable {...details} />
        </div>
      </div>
    </div>
  );
};

export default Index;
