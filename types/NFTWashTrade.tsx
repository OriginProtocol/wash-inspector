export interface NFTWashDetailsAttributes {
  with_trait: number;
  value: string;
  trait_type: string;
}

export enum WashTradeTypes {
  WALLETS_CONNECTED = "wallets_connected",
  BUYER_IS_SELLER = "buyer_is_seller",
  BACK_AND_FORTH = "back_and_forth",
  THREE_TIMES_BUYER = "3_times_buyer",
  THREE_TIMES_SELLER = "3_times_seller",
  CONNECTED_WALLETS_3_TIMES_BUYER = "connected_wallets_3_times_buyer",
  CONNECTED_WALLETS_3_TIMES_SELLER = "connected_wallets_3_times_seller",
}

export interface NFTWashTrade {
  washTradeType: WashTradeTypes;
  transactions: NFTWashTradeTransaction[];
}

export interface NFTWashTradeTransaction {
  amount: number;
  blockNumber: number;
  currency: string;
  event: string;
  from: string;
  marketplace: string;
  timestamp: number;
  to: string;
  transactionHash: string;
}

export interface NFTWashDetails {
  contractAddress: string;
  image: string;
  imageSrc: string;
  listings: string[];
  activity: NFTWashTradeTransaction[];
  metadata: {
    image: string;
    attributes: NFTWashDetailsAttributes[];
  };
  metadataSrc: string;
  mintedBy: string;
  name: string;
  ownedBy: string;
  rarity: string;
  tokenId: string;
  washTraded: boolean;
  washTrades: NFTWashTrade[];
}

export const SEVERITY = {
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1,
  ZERO: 0,
};

import {
  LinkIcon,
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  UsersIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";

export const WashTradeTypeDetails = {
  [WashTradeTypes.WALLETS_CONNECTED]: {
    name: "Connected Wallets",
    short: "WC",
    description:
      "There is a probability that buyer and seller of the NFT have wallets connected",
    severity: SEVERITY.HIGH,
    Icon: LinkIcon,
  },
  [WashTradeTypes.BUYER_IS_SELLER]: {
    name: "Buyer is Seller",
    short: "B=S",
    description: "Buyer and seller are the same wallet",
    severity: SEVERITY.MEDIUM,
    Icon: UsersIcon,
  },
  [WashTradeTypes.BACK_AND_FORTH]: {
    name: "Back and Forth",
    short: "BnF",
    description:
      "Buyer and seller have 2 transactions where the NFT has moved back and forth",
    severity: SEVERITY.MEDIUM,
    Icon: ArrowPathIcon,
  },
  [WashTradeTypes.THREE_TIMES_BUYER]: {
    name: "Bought 3 Times",
    short: "B3X",
    description: "Same wallet has bought the NFT 3 or more times",
    severity: SEVERITY.LOW,
    Icon: Bars3BottomLeftIcon,
  },
  [WashTradeTypes.THREE_TIMES_BUYER]: {
    name: "Buyer is Seller",
    short: "S3X",
    description: "Same wallet has sold the NFT 3 or more times",
    severity: SEVERITY.HIGH,
    Icon: Bars3BottomRightIcon,
  },
};
