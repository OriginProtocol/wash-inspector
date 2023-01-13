import { Fragment } from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import Link from "next/link";
import { WashTradeTypeDetails } from "../../../../types/NFTWashTrade";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");
const formatDate = (date: Date) => timeAgo.format(date); //date.toLocaleDateString("en-US");

const shortenAddress = (address, chars = 6) =>
  `${address.substr(0, chars)}...${address.substr(-chars)}`;

const WashTradeSummary = ({
  type: { name, description, Icon },
  transactions = [],
}) => (
  <div className="py-2">
    <span className="float-right">
      {formatDate(new Date(transactions[0].timestamp * 1000))}
    </span>
    <h3>
      <Icon className="h-4 w-4 inline mr-2" />
      {name}
      <InformationCircleIcon
        title={description}
        className="h-4 w-4 inline ml-2 text-blue-500 cursor-pointer "
      />
    </h3>
  </div>
);

export default function WashTrades({ washTrades = [] }) {
  return (
    <div className="mt-2 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full px-3 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full">
              <tbody className="bg-white">
                {washTrades.map(({ washTradeType, transactions }, index) => (
                  <Fragment key={index}>
                    <tr className="border-t border-gray-200">
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="bg-gray-50 px-4 px-3 text-left text-sm font-semibold text-gray-900 sm:px-6"
                      >
                        <WashTradeSummary
                          type={WashTradeTypeDetails[washTradeType]}
                          transactions={transactions}
                        />
                      </th>
                    </tr>
                    <tr>
                      <th
                        scope="col"
                        className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Block
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left text-sm font-semibold text-gray-900"
                      >
                        From
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left text-sm font-semibold text-gray-900"
                      >
                        To
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left text-sm font-semibold text-gray-900"
                      >
                        Price
                      </th>
                      <th scope="col" className="relative py-3 sm:pr-6">
                        <span className="sr-only">Details</span>
                      </th>
                    </tr>
                    {transactions.map((transaction, transIdx) => (
                      <tr
                        key={transIdx}
                        className={classNames(
                          transIdx === 0
                            ? "border-gray-300"
                            : "border-gray-200",
                          "border-t"
                        )}
                      >
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {transaction.blockNumber}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          <Link href={`/wallet/${transaction.from}`}>
                            <button className="btn btn-ghost btn-xs">
                              {shortenAddress(transaction.from)}
                            </button>
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          <Link href={`/wallet/${transaction.to}`}>
                            <button className="btn btn-ghost btn-xs">
                              {shortenAddress(transaction.to)}
                            </button>
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          {transaction.amount &&
                            `${transaction.amount / 1000000000000000000} ETH`}
                        </td>
                        <td className="relative whitespace-nowrap px-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link
                            target="_blank"
                            href={`https://etherscan.io/tx/${transaction.transactionHash}`}
                          >
                            <button className="btn btn-ghost btn-xs">
                              <span>
                                <ArrowTopRightOnSquareIcon className="h-3 w-3 inline-block mr-1" />
                                see txn
                              </span>
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
