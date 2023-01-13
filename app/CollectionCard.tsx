/* eslint-disable @next/next/no-img-element */
import type { FunctionComponent } from "react";

interface CollectionCardProps {
  isNew?: boolean;
  tags?: string[];
  collection: CollectionWashStats;
}

export interface CollectionWashStats {
  address: string;
  name: string;
  symbol: string;
  totalSupply: number;
  tokensIngested: number;
  traitsIngested: number;
  metadataIngested: number;
  assetsIngested: number;
  openseaSlug: string;
  // thumbnail: `https://assets.story.xyz/${collection.gsiSortKey}/assets/md/4505`,
  imageUrl: string;

  washTradingIndicators: {
    totalSuspiciousTransactionPercentage: number;
    backAndForthTransactionPercentage: number;
    sameWalletFundedTransactionPercentage: number;
    boughtThreeTimesTransactionPercentage: number;
    buyerIsSellerTransactionsPercentage: number;
  };
}

//severity is a number between 0 and 3
const severityToBadgeClassMap = [
  "badge-success",
  "badge-warning",
  "badge-warning",
  "badge-error",
];

const Tags = ({ tags }) => {
  if (tags.length) {
    return (
      <div className="card-actions justify-end">
        {tags.map((tag) => (
          <div
            key={tag.short}
            className={`badge badge-outline ${
              severityToBadgeClassMap[tag.severity]
            }`}
          >
            {tag.short}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

// After buying an NFT after a suspicious trade, buyer lost money 78% of the time.

const CollectionCard: FunctionComponent<CollectionCardProps> = ({
  collection,
  isNew,
  tags = ["Test1", "Test2"],
}) => (
  <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <article className="overflow-hidden rounded-lg shadow-lg">
      <a href={`/collection/${collection.address}`}>
        <img
          alt={`${collection.name} imageUrl`}
          className="block h-auto w-full md:h-48 lg:h-64"
          src={collection.imageUrl}
        />
      </a>

      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
          <a className="no-underline hover:underline text-black" href="#">
            {collection.name}
          </a>
          {isNew ? <div className="badge badge-primary">NEW</div> : null}
        </h1>
      </header>

      <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <Tags tags={tags} />
      </footer>
    </article>
  </div>
);

export { CollectionCard };
