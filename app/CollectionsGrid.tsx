import type { FunctionComponent } from "react";
import React, { useState } from "react";
import { CollectionCard } from "./CollectionCard";
import rawData from "../data/nipCollections";

interface CollectionsGridProps {
  collections: any[];
}

// {
//   gsiSortKey: "0x031920cc2D9F5c10B444FD44009cd64F829E7be2",
//   tokensIngested: 10000,
//   traitsIngested: 10000,
//   contractInfo: {
//     name: "CryptoZunks",
//     symbol: "ZUNK",
//     totalSupply: 10000,
//   },
//   metadataIngested: 10000,
//   openseaSlug: "zunkz",
//   assetsIngested: 10000,
// },

// return {
//   contractAddress: collection.gsiSortKey,
//   title: collection.contractInfo.name,
//   symbol: collection.contractInfo.symbol,
//   totalSupply: collection.contractInfo.totalSupply,
//   tokensIngested: collection.tokensIngested,
//   traitsIngested: collection.traitsIngested,
//   metadataIngested: collection.metadataIngested,
//   assetsIngested: collection.assetsIngested,
//   openseaSlug: collection.openseaSlug,
//   // thumbnail: `https://assets.story.xyz/${collection.gsiSortKey}/assets/md/4505`,
//   thumbnail: `https://nip-demo-bucket83908e77-dc1e7vryd6rd.s3.amazonaws.com/partner-assets/ethereum-1/${collection.gsiSortKey}/md/1`,

//   washTradingIndicators: {
//     totalSuspiciousTransactionPercentage,
//     backAndForthTransactionPercentage,
//     sameWalletFundedTransactionPercentage,
//     boughtThreeTimesTransactionPercentage,
//     buyerIsSellerTransactionsPercentage,
//   },

// const data = rawData.

console.log(rawData);

const SEVERITY = {
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1,
  ZERO: 0,
};

const TagTypes = {
  highTotalPercentage: {
    name: "Highly Washed",
    short: "HW",
    description:
      "This collection has a high percentage of suspicious transactions.",
    severity: SEVERITY.HIGH,
  },
  backAndForth: {
    name: "Back and Forth",
    short: "BnF",
    description:
      "This collection has a high percentage of back and forth transactions.",
    severity: SEVERITY.MEDIUM,
  },
  sameWallet: {
    name: "Same Wallet",
    short: "SW",
    description:
      "This collection has a high percentage of transactions funded by the same wallet.",
    severity: SEVERITY.MEDIUM,
  },
  boughtThreeTimes: {
    name: "Bought 3 Times",
    short: "B3X",
    description:
      "This collection has a high percentage of transactions where the same wallet bought the same NFT three times.",
    severity: SEVERITY.LOW,
  },
  buyerIsSeller: {
    name: "Buyer is Seller",
    short: "B=S",
    description:
      "This collection has a high percentage of transactions where the buyer is also the seller.",
    severity: SEVERITY.HIGH,
  },
  clean: {
    name: "Clean",
    short: "CLEAN",
    description: "This collection has no suspicious transactions.",
    severity: SEVERITY.ZERO,
  },
};

//do some basic processing to the data to make some nice tags. This is all total BS of course
const processed = rawData.map((collection) => {
  const {
    totalSuspiciousTransactionPercentage,
    backAndForthTransactionPercentage,
    sameWalletFundedTransactionPercentage,
    boughtThreeTimesTransactionPercentage,
    buyerIsSellerTransactionsPercentage,
  } = collection.washTradingIndicators;

  const tags = [];

  if (totalSuspiciousTransactionPercentage > 15) {
    tags.push(TagTypes.highTotalPercentage);
  }

  if (backAndForthTransactionPercentage > 2) {
    tags.push(TagTypes.backAndForth);
  }

  if (sameWalletFundedTransactionPercentage > 12) {
    tags.push(TagTypes.sameWallet);
  }

  if (boughtThreeTimesTransactionPercentage > 4) {
    tags.push(TagTypes.boughtThreeTimes);
  }

  if (buyerIsSellerTransactionsPercentage > 6) {
    tags.push(TagTypes.buyerIsSeller);
  }

  if (tags.length === 0) {
    tags.push(TagTypes.clean);
  }

  return {
    collection,
    tags,
  };
});

// After buying an NFT after a suspicious trade, buyer lost money 78% of the time.

const CollectionsGrid: FunctionComponent<CollectionsGridProps> = ({
  collections = [],
}) => {
  const [search, setSearch] = useState("");

  const filtered = search?.length
    ? processed.filter((item) => {
        return item.collection.title
          .toLowerCase()
          .includes(search.toLowerCase());
      })
    : processed;

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="text-center my-2">
        <input
          type="text"
          placeholder="Search Collections..."
          className="input input-bordered w-1/2 text-center"
          onKeyUp={(e) => {
            setSearch(e.currentTarget.value);
          }}
        />
      </div>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {filtered.map((item) => (
          <CollectionCard key={item.collection.contractAddress} {...item} />
        ))}
      </div>
    </div>
  );
};

export { CollectionsGrid };
