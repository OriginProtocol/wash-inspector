"use client";

import type { NextPage } from "next";
import { Seo } from "../../../../ui/Seo";
import { PageHeader } from "../../../../ui/PageHeader";
import { PageTitle } from "../../../../ui/PageTitle";
import { PageDescription } from "../../../../ui/PageDescription";
import collections from "../../../../data/nipCollections";
import { TransactionsDetailTable } from "./TransactionsDetailTable";

const Index: NextPage = ({ params: { id, tokenId } }) => {
  console.log(id);

  const collection = collections.find(
    (collection) => collection.contractAddress === id
  );

  console.log(collection);

  return (
    <>
      <Seo
        title="NFT Wash Trading Detect0r | Data by Origin Protocol"
        description="See if wash trading is detected for NFTs in your collection"
      />
      <PageHeader>
        <PageTitle>{collection.title}</PageTitle>
        <PageDescription>
          {
            collection.washTradingIndicators
              .totalSuspiciousTransactionPercentage
          }
          % of the transactions on this collection look like wash trading
        </PageDescription>
      </PageHeader>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="stats stats-vertical shadow w-full md:w-1/2 lg:w-1/3">
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
              <div className="stat-value">135</div>
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
              <div className="stat-value">24</div>
              <div className="stat-desc">↗︎ 12 (100%)</div>
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
              <div className="stat-title">Percent suspicious transactions</div>
              <div className="stat-value">17.43%</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
          <div className="flex-3">
            <TransactionsDetailTable collection={collection} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
