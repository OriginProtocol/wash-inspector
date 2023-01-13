import type { FunctionComponent } from "react";
import type { NFTWashDetails } from "../../../types/NFTWashTrade";
import { useState } from "react";
import { WashTradeTypeDetails } from "../../../types/NFTWashTrade";
import Link from "next/link";

interface TransactionsTableProps {
  washTradedNfts: NFTWashDetails[];
  address: string;
  pageSize?: number;
  contractAddressWithinNFT?: boolean;
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
      <div className="card-actions justify-start">
        {tags.map((tag) => (
          <div
            key={tag.short}
            className={`badge badge-outline ${
              severityToBadgeClassMap[tag.severity]
            }`}
          >
            {tag.name}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

const shortenAddress = (address, chars = 8) =>
  `${address.substr(0, chars)}...${address.substr(-chars)}`;

const Table: FunctionComponent<TransactionsTableProps> = ({
  washTradedNfts = [],
  address,
  contractAddressWithinNFT = false,
  pageSize = 500,
}) => {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Token</th>
          <th>Analysis</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {washTradedNfts.slice(0, pageSize).map((nft) => {
          const addr = contractAddressWithinNFT ? nft.contractAddress : address;
          return (
            <tr key={nft.tokenId}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={nft.image}
                        alt={nft.name || `Token ${nft.tokenId}`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      <Link
                        className="link"
                        href={`/collection/${addr}/${nft.tokenId}`}
                      >
                        {nft.name || `Token ${nft.tokenId}`}
                      </Link>
                    </div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </div>
              </td>
              <td>
                <Tags
                  tags={nft.washTrades.map((d) => WashTradeTypeDetails[d])}
                />
              </td>
              <th>
                <span className="badge badge-ghost badge-sm">
                  Owner:{" "}
                  <Link className="link" href={`/wallet/${nft.ownedBy}`}>
                    {shortenAddress(nft.ownedBy)}
                  </Link>
                </span>
              </th>
            </tr>
          );
        })}
      </tbody>
      {washTradedNfts.length > pageSize && (
        <tfoot>
          <tr>
            <th>Token</th>
            <th>Analysis</th>
            <th>Details</th>
          </tr>
        </tfoot>
      )}
    </table>
  );
};

const NotFound = () => (
  <p className="my-10 text-center">No Washed NFTs found</p>
);

const WashedTokensTable: FunctionComponent<TransactionsTableProps> = ({
  washTradedNfts = [],
  address,
  contractAddressWithinNFT = false,
}) => {
  const [filter, setFilter] = useState("");

  const filteredNfts = washTradedNfts.filter(
    (nft) =>
      nft.name.toLowerCase().includes(filter.toLowerCase()) ||
      nft.tokenId.toString().includes(filter)
  );

  return (
    <div className="overflow-x-auto">
      <div className="text-center my-3">
        <input
          type="text"
          placeholder="Filter by token name or number"
          className="input input-bordered w-full max-w-lg"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      {filteredNfts.length === 0 ? (
        <NotFound />
      ) : (
        <Table
          washTradedNfts={filteredNfts}
          address={address}
          contractAddressWithinNFT={contractAddressWithinNFT}
        />
      )}
    </div>
  );
};

export { WashedTokensTable };
