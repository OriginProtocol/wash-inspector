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

function CheckMyNFTs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-indigo-700 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block">Got wash-traded?</span>
                <span className="block">Connect to find out</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                Connect your wallet below to find out if any of your NFTs were
                ever wash traded
              </p>
              <Link
                href="/wallet/0xae805B9eaa5A04F307b439484eD881e75D36Ac73"
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 shadow hover:bg-indigo-50"
              >
                Connect Wallet
              </Link>
            </div>
          </div>
          <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
            <img
              className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

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
        <PageTitle className="text-center">Overall Market Stats</PageTitle>
        <GlobalStats stats={!loading ? homepageNfts.data.result : []} />
      </section>
      <CheckMyNFTs />
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
