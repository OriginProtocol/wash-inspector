"use client";

import type { NextPage } from "next";
import type { NFTWashDetails } from "./types";
import { Seo } from "../../../../ui/Seo";
import { PageTitle } from "../../../../ui/PageTitle";
import { PageSubTitle } from "../../../../ui/PageSubTitle";
import { useNFTWashTrades } from "../../../../hooks/useNFTWashTrades";
import { WashTradesTable } from "./WashTradesTable";
import Link from "next/link";

const Index: NextPage = ({ params: { id, token_id: tokenId } }) => {
  console.log("id: " + id);
  console.log("tokenId: " + tokenId);

  const { loading, nftWashTrades } = useNFTWashTrades(id, tokenId);

  if (loading) {
    return null;
  }

  const washDetails: NFTWashDetails = nftWashTrades.data.history;

  console.log("okyea2");
  console.log(washDetails);

  return (
    <>
      <Seo
        title="NFT Wash Trading Detect0r | Data by Origin Protocol"
        description="See if wash trading is detected for NFTs in your collection"
      />
      <header className="max-w-6xl mx-auto px-4 md:px-12 mt-12">
        <Link className="link mb-6" href={`/collection/${id}`}>
          &laquo; back to collection
        </Link>
        <PageTitle>Token {tokenId}</PageTitle>
      </header>
      <div className="container max-w-6xl mx-auto px-4 md:px-12">
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
                <div className="stat-value">
                  {washDetails.washTrades.length}
                </div>
                <div className="stat-desc">↗︎ 12 (100%)</div>
              </div>
            </div>
          </div>
          <div className="flex-3 p-2">
            <PageSubTitle className="mb-2">
              Recent Suspected Wash Trades
            </PageSubTitle>
            <WashTradesTable washTrades={washDetails.washTrades} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
