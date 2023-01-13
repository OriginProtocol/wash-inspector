"use client";

import type { NextPage } from "next";
import type { CollectionWashTradeDetails } from "../../../types/CollectionWashTrade";
import Link from "next/link";
import { Breadcrumbs } from "../../../ui/Breadcrumbs";
import { useWalletWashTrades } from "../../../hooks/useWalletWashTrades";
import { WashedTokensTable } from "../../collection/[id]/WashedTokensTable";
import { PageSubTitle } from "../../../ui/PageSubTitle";
import { Loading } from "../../../ui/Loading";

const Index: NextPage = ({ params: { address } }) => {
  const { loading, walletWashTrades } = useWalletWashTrades(address);

  if (loading) {
    return <Loading />;
  }

  const details: CollectionWashTradeDetails = walletWashTrades?.data;

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <Breadcrumbs
        crumbs={[{ text: `Wallet ${address}`, uri: `/wallet/${address}` }]}
      />
      <PageSubTitle>Wallet</PageSubTitle>
      <WashedTokensTable contractAddressWithinNFT={true} {...details} />
    </div>
  );
};

export default Index;
