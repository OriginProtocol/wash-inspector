import type { FunctionComponent } from "react";
import TimeAgo from "javascript-time-ago";
import type {
  NFTWashTrade,
  WashTradeTypes,
} from "../../../../types/NFTWashTrade";
import { WashTradeTypeDetails } from "../../../../types/NFTWashTrade";
import Link from "next/link";

import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

interface WashTradesProps {
  washTraded?: boolean;
  washTrades?: NFTWashTrade[];
}

const formatDate = (date: Date) => timeAgo.format(date); //date.toLocaleDateString("en-US");

const shortenAddress = (address, chars = 6) =>
  `${address.substr(0, chars)}...${address.substr(-chars)}`;

const WashTradeSummary = ({
  type: { name, description },
  transactions = [],
}) => (
  <div className="stats">
    <div className="stat p-2 m-0">
      <div className="stat-figure text-secondary"></div>
      <div className="stat-title">{name}</div>
      <div className="stat-value text-2xl py-1">
        {formatDate(new Date(transactions[0].timestamp * 1000))}
      </div>
      <div className="stat-desc">{description}</div>
    </div>
  </div>
);

const WashTradesTable: FunctionComponent<WashTradesProps> = ({
  washTraded,
  washTrades = [],
}) => (
  <>
    {washTrades.map(({ washTradeType, transactions }, index) => (
      <div
        key={index}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2 p-0"
      >
        <input type="checkbox" className="h-auto w-auto" />
        <div className="collapse-title text-xl font-medium">
          <WashTradeSummary
            type={WashTradeTypeDetails[washTradeType]}
            transactions={transactions}
          />
        </div>
        <div className="collapse-content">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Block</th>
                <th>From</th>
                <th>To</th>
                <th>Price</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={`${transaction.blockNumber}-${index}`}>
                  <td>{transaction.blockNumber}</td>
                  <td>
                    <Link href={`/wallet/${transaction.from}`}>
                      <button className="btn btn-ghost btn-xs">
                        {shortenAddress(transaction.from)}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <Link href={`/wallet/${transaction.to}`}>
                      <button className="btn btn-ghost btn-xs">
                        {shortenAddress(transaction.to)}
                      </button>
                    </Link>
                  </td>
                  <td>
                    {transaction.amount &&
                      `${transaction.amount / 1000000000000000000} ETH`}
                  </td>
                  <th>
                    <Link
                      target="_blank"
                      href={`https://etherscan.io/tx/${transaction.transactionHash}`}
                    >
                      <button className="btn btn-ghost btn-xs">see txn</button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </>
);

export { WashTradesTable };
