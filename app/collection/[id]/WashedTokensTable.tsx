import type { FunctionComponent } from "react";
import type { NFTWashDetails } from "../../../types/NFTWashTrade";
import { WashTradeTypeDetails } from "../../../types/NFTWashTrade";
import Link from "next/link";

interface TransactionsTableProps {
  washTradedNfts: NFTWashDetails[];
  address: string;
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
            {tag.name}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

const shortenAddress = (address, chars = 6) =>
  `${address.substr(0, chars)}...${address.substr(-chars)}`;

const WashedTokensTable: FunctionComponent<TransactionsTableProps> = ({
  washTradedNfts = [],
  address,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Token</th>
            <th>Analysis</th>
            <th>Details</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {washTradedNfts.map((nft) => (
            <tr key={nft.tokenId}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={nft.image} alt={`Token ${nft.tokenId}`} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      <Link
                        className="link"
                        href={`/collection/${address}/${nft.tokenId}`}
                      >
                        Token {nft.tokenId}
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
                  <Link className="link" href="">
                    {shortenAddress(nft.ownedBy)}
                  </Link>
                </span>
              </th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Token</th>
            <th>Analysis</th>
            <th>Details</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export { WashedTokensTable };
