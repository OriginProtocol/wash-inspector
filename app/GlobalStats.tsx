import type { FunctionComponent, ReactNode } from "react";

interface GlobalStatsProps {
  stats: any;
}

const GlobalStats: FunctionComponent<GlobalStatsProps> = ({ stats }) => (
  <div className="stats shadow w-full px-6">
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
      <div className="stat-title">Suspicious Transactions</div>
      <div className="stat-value">{stats.totalWashTrades}</div>
      <div className="stat-desc">Out of 2.4m analyzed</div>
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
        {Math.round((stats.totalWashTrades / stats.totalTrades) * 100)}%
      </div>
      <div className="stat-desc">↗︎ 12% in the last month</div>
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
      <div className="stat-title">Total Volume</div>
      <div className="stat-value">{Math.round(stats.totalVolume)} ETH</div>
      <div className="stat-desc">total NFT trade volume</div>
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
        {Math.round((stats.totalWashVolume / stats.totalVolume) * 100)}%
      </div>
      <div className="stat-desc">
        Percentage of Total Volume that represents wash trades
      </div>
    </div>
  </div>
);

export { GlobalStats };
