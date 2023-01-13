import { CollectionsGrid } from "./CollectionsGrid";

const FeaturedCollections = ({ collections }) => (
  <>
    <CollectionsGrid
      title="Featured Collections"
      description="We continually crawl all of the top NFT collections for evidence of wash trading"
      hasSearch={false}
      collections={collections.slice(0, 9)}
    />
  </>
);

export default FeaturedCollections;
