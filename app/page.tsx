"use client";

import { Fragment, useState, useEffect } from "react";
import SearchCollection from "../src/components/SearchCollection";
import useNftCollectionMetadata from "../src/hooks/useNftCollectionMetadata";
import Link from "next/link";

const nfts = require("../pages/api/nftList.json");

import type { NextPage } from "next";
import { Seo } from "../ui/Seo";
import { PageHeader } from "../ui/PageHeader";
import { PageTitle } from "../ui/PageTitle";
import { PageSubTitle } from "../ui/PageSubTitle";
import { PageDescription } from "../ui/PageDescription";
import useHomepageNfts from "../src/hooks/useHomepageNfts";

import { GlobalStats } from "./GlobalStats";
import FeaturedCollectionsGrid from "./FeaturedCollections";
import { Loading } from "../ui/Loading";

const Index: NextPage = () => {
  const { loading, homepageNfts } = useHomepageNfts();
  return (
    <>
      <Seo
        title="NFT Wash Trading Detect0r | Data by Origin Protocol"
        description="See if wash trading is detected for NFTs in your collection"
      />
      {/* <PageHeader>
        <PageTitle>NFT Wash Trading Detect0r</PageTitle>
        <PageDescription>
          See if wash trading is detected for NFTs in your collection
        </PageDescription>
      </PageHeader> */}
      <section className="space-y-4 mx-auto px-6 mt-12">
        <div className="flex">
          <div className="flex-1 flex-wrap">
            <GlobalStats stats={!loading ? homepageNfts.data.result : []} />
          </div>
          <div className="flex-1 text-center">
            <PageSubTitle>Am I a victim?</PageSubTitle>
            <p className="my-6">
              Connect your wallet to find out if any of your NFTs have
              indicators of wash trading
            </p>
            <Link href="/wallet/0xae805B9eaa5A04F307b439484eD881e75D36Ac73">
              <button className="btn btn-lg">Connect Wallet</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="space-y-4 mx-auto px-6 mt-12">
        {loading ? (
          <Loading />
        ) : (
          <FeaturedCollectionsGrid
            collections={homepageNfts.data.result.nftProjects}
          />
        )}
        <Link className="link pl-4" href="/collection">
          See all Collections &raquo;
        </Link>
      </section>
    </>
  );
};

export default Index;
