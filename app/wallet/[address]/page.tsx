"use client";

import type { NextPage } from "next";
import type { CollectionWashTradeDetails } from "../../../types/CollectionWashTrade";
import Link from "next/link";
import { Breadcrumbs } from "../../../ui/Breadcrumbs";
import { useWalletWashTrades } from "../../../hooks/useWalletWashTrades";
import { WashedTokensTable } from "../../collection/[id]/WashedTokensTable";
import { PageSubTitle } from "../../../ui/PageSubTitle";

const Index: NextPage = ({ params: { address } }) => {
  const { loading, walletWashTrades } = useWalletWashTrades(address);

  if (loading) {
    return "Loading...";
  }

  console.log(loading);
  console.log(walletWashTrades);
  const details: CollectionWashTradeDetails = walletWashTrades?.data;

  console.log(details);

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <Breadcrumbs
        crumbs={[{ text: `Wallet ${address}`, uri: `/wallet/${address}` }]}
      />
      <PageSubTitle>Wallet</PageSubTitle>
      <WashedTokensTable {...details} />
    </div>
  );
};

export default Index;
