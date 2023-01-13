import { NFTWashDetails } from "./NFTWashTrade";

export interface CollectionWashTradeDetails {
  address: string;
  trades: number;
  volume: number;
  washTrades: number;
  washVolume: number;
  washTradedNfts: NFTWashDetails[];
}
