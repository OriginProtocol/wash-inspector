"use client";

import type { NextPage } from "next";
import useHomepageNfts from "../../src/hooks/useHomepageNfts";

import { CollectionsGrid } from "../CollectionsGrid";
import { Loading } from "../../ui/Loading";

const Index: NextPage = () => {
  const { loading, homepageNfts } = useHomepageNfts();
  return (
    <>
      <section className="space-y-4 mx-auto px-6 mt-12">
        {loading ? (
          <Loading />
        ) : (
          <CollectionsGrid
            collections={homepageNfts.data.result.nftProjects}
            hasSearch={true}
            title="Top 100 NFT Collections"
          />
        )}
      </section>
    </>
  );
};

export default Index;
