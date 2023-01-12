import type { FunctionComponent } from "react";
import { useCollectionTransactionData } from "../../../../hooks/useCollectionTransactions";

interface TransactionsDetailTableProps {
  collection: {};
}

const fakeTransactions = [
  {
    id: "1",
    token: "565",
    analysis: "Buyer is Seller",
    date: "3 hours ago",
    walletAddress: "0x12345...67890",
  },
  {
    id: "2",
    token: "327",
    analysis: "Back and Forth Transaction",
    date: "2 days ago",
    walletAddress: "0xDEAD...BEEF",
  },
  {
    id: "3",
    token: "9763",
    analysis: "Same Wallet funded Buyer and Seller",
    date: "2021-05-01",
    walletAddress: "0x7323...1222",
  },
];

const TransactionsDetailTable: FunctionComponent<
  TransactionsDetailTableProps
> = ({ collection }) => {
  const { collectionTransactionData, loading } = useCollectionTransactionData(
    collection.contractAddress
  );

  console.log(loading);
  console.log(collectionTransactionData);

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
          {fakeTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={`https://nip-demo-bucket83908e77-dc1e7vryd6rd.s3.amazonaws.com/partner-assets/ethereum-1/${collection.contractAddress}/md/${transaction.token}`}
                        alt={`Token ${transaction.token}`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Token {transaction.token}</div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </div>
              </td>
              <td>
                {transaction.analysis}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {transaction.walletAddress}
                </span>
              </td>
              <td>{transaction.date}</td>
              <th>
                {/* <button className="btn btn-ghost btn-xs">details</button> */}
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

export { TransactionsDetailTable };
